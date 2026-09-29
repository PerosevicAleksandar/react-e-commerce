import CartItem from "./atoms/CartItem";
import { CartContext } from "@/context/CartContext";
import { useContext } from "react";

function Cart() {
    const { cart, total } = useContext(CartContext);



    return (
        <div className="mx-auto border-2 border-secondary rounded-lg p-2 w-full max-w-150 h-fit">
            <div className="cart">
                {cart.map((item) => (
                    <CartItem
                        key={item.id}
                        item={item}
                    />
                ))}
                <div className="font-bold text-lg text-right pt-4 pb-6 px-3">
                    <span>${total.toFixed(2)}</span>
                </div>
            </div>
        </div>
    )
}

export default Cart;