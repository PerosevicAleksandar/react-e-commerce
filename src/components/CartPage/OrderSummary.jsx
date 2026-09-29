import { CartContext } from "@/context/CartContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

function OrderSummary() {
    const [discount] = useState(0);
    const {total} = useContext(CartContext);

    return(
        <div className="max-w-120">
            <div className="border-y border-secondary flex flex-col gap-y-3 pb-4 pt-2">
                <h1 className="font-bold text-xl mb-4">Order Summary</h1>
                <div className="flex justify-between text-lg">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg">
                    <span>Discount</span>
                    <span>${discount.toFixed(2)}</span>
                </div>
            </div>
            <div className="flex justify-between text-xl font-bold py-4">
                <span>Total</span>
                <span>${(total-discount).toFixed(2)}</span>
            </div>
            <div className="grid grid-cols-3 gap-3 w-full my-4">
                <input type="text" placeholder="Add promo code" className="col-span-2 border border-black rounded-lg px-5 py-2 text-center"></input>
                <button className="btn-dark col-span-1 ">Apply</button>
            </div>
            <Link to="/checkout"><button className="btn-dark w-full">Go to Checkout</button></Link>
            <div className="my-12 flex flex-col gap-y-6">
                <p>Prices and costs are not displayed until you complete your purchase.</p>
                <p>You have 30 days to change your mind. Read more about <span className="underline cursor-pointer">Delivery and Return</span>.</p>
                <p>Need help? Please contact <span className="underline cursor-pointer">Customer Support</span>.</p>
            </div>
        </div>
    )
} 

export default OrderSummary;