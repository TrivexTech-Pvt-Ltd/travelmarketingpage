"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLine } from "react-icons/ri";
import { Logo } from "@/lib/utils/staticImages";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [stickyNavbar, setStickyNavbar] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Destination", path: "#destination" },
    { name: "About Us", path: "#about" },
    { name: "Contact Us", path: "#contact" },
  ];

  // Sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setStickyNavbar(window.scrollY >= 128);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        stickyNavbar
          ? "bg-white shadow-md text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div className="flex justify-between items-center md:px-28 px-8 py-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src={Logo}
            alt="logo"
            height={60}
            width={160}
            className="transition-all duration-300"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex text-lg items-center gap-10 font-medium">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.path}
                className={`hover:text-red-500 transition-colors duration-300 ${
                  pathname === item.path ? "text-red-500" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <RiCloseLine /> : <RxHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white text-black shadow-md transition-all duration-500`}
        >
          <ul className="flex flex-col items-center gap-6 py-6 text-lg font-medium">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-red-500 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
