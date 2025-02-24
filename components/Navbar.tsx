"use client"; 

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">
        
        {/* Logo */}
        <Link href="/">
          <h1 className="text-xl font-semibold text-white cursor-pointer">
            Indu Potla
          </h1>
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-8">
          {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="text-white hover:text-gray-400 transition-all">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
