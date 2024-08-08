import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/lgo.png";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-slate-50 shadow-md">
            {/* Logo Section */}
            <div className="flex items-center justify-between h-16 md:h-20 px-4 md:px-6">
                <div className="flex justify-start">
                    <img src={logo} alt="Logo Here" className="h-16 md:h-20" />
                </div>
                {/* Hamburger Icon */}
                <button
                    className="block md:hidden text-gray-600 focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </button>
                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-6 md:gap-20 mr-4 md:mr-8 font-serif text-base md:text-lg">
                    <li className="transition-transform transform hover:scale-105">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="transition-transform transform hover:scale-105">
                        <Link to="/Projects">Projects</Link>
                    </li>
                    <li className="transition-transform transform hover:scale-105">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            {/* Mobile Menu */}
            <div
                className={`md:hidden ${isOpen ? "block" : "hidden"} bg-slate-50 p-4`}
            >
                <ul className="flex flex-col items-center gap-4 font-serif text-base">
                    <li className="transition-transform transform hover:scale-105">
                        <Link to="/" onClick={toggleMenu}>Home</Link>
                    </li>
                    <li className="transition-transform transform hover:scale-105">
                        <Link to="/Projects" onClick={toggleMenu}>Projects</Link>
                    </li>
                    <li className="transition-transform transform hover:scale-105">
                        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
