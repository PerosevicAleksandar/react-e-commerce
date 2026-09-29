import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiRequest } from "@/apiClient";
import { PulseLoader } from "react-spinners";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

function Product() {
    const { id } = useParams();
    const { handleAddToCart } = useContext(CartContext);


    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedSize, setSelectedSize] = useState("");

    useEffect(() => {
        async function loadProduct() {
            try {
                const result = await apiRequest(`/products/${id}`);

                setProduct(result);
            } catch (error) {
                console.error("Failed to load product:", error);
                setError("Failed to load product.");
            } finally {
                setLoading(false);
            }
        }

        loadProduct();
    }, [id]);

    if (loading) {
        return (
            <div>
                <PulseLoader size={10} color="#000000" />
                <p>Loading product...</p>
            </div>
        )
    }

    if (!product) {
        return <p className="text-center">Product not found.</p>;
    }

    if (error) {
        return <p className="text-red-500 text-center">{error}</p>;
    }



    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
            <div>
                <img src={`/images/${product.id}.png`} alt={product.title} className="w-full h-80 sm:h-96 lg:h-130 object-contain" />
            </div>
            <div className="flex flex-col">
                <h2 className="text-xl sm:text-2xl font-bold">{product.title}</h2>
                <p className="text-xl font-bold mt-2">${Number(product.price).toFixed(2)}</p>
                <p className="text-base sm:text-lg mt-6 lg:mt-12 mb-8 lg:mb-10">{product.description}</p>
                <div className="border-t border-b border-secondary py-4">
                    <div>
                        <span className="text-lg">Select color</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-3">
                        <button
                            onClick={() => setSelectedColor("white")}
                            className={`w-10 h-10 rounded-full border bg-white ${selectedColor === "white" ? "ring-2 ring-black ring-offset-2" : ""}`}></button>
                        <button
                            onClick={() => setSelectedColor("black")}
                            className={`w-10 h-10 rounded-full border bg-black ${selectedColor === "black" ? "ring-2 ring-black ring-offset-2" : ""}`}></button>
                        <button
                            onClick={() => setSelectedColor("gray")}
                            className={`w-10 h-10 rounded-full border bg-gray-400 ${selectedColor === "gray" ? "ring-2 ring-black ring-offset-2" : ""}`}></button>

                        <button
                            onClick={() => setSelectedColor("red")}
                            className={`w-10 h-10 rounded-full border bg-red-800 ${selectedColor === "red" ? "ring-2 ring-black ring-offset-2" : ""}`}></button>
                        <button
                            onClick={() => setSelectedColor("green")}
                            className={`w-10 h-10 rounded-full border bg-green-700 ${selectedColor === "green" ? "ring-2 ring-black ring-offset-2" : ""}`}></button>
                        <button
                            onClick={() => setSelectedColor("beige")}
                            className={`w-10 h-10 rounded-full border bg-[#C8B8A2] ${selectedColor === "beige" ? "ring-2 ring-black ring-offset-2" : ""}`}></button>
                    </div>
                </div>
                <div className="py-5">
                    <span className="text-lg mb-4">Select size</span>
                    <div className="flex flex-wrap gap-3 sm:gap-6">
                        <button className={`border rounded-lg w-14 py-2 ${selectedSize === "S" ? "bg-black text-white" : ""}`}
                        onClick={() => setSelectedSize("S")}>S</button>
                        <button className={`border rounded-lg w-14 py-2 ${selectedSize === "M" ? "bg-black text-white" : ""}`}
                        onClick={() => setSelectedSize("M")}>M</button>
                        <button className={`border rounded-lg w-14 py-2 ${selectedSize === "L" ? "bg-black text-white" : ""}`}
                        onClick={() => setSelectedSize("L")}>L</button>
                        <button className={`border rounded-lg w-14 py-2 ${selectedSize === "XL" ? "bg-black text-white" : ""}`}
                        onClick={() => setSelectedSize("XL")}>XL</button>
                    </div>
                </div>
                <div className="flex items-center border rounded-lg w-fit mt-5 mb-5">
                    <button className="px-4 py-2"
                        onClick={() => setQuantity((quantity) => quantity > 1 ? quantity - 1 : 1)}>-</button>
                    <span className="px-4">{quantity}</span>
                    <button className="px-4 py-2"
                        onClick={() => setQuantity((quantity) => quantity + 1)}>+</button>
                </div>
                <button className="btn-dark w-full"
                    onClick={() => handleAddToCart(product, quantity)}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product;