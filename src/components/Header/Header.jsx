import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { ShoppingCart, User, Search } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

function Header() {
    const { cartCount } = useContext(CartContext);

    return (
        <header className="bg-brand flex items-center justify-between px-6 border-b border-gray-300">
            <Link to='/'><img src="/images/logo.png" alt="logo" className="w-16" /></Link>
                <NavBar />
            <div className="hidden md:flex flex-row border border-gray-700 rounded-xl px-2 py-1">
                <input type="search" placeholder="Search" />
                <Search></Search>
            </div>
            <div className="actions flex flex-row gap-4">
                <Link to='/cart' className="relative">
                <ShoppingCart />
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">{cartCount}</span>
                </Link>
                <Link to='/login'><User></User></Link>
            </div>
        </header>
    );
}

export default Header;