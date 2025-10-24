"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLine } from "react-icons/ri";
import { ChevronDown } from "lucide-react";
import { Logo } from "@/lib/utils/staticImages";
import Modal from "../ui/Modal";
import Quotation from "../ui/Quotation";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [stickyNavbar, setStickyNavbar] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  // Navbar items
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Destination", path: "#" },
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
      className={`fixed top-0 left-0 w-full z-[110] transition-all duration-500 ${
        stickyNavbar
          ? "bg-white shadow-md !text-black"
          : isHomePage
          ? "bg-transparent text-gray-700"
          : "bg-white text-black"
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
        <div className="flex items-center gap-8 relative">
          <ul className="hidden md:flex text-lg items-center gap-10 font-medium">
            {menuItems.map((item, index) =>
              item.name === "Destination" ? (
                <li
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <button
                    type="button"
                    className={`flex items-center gap-1 hover:text-sea-green transition-colors duration-300 ${
                      pathname.startsWith("/maldives") ||
                      pathname.startsWith("/sri-lanka")
                        ? "text-emerald-400"
                        : stickyNavbar
                        ? "text-black"
                        : "text-gray-900"
                    }`}
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <ul className="absolute top-8 left-0 backdrop-blur-md bg-white/30 shadow-lg rounded-lg py-2 w-48 text-gray-800 border border-white/20 transition-all duration-300">
                      <li>
                        <Link
                          href="/maldives"
                          className="block px-4 py-2 hover:bg-white/20 hover:text-sea-green transition-colors rounded-md"
                        >
                          Maldives
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/sri-lanka"
                          className="block px-4 py-2 hover:bg-white/20 hover:text-sea-green transition-colors rounded-md"
                        >
                          Sri Lanka
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              ) : (
                <li key={index}>
                  <Link
                    href={item.path}
                    className={`hover:text-sea-green transition-colors duration-300 ${
                      pathname === item.path
                        ? "text-emerald-400"
                        : stickyNavbar
                        ? "text-black"
                        : "text-gray-900"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Desktop Inquire Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="hidden md:block text-white bg-sea-green rounded-md py-3 px-6 cursor-pointer uppercase text-sm hover:opacity-90"
            type="button"
          >
            inquire
          </button>
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
        <div className="md:hidden absolute top-full left-0 w-full bg-white text-black shadow-md transition-all duration-500">
          <ul className="flex flex-col items-center gap-6 py-6 text-lg font-medium">
            {menuItems.map((item, index) =>
              item.name === "Destination" ? (
                <li key={index} className="flex flex-col items-center">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-1 hover:text-sea-green transition-colors duration-300"
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Mobile Dropdown */}
                  {isDropdownOpen && (
                    <ul className="flex flex-col items-center gap-3 mt-2 text-base">
                      <li>
                        <Link
                          href="/maldives"
                          onClick={() => setIsOpen(false)}
                          className="hover:text-sea-green"
                        >
                          Maldives
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/sri-lanka"
                          onClick={() => setIsOpen(false)}
                          className="hover:text-sea-green"
                        >
                          Sri Lanka
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              ) : (
                <li key={index}>
                  <Link
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-sea-green transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              )
            )}

            {/* Mobile Inquire Button */}
            <li>
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setIsOpen(false);
                }}
                className="text-white bg-sea-green rounded-md py-3 px-10 uppercase text-sm hover:opacity-90"
                type="button"
              >
                inquire
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Get a Quote"
      >
        <Quotation />
      </Modal>
    </header>
  );
};

export default Header;
