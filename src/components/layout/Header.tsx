"use client";

import { Logo } from "@/lib/utils/staticImages";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [stickyNavbar, setStickyNavbar] = useState<boolean>(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Destination", path: "#destination" },
    { name: "About Us", path: "#about" },
    { name: "Contact Us", path: "#contact" },
  ];

  // Detect scroll and toggle sticky navbar
  useEffect(() => {
    const changeNavbarPosition = () => {
      window.scrollY >= 128 ? setStickyNavbar(true) : setStickyNavbar(false);
    };
    window.addEventListener("scroll", changeNavbarPosition);
    return () => window.removeEventListener("scroll", changeNavbarPosition);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex justify-between items-center transition-all duration-500 md:px-28 px-8 py-4 ${
        stickyNavbar
          ? "bg-white shadow-md text-black"
          : "bg-transparent text-white"
      }`}
    >
      <Image
        src={Logo}
        alt="logo"
        height={80}
        width={200}
        className="z-30 transition-all duration-300"
      />

      <ul
        className={`text-lg flex items-center gap-10 font-medium transition-colors duration-300 ${
          stickyNavbar ? "text-black" : "text-white"
        }`}
      >
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer hover:text-red-500 transition-colors duration-300"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
