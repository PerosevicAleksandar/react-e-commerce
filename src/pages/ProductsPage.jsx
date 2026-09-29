import { Link, useParams } from "react-router-dom";
import SideBar from "../components/ProductsPage/SideBar"
import { useState, useEffect } from "react";
import { apiRequest } from "../apiClient";
import ProductCard from "../components/ProductsPage/ProductCard";
import { PulseLoader } from "react-spinners";

function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const { category } = useParams();


    useEffect(() => {
        async function loadProducts() {
            try {
                const result = await apiRequest("/products");

                setProducts(result);
            } catch (error) {
                console.error("Failed to load products:", error);
                setError("Failed to load products.");
            } finally {
                setLoading(false);
            }
        }

        loadProducts();
    }, []);

    function getCategory(category) {
        if (category === "men") {
            return "Men Clothing";
        }

        if (category === "women") {
            return "Women Clothing";
        }

        return null;
    }

    const selectedCategory = getCategory(category);

    const filteredProducts = category
        ? products.filter((product) =>
            product.category === selectedCategory)
        : products;

    return (
        <div>
            <div className="mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 py-6">
                <div className="text-sm md:text-md text-secondary">
                    <Link to="/">Home</Link>
                    <span> &gt; </span>
                    <Link to="/products">Shop</Link>
                </div>
                <div className="flex justify-center">
                    <h1 className="text-2xl md:text-3xl font-bold py-6 capitalize text-center">View {category} Products</h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="hidden lg:block lg:col-span-1">
                        <SideBar />
                    </div>
                    <div className="lg:col-span-3">
                        {loading ? (
                            <div style={{ textAlign: "center", marginTop: "50px" }}>
                                <PulseLoader size={10} color="#000000" />
                                <p>Loading products...</p>
                            </div>
                        ) : error ? (
                            <p className="mt-12 text-lg text-center text-red-500">{error}</p>
                        ) : (filteredProducts.length === 0 ? (
                            <p className="mt-12 text-lg text-center">
                                No products for selected category.
                            </p>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
                                {filteredProducts.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsPage;