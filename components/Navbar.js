"use client"; // Add this line to mark this as a client component

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Reference to the mobile menu
  const buttonRef = useRef(null); // Reference to the menu button

  // Close the menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close menu if clicked outside the menu or button
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        buttonRef.current && !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close the menu on link click (for mobile)
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center py-3 px-8 bg-gradient-to-r from-blue-800 to-purple-900 shadow-lg text-white">
      {/* Logo */}
      <div className="text-2xl font-extrabold tracking-wide">
        <Link href="/">BitLinks</Link>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex items-center gap-8 font-semibold">
        <li>
          <Link href="/" onClick={handleLinkClick}>
            <span className="hover:text-yellow-400 transition duration-300 cursor-pointer">Home</span>
          </Link>
        </li>
        <li>
          <Link href="/about" onClick={handleLinkClick}>
            <span className="hover:text-yellow-400 transition duration-300 cursor-pointer">About</span>
          </Link>
        </li>
        <li>
          <Link href="/sorten" onClick={handleLinkClick}>
            <span className="hover:text-yellow-400 transition duration-300 cursor-pointer">Shorten</span>
          </Link>
        </li>
        <li>
          <Link href="/contact" onClick={handleLinkClick}>
            <span className="hover:text-yellow-400 transition duration-300 cursor-pointer">Contact</span>
          </Link>
        </li>
      </ul>

      {/* Action Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <Link href="/sorten">
          <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transform hover:scale-105 transition duration-300">
            Try Now
          </button>
        </Link>
        <Link href="/github">
          <button className="bg-transparent border-2 border-white text-white font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-blue-900 transition duration-300">
            GitHub
          </button>
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button
          ref={buttonRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
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

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden absolute top-16 left-0 w-full bg-gradient-to-r from-blue-800 to-purple-900 text-white p-4`}
      >
        <ul className="flex flex-col items-center gap-4 font-semibold">
          <li>
            <Link href="/" onClick={handleLinkClick}>
              <span className="hover:text-yellow-400 transition duration-300 cursor-pointer">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={handleLinkClick}>
              <span className="hover:text-yellow-400 transition duration-300 cursor-pointer">About</span>
            </Link>
          </li>
          <li>
            <Link href="/sorten" onClick={handleLinkClick}>
              <span className="hover:text-yellow-400 transition duration-300 cursor-pointer">Shorten</span>
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={handleLinkClick}>
              <span className="hover:text-yellow-400 transition duration-300 cursor-pointer">Contact</span>
            </Link>
          </li>
          <li className="mt-4">
            <Link href="/sorten">
              <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transform hover:scale-105 transition duration-300">
                Try Now
              </button>
            </Link>
          </li>
          <li className="mt-4">
            <Link href="/github">
              <button className="bg-transparent border-2 border-white text-white font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-blue-900 transition duration-300">
                GitHub
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
