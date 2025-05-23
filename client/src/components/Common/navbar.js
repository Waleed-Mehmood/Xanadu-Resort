import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom';
import { logout } from '../../redux/features/authSlice';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navigate = useNavigate(); 

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate('/'); // Redirect user to login page after logout
  };

  return (
    <div className='relative'>
      <div className="absolute top-0 left-0 right-0 z-50">
        <nav className="w-full bg-gray-950 bg-opacity-50 shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            {/* Left side - Logo */}
            <div className="text-2xl font-light font-serif text-white">
              Xanadu Resort
            </div>

            {/* Right side - Links */}
            <div className="hidden md:flex space-x-6 text-white font-serif">

              <Link to="/" className="block hover:text-green-400">Home</Link>
              <Link to="/our-resort" className="block hover:text-green-400">Our Hotel</Link>
              <Link to="/lodging" className="block hover:text-green-400">Lodging</Link>
              <Link to="/our-restaurent" className="block hover:text-green-400">Our Restaurant</Link>
              <Link to="/booking" className="block hover:text-green-400">Booking</Link>
              <Link to="/contact" className="block hover:text-green-400">Contact</Link>
              {!localStorage.getItem('user') ? (
                  <>
                  <Link to="/login" className="block hover:text-green-400">Login</Link>
                  <Link to="/signup" className="block hover:text-green-400">SignUp</Link>
                
                </>
                ) :
                (
                  <button to="/" className="block rounded hover:bg-red-400" onClick={handleLogout}>Logout</button>
                )
              }

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
              <Link to="/" className="block hover:text-green-400">Home</Link>
              <Link to="/our-resort" className="block hover:text-green-400">Our Hotel</Link>
              <Link to="/lodging" className="block hover:text-green-400">Lodging</Link>
              <Link to="/our-restaurent" className="block hover:text-green-400">Our Restaurant</Link>
              <Link to="/booking" className="block hover:text-green-400">Booking</Link>
              <Link to="/contact" className="block hover:text-green-400">Contact</Link>
              {!localStorage.getItem('user') ? (
                  <>
                  <Link to="/login" className="block hover:text-green-400">Login</Link>
                  <Link to="/signup" className="block hover:text-green-400">SignUp</Link>
                
                </>
                ) :
                (
                  <button to="/" className="block bg-red-400 hover:bg-red-400" onClick={handleLogout}>Logout</button>
                )
              }
              
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}

export default Navbar;