import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md fixed w-full z-50">
            <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
                <div className="font-bold text-lg">Dovelens.ft</div>
                <div className="block md:hidden">
                    <button
                        className="text-blue-600 focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
                <nav
                    className={`${
                        isMenuOpen ? "block" : "hidden"
                    } md:flex md:flex-row md:space-x-6 text-sm w-full md:w-auto mt-4 md:mt-0`}
                >
                    <ul className="flex flex-col md:flex-row md:space-x-6">
                        <li>
                            <a
                                href="#about"
                                className="hover:text-white hover:bg-[#1f1e1c] px-4 py-2 rounded transition block"
                            >
                                Tentang Kami
                            </a>
                        </li>
                        <li>
                            <a
                                href="#team"
                                className="hover:text-white hover:bg-[#1f1e1c] px-4 py-2 rounded transition block"
                            >
                                Tim
                            </a>
                        </li>
                        <li>
                            <a
                                href="#portofolio"
                                className="hover:text-white hover:bg-[#1f1e1c] px-4 py-2 rounded transition block"
                            >
                                portofolio
                            </a>
                        </li>
                        <li>
                            <a
                                href="#layanan"
                                className="hover:text-white hover:bg-[#1f1e1c] px-4 py-2 rounded transition block"
                            >
                                Layanan
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="hover:text-white hover:bg-[#1f1e1c] px-4 py-2 rounded transition block"
                            >
                                Kontak
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}