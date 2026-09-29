import PaymentInformationForm from "@/components/CheckoutPage/PaymentInformationForm";
import ShippingInformationForm from "@/components/CheckoutPage/ShippingInformationForm";
import Cart from "@/components/CartPage/Cart";
import { Link } from "react-router-dom";

function CheckoutPage() {
    return(
        <div className="mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 py-6">
            <div className="text-sm md:text-md text-secondary">
                    <Link to="/">Home</Link>
                    <span> &gt; </span>
                    <Link to="/cart">Cart</Link>
                    <span> &gt; </span>
                    <Link to="/checkout">Checkout</Link>
                </div>
                <div className="flex justify-center">
                    <h1 className="text-2xl md:text-3xl font-bold py-6 capitalize text-center">Checkout</h1>
                </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <div className="order-2 lg:order-0 lg:col-start-1 lg:row-start-1">
                <h1 className="text-lg font-bold mx-auto max-w-150 mb-6">Shipping Information</h1>
                <ShippingInformationForm />
            </div>
            <div className="order-3 lg:order-0 lg:col-start-1 lg:row-start-2">
                <h1 className="text-lg font-bold mx-auto max-w-150 mb-6">Payment Information</h1>
                <PaymentInformationForm />
            </div>
            <div className="order-1 lg:order-0 lg:col-start-2 lg:row-start-1 lg:row-span-2">
                <h1 className="text-lg font-bold mx-auto max-w-150 mb-6">Review Your Cart</h1>
                <Cart />
            </div>
        </div>
        </div>
    )
}

export default CheckoutPage;