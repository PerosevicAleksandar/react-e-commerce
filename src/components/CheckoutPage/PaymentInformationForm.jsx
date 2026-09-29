import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { apiRequest } from "@/apiClient";
import { useState } from "react";

function PaymentInformationForm() {
    const { cart } = useContext(CartContext);
    const [success, setSuccess] = useState("");
    const [fail, setFail] = useState("");

    async function onPay() {

        const userId = Number(sessionStorage.getItem("userId"));

        const products = cart.map((item) => ({
            id: item.id,
            quantity: item.quantity
        }));

        try {
            await apiRequest("/carts", {
                method: "POST",
                body: {
                    userId: userId,
                    products: products
                },
            });
            setSuccess("Payment successful!")
        } catch (error) {
            console.error("Failed to complete purchase:", error);
            setFail("Payment failed!");
        }
    }

        return (
            <form className="mx-auto border-2 border-secondary rounded-lg p-6 w-full max-w-150">
                <div className="grid grid-cols-2 gap-2">
                    <button className="border border-black rounded-lg flex items-center justify-center h-12"><img src="/images/PayPal.png" alt="PayPal" className="h-6 w-auto object-contain" /></button>
                    <button className="btn-dark">Cash</button>
                </div>
                <div>
                    <label className="block mb-2 mt-4 text-lg">Cardholder Name</label>
                    <input type="text" className="w-full border border-black rounded-lg px-4 py-3" />
                </div>
                <div>
                    <label className="block mb-2 mt-4 text-lg">Card Number</label>
                    <input type="text" className="w-full border border-black rounded-lg px-4 py-3" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                    <div>
                        <label className="block mb-2 mt-4 text-lg">Month</label>
                        <select className="w-full border border-black rounded-lg px-4 py-3">
                            <option></option>
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>Juny</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2 mt-4 text-lg">Year</label>
                        <select className="w-full border border-black rounded-lg px-4 py-3">
                            <option></option>
                            <option>2026</option>
                            <option>2027</option>
                            <option>2028</option>
                            <option>2029</option>
                            <option>2030</option>
                            <option>2031</option>
                            <option>2032</option>
                            <option>2033</option>
                            <option>2034</option>
                            <option>2035</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2 mt-4 text-lg">CVC</label>
                        <input type="text" className="w-full border border-black rounded-lg px-4 py-3"></input>
                    </div>
                </div>
                <button type="button" className="w-full btn-dark mt-18 h-12"
                onClick={onPay}>Pay</button>
                <p className="text-red-600 my-2">{fail}</p>
                <p className="text-green-600 my-2">{success}</p>
            </form>
        )
    }

    export default PaymentInformationForm;