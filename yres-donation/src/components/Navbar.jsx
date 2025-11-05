import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import logo from '../assets/logo.png'; 
import '../index.css';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div className="bg-[#3D96AB] text-white fixed w-full z-50 shadow-md">
      {/* Navbar container */}
      <div className="flex flex-col items-center h-auto max-w-[1240px] mx-auto px-6 py-6">
        
        {/* Logo */}
        <div className="flex justify-center items-center mb-6">
          <img src={logo} alt="YRES Logo" className="h-24 w-auto" /> 
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-12 text-xl"> 
          <li className="cursor-pointer">
            <a href="https://yorkeducation.org/" target="_blank" rel="noopener noreferrer">
              Home
            </a>
          </li>
          <li className="cursor-pointer">Donate</li>
        </ul>

        {/* Mobile Menu Icon */}
        <div onClick={handleNav} className="block md:hidden cursor-pointer mt-3">
          {nav ? <AiOutlineClose size={32} /> : <AiOutlineMenu size={32} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="md:hidden bg-[#3D96AB] w-full text-center py-6 space-y-6 text-xl">
          <li className="cursor-pointer">
            <a href="https://yorkeducation.org/" target="_blank" rel="noopener noreferrer">
              Home
            </a>
          </li>
          <li className="cursor-pointer">Donate</li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
