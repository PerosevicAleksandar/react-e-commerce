import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");

        return savedCart ? JSON.parse(savedCart) : [];
    });
    const cartCount = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    function handleAddToCart(product, quantity = 1) {
        const existingProduct = cart.find(
            (item) => item.id === product.id
        );

        if (existingProduct) {
            const updatedCart = cart.map((item) =>
                item.id === product.id
                    ? {
                        ...item,
                        quantity: item.quantity + quantity
                    }
                    : item
            );

            setCart(updatedCart);
        } else {
            setCart([
                ...cart,
                {
                    ...product,
                    quantity: quantity
                }
            ]);
        }
    }

    useEffect(() => {
        sessionStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    function increaseQuantity(id) {
        setCart(
            cart.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    }

    function decreaseQuantity(id) {
        setCart(
            cart.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    }

    function removeFromCart(id) {
        setCart(cart.filter((item) => item.id !== id));
    }

    const calcTotal = (items) => {
        let total = 0;

        for (const item of items) {
            total += item.price * item.quantity;
        }
        return total;
    };

    const total = calcTotal(cart);

    return (
        <CartContext.Provider value={{ cart, cartCount, handleAddToCart, increaseQuantity, decreaseQuantity, removeFromCart, total }}>
            {children}
        </CartContext.Provider>
    );
};