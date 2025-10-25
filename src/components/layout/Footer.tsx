import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";
import Image from "next/image";
import { Logo } from "@/utils/staticImages";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-sea-green text-gray-300 py-10 relative px-4 sm:px-10 md:px-16 lg:px-20 xl:px-28">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <Image
            src={Logo}
            alt="logo"
            height={100}
            width={200}
            className="z-30 mb-4"
          />
          <p className="text-base leading-relaxed">
            At Travel Nation, we&apos;re not just about crafting holidays; we&apos;re
            about creating unforgettable journeys that immerse you in the heart
            of two of the world&apos;s most stunning destinations
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-5">
            <Link
              href="#"
              className="p-3 rounded-full border border-gray-300 transition hover:bg-gray-300 hover:text-sea-green"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="#"
              className="p-3 rounded-full border border-gray-300 transition hover:bg-gray-300 hover:text-sea-green"
            >
              <FaInstagram />
            </Link>
            <Link
              href="#"
              className="p-3 rounded-full border border-gray-300 transition hover:bg-gray-300 hover:text-sea-green"
            >
              <FaTwitter />
            </Link>
            <Link
              href="#"
              className="p-3 rounded-full border border-gray-300 transition hover:bg-gray-300 hover:text-sea-green"
            >
              <FaYoutube />
            </Link>
          </div>
        </div>

        {/* Middle Section */}
        <div className="">
          <div className="w-fit">
            <h2 className="text-xl font-semibold text-white mb-4 text-center">
              Quick Links
            </h2>
            <ul className="space-y-2 text-base text-left">
              <li>
                <Link
                  href="/"
                  className="hover:underline transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/sri-lanka"
                  className="hover:underline transition"
                >
                  Sri Lanka
                </Link>
              </li>
              <li>
                <Link
                  href="/maldives"
                  className="hover:underline transition"
                >
                  Maldives
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="hover:underline transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="hover:underline transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">
            Contact Info
          </h2>
          <ul className="space-y-2 text-base">
            <li className="flex gap-x-2">
              <HiLocationMarker className="text-gray-300 mt-1" />
              <span>
                Travel Nation,<br />No 92/01/04, 1st Floor,<br /> Old Galle Rd, Panadura<br />
                12500
              </span>
            </li>
            <li className="flex items-center gap-x-2">
              <HiPhone className="text-gray-300" />
              <Link
                href="tel:+94712808020"
              >
                +94 740 1104 89
              </Link>
            </li>
            <li className="flex items-center gap-x-2">
              <HiMail className="text-gray-300" />
              <Link
                href="mailto:info@sadaruwan.com"
              >
                info@travelnation.vip
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white mt-8 pt-4 text-center text-base">
        © Copyright Travel Nation All Rights Reserved
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/94740110489"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50"
      >
        <FaWhatsapp size={24} />
      </a>
    </footer>
  );
}
