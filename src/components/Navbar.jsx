import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-gray-900 fixed w-full top-0 shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-4xl font-extrabold text-white"><span className= " text-5xl" style={{color: "#155DFC"}}>A</span>bhishek</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-gray-300 font-semibold text-lg">
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              <a
                href={item.href}
                className="transition duration-300 group-hover:text-blue-400"
              >
                {item.name}
              </a>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-6 pb-4 space-y-4 text-lg font-medium">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-gray-300 hover:text-blue-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
