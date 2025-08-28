// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#faf4ee] shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://wagcksa.com/wp-content/uploads/2025/03/%D9%82%D8%B1%D8%A9-%D8%B9%D9%8A%D9%86%D9%8A-1.png"
            alt="Logo"
            className="h-12"
          />
          <span className="text-sm text-gray-700">
            Wajhat AlMajd General Contracting Est
          </span>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li>
            <Link to="/" className="hover:text-blue-700">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-700">
              About Us
            </Link>
          </li>

          {/* Dropdown */}
          <li className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center hover:text-blue-700"
            >
              Our Services
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isOpen && (
              <ul className="absolute left-0 mt-2 bg-white border rounded shadow-md w-48">
                <li>
                  <Link
                    to="/services/skilled-manpower"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Skilled Manpower
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/equipment-rental"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Equipment Rental
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/mechanical-piping"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Mechanical & Piping
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/civil-construction"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Civil Construction
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/electrical-works"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Electrical Works
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/fabrication-services"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Fabrication Services
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/contact" className="hover:text-blue-700">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/companyProfile" className="hover:text-blue-700">
              Company Profile
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
