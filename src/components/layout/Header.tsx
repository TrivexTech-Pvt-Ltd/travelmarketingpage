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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [stickyNavbar, setStickyNavbar] = useState<boolean>(false);

  //Nvabar items
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Destination", path: "#destination" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setStickyNavbar(window.scrollY >= 128);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[110] transition-all duration-500
        ${stickyNavbar
          ? "bg-white shadow-md text-black"
          : isHomePage
            ? "bg-transparent text-gray-700"
            : "bg-soft-beige text-black"
        }`}
    >
      <div className="flex justify-between items-center md:px-28 px-8 py-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src={Logo}
            alt="logo"
            height={80}
            width={160}
            className="transition-all duration-300"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex text-lg items-center gap-10 font-medium">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className={`hover:text-sea-green transition-colors duration-300 ${pathname === item.path ? "text-sea-green" : "text-gray-100"
                    }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <button className="text-white bg-sea-green rounded-md py-3 px-6 cursor-pointer uppercase text-sm hover:opacity-90" type="button">inquire</button>
        </div>




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
