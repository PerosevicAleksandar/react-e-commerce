import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

function ProductCards({ product }) {
    const { handleAddToCart } = useContext(CartContext);

    return (
        <div className="border border-secondary rounded-lg p-3 flex flex-col h-full shadow-sm w-full max-w-xs mx-auto md:max-w-none md:mx-0">
            <Link to={`/products/${product.id}`}>
                <img src={`/images/${product.id}.png`} alt={product.title} className="w-full h-64 md:h-52 object-cover rounded-md"/>
            </Link>
            <h2 className="text-sm mt-3">{product.title}</h2>
            <p className="text-lg font-bold mt-1 mb-3">${Number(product.price).toFixed(2)}</p>
            <button className="btn-light w-full mt-auto" onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
    )
}

export default ProductCards;