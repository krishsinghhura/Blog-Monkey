import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-indigo-600 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-white text-2xl font-bold">
                    <a href="/">Blog Monkey</a>
                </div>

                {/* Hamburger Menu (visible on small screens) */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Menu Items */}
                <div
                    className={`${
                        isMenuOpen ? "block" : "hidden"
                    } md:flex md:space-x-6 md:items-center`}
                >
                    <a href="/" className="text-white hover:text-indigo-300 block mt-2 md:mt-0">
                        Home
                    </a>
                    <a
                        href="/profile"
                        className="text-white hover:text-indigo-300 block mt-2 md:mt-0"
                    >
                        Profile
                    </a>
                    <a
                        href="/logout"
                        className="text-white hover:text-indigo-300 block mt-2 md:mt-0"
                    >
                        Logout
                    </a>
                </div>
            </div>
        </nav>
    );
}
