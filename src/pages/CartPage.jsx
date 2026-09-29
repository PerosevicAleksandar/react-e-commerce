import { Link } from "react-router-dom";
import Cart from "@/components/CartPage/Cart";
import OrderSummary from "@/components/CartPage/OrderSummary";

function CartPage() {
    return(
        <div>
            <div className="mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 py-6">
                <div className="text-sm md:text-md text-secondary">
                    <Link to="/">Home</Link>
                    <span> &gt; </span>
                    <Link to="/products">Cart</Link>
                </div>
                <div className="flex justify-center">
                    <h1 className="text-2xl md:text-3xl font-bold py-6 capitalize text-center">Your cart</h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-36 justify-items-center">
                    <Cart />
                    <OrderSummary />
                </div>
            </div>
        </div>
    )
}

export default CartPage;