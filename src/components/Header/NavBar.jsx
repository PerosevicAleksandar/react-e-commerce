import { NavLink, Link } from "react-router-dom";



function NavBar() {
    const navClass = ({ isActive }) =>
        `nav-link${isActive ? " font-bold" : ""}`;

    return (
        <ul className="flex flex-row gap-4">
            <li>
                <NavLink to='/' className={navClass}>Home</NavLink>
            </li>
            <li>
                <NavLink to='/products' className={navClass}>Shop</NavLink>
            </li>
            <li>
                <NavLink to='/about' className={navClass}>About</NavLink>
            </li>
            <li className="hidden sm:block">
                <Link>Contact</Link>
            </li>
            <li className="hidden sm:block">
                <NavLink className='text-red-500'>Sale!</NavLink>
            </li>
        </ul>
    );
}

export default NavBar;