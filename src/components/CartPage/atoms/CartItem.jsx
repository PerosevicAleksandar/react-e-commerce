import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

function CartItem({item}) {
        const {
            decreaseQuantity,
            increaseQuantity,
            removeFromCart
        } = useContext(CartContext);

        return (
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-3 p-3 text-base border-b border-[#aaa]">
                <div>
                    <img src={`/images/${item.id}.png`} alt={item.title} className="w-full h-56 sm:h-37.5 object-cover rounded-md"/>
                </div>
                <div className="grid grid-cols-[1fr_auto] grid-rows-[auto_auto_auto] w-full mt-2 sm:mt-0">
                    <h3 className="row-start-1 col-start-1 m-0 font-medium text-lg">{item.title}</h3>
                    <div className="row-start-3 col-start-1 self-center flex items-center border border-[#ccc] rounded-lg w-fit px-2">
                        <button type="button" onClick={() => decreaseQuantity(item.id)} className="py-1">-</button>
                        <span className="px-6">{item.quantity}</span>
                        <button type="button" onClick={() => increaseQuantity(item.id)} className="py-1">+</button>
                    </div>
                    <span className="row-start-1 col-start-2 justify-self-end font-bold text-lg">${Number(item.price).toFixed(2)}</span>
                    <button type="button" className="row-start-3 col-start-2 justify-self-end self-center text-secondary underline" 
                    onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
            </div>
        );
    };

export default CartItem;