"use client"; 

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for menu toggle

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          Indu Potla
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="text-white hover:text-gray-400 transition-all">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black w-full py-4 absolute top-16 left-0 shadow-lg">
          <ul className="flex flex-col space-y-4 text-center">
            {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} 
                   className="block py-2 text-white hover:text-gray-400" 
                   onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
