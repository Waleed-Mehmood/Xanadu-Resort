import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-gray-950 bg-opacity-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left side - Logo */}
        <div className="text-2xl font-light font-serif text-white">
          Xanadu Resort
        </div>

        {/* Right side - Links */}  
        <div className="hidden md:flex space-x-6 text-white font-serif">
          <a href="#home" className="hover:text-green-400">Home</a>
          <a href="#ourhotel" className="hover:text-green-400">Our Hotel</a>
          <a href="#lodging" className="hover:text-green-400">Lodging</a>
          <a href="#Restaurant" className="hover:text-green-400">Our Restaurant</a>
          <a href="#Booking" className="hover:text-green-400">Booking</a>
          <a href="#contact" className="hover:text-green-400">Contact</a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
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
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-black bg-opacity-5 text-white font-serif">
          <a href="#home" className="block hover:text-green-400">Home</a>
          <a href="#ourhotel" className="block hover:text-green-400">Our Hotel</a>
          <a href="#lodging" className="block hover:text-green-400">Lodging</a>
          <a href="#Restaurant" className="block hover:text-green-400">Our Restaurant</a>
          <a href="#Booking" className="block hover:text-green-400">Booking</a>
          <a href="#contact" className="block hover:text-green-400">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;