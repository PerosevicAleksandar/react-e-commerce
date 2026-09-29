import { Link } from "react-router-dom";
import Product from "@/components/ProductDetailsPage/Product";


function ProductDetails() {
    return(
        <div className="mx-auto px-4 sm:px-6 lg:px-24 py-6">
                <div className="text-sm md:text-md text-secondary">
                    <Link to="/">Home</Link>
                    <span> &gt; </span>
                    <Link to="/products">Shop</Link>
                </div>
                <div className="py-6 lg:py-12">
                    <Product/>
                </div>
        </div>
    )
}

export default ProductDetails;