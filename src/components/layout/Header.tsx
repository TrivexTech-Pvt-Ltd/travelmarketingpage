"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLine } from "react-icons/ri";
import { ChevronDown } from "lucide-react";
import { LogoNew } from "@/utils/staticImages";
import Modal from "../ui/Modal";
import Quotation from "../ui/Quotation";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [stickyNavbar, setStickyNavbar] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "#" },
    { name: "Our Core", path: "/our-core" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setStickyNavbar(window.scrollY >= 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const segmentName = pathname.split('/')[1]

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${stickyNavbar
        ? "bg-[#5cc6bf] text-white shadow-lg"
        : segmentName === "contact-us" ? "bg-[#5cc6bf] text-white" : "bg-transparent text-white"
        }`}
    >
      <div className="flex justify-between items-center px-4 py-4 sm:px-10 md:px-16 lg:px-20 xl:px-28">
        {/* Logo */}
        <Link href="/">
          <Image
            src={LogoNew}
            alt="Travel Nation Logo"
            width={260}
            height={120}
            className="h-12 w-40 md:h-auto md:w-56 transition-all duration-300"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="flex items-center gap-8 relative">
          <ul className="hidden tablet:flex text-base lg:text-lg items-center gap-10 font-medium">
            {menuItems.map((item, index) =>
              item.name === "Destinations" ? (
                <li
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <button
                    type="button"
                    className={`flex items-center gap-1 hover:text-black transition-colors duration-300 text-white`}
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {/* Dropdown */}
                  {isDropdownOpen && (
                    <ul className="absolute top-7 left-0 bg-sea-green text-white shadow-lg rounded-lg py-2 w-48 border border-white/20 transition-all duration-300 backdrop-blur-sm">
                      <li>
                        <Link
                          href="/sri-lanka"
                          className="block px-4 py-2 hover:bg-white/20 hover:white rounded-md"
                        >
                          Sri Lanka
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/maldives"
                          className="block px-4 py-2 hover:bg-white/20 hover:white rounded-md"
                        >
                          Maldives
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              ) : (
                <li key={index}>
                  <Link
                    href={item.path}
                    className={`hover:text-black transition-colors duration-300 ${pathname === item.path ? "text-black" : "text-white"
                      }`}
                  >
                    {item.name}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Desktop Inquire Button ? White After Scroll */}
          <button
            onClick={() => setIsModalOpen(true)}
            className={`hidden cursor-pointer tablet:block py-3 px-6 rounded-md text-sm transition-all duration-300 hover:scale-105 ${segmentName === "contact-us" ? 'bg-white !text-black hover:opacity-80' : ''} ${stickyNavbar
              ? "bg-white border text-sea-green hover:border-white hover:text-white hover:bg-transparent"
              : "bg-sea-green text-white border border-sea-green hover:text-sea-green hover:bg-transparent"
              }`}
          >
            Lets go Places
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="tablet:hidden text-3xl focus:outline-none text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <RiCloseLine /> : <RxHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="tablet:hidden absolute top-full left-0 w-full bg-[#5cc6bf] text-white shadow-lg transition-all duration-500">
          <ul className="flex flex-col items-center gap-6 py-6 text-lg font-medium">
            {menuItems.map((item, index) =>
              item.name === "Destination" ? (
                <li key={index} className="flex flex-col items-center">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-1 hover:text-black transition-colors duration-300"
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {isDropdownOpen && (
                    <ul className="flex flex-col items-center gap-3 mt-2 text-base">
                      <li>
                        <Link
                          href="/sri-lanka"
                          onClick={() => setIsOpen(false)}
                          className="hover:text-black"
                        >
                          Sri Lanka
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/maldives"
                          onClick={() => setIsOpen(false)}
                          className="hover:text-black"
                        >
                          Maldives
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
                    className="hover:text-black transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              )
            )}

            <li>
              {/* Mobile Inquire button white after scroll */}
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setIsOpen(false);
                }}
                className={`rounded-md py-3 px-10 uppercase text-sm transition-all duration-300 ${stickyNavbar
                  ? "bg-white text-black hover:opacity-80"
                  : "bg-sea-green text-white hover:opacity-90"
                  }`}
              >
                Lets Go Places
              </button>
            </li>
          </ul>
        </div>
      )}

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
