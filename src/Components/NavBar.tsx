"use client";
import React, { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaSearch, FaUser } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full px-12 py-4 z-50 
text-Whitey transition-colors duration-300 ${
        isScrolled ? "bg-BlackyFade1 backdrop-blur-[5px]" : "bg-transparent"
      }`}
    >
      {/* top */}
      <div className="w-full flex justify-between items-center py-2.5 ">
        <div className="Flexy gap-4 text-sm">
          <a href="#">Contact</a>
          <a href="#">wholesale</a>
          <a href="#">Catering</a>
          <a href="#">order online</a>
        </div>
        <div className="Flexy gap-2.5 text-xl hidden">
          <a href="@">
            <FaInstagram />
          </a>
          <a href="@">
            <FaFacebookF />
          </a>
        </div>
      </div>

      {/* bottom */}
      <div className="w-full flex justify-between items-center py-2 border-t-2 border-Whitey">
        <h1 className="text-3xl Bigshadow">Coffee Shop</h1>
        <div className="flex gap-6 text-lg">
          <a href="2">Subscribe</a>
          <a href="2">shop</a>
          <a href="2">location</a>
          <a href="2">learn</a>
        </div>
        <div className="Flexy gap-3.5">
          <a href="2">
            <FaUser />
          </a>
          <a href="2">
            <FaSearch />
          </a>
          <a href="2">
            <FaBagShopping />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
