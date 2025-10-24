import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";
import Image from "next/image";
import { Logo } from "@/lib/utils/staticImages";
export default function Footer() {
  return (
    <footer className="bg-sea-green text-gray-300 py-10 relative md:px-28 px-8">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          {/* <h2 className="text-xl font-semibold text-red-500 mb-4">SNT Holidays</h2> */}
          <Image
            src={Logo}
            alt="logo"
            height={100}
            width={200}
            className="z-30 mb-4"
          />
          <p className="text-base leading-relaxed font-work-sans">
            At Travel Nation, we’re not just about crafting holidays; we’re
            about creating unforgettable journeys that immerse you in the heart
            of two of the world’s most stunning destinations
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-5">
            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-sea-green transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-sea-green transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-sea-green transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-sea-green transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="">
          <div className="w-fit">
            <h2 className="text-xl font-semibold text-sea-green mb-4 text-center font-work-sans">
              Quick Links
            </h2>
            <ul className="space-y-2 text-base text-left">
              <li>
                <a
                  href="#"
                  className="hover:text-sea-green transition font-work-sans"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-sea-green transition font-work-sans"
                >
                  Destination
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-sea-green transition font-work-sans"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-sea-green transition font-work-sans"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4 font-work-sans">
            Contact Info
          </h2>
          <ul className="space-y-3 text-base">
            <li className=" font-work-sans">
              <HiLocationMarker className="text-sea-green mt-1" />
              <span>
                Travel Nation, No 92/01/04, 1st Floor, Old Galle Rd, Panadura
                12500
              </span>
            </li>
            <li className=" font-work-sans">
              <HiPhone className="text-sea-green" />
              <a
                href="tel:+94712808020"
                className="hover:text-sea-green transition"
              >
                +9474 011 0489
              </a>
            </li>
            <li className=" font-work-sans">
              <HiMail className="text-sea-green" />
              <a
                href="mailto:info@sadaruwan.com"
                className="hover:text-sea-green transition"
              >
                info@travelnation.vip
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-base font-work-sans">
        © Copyright Travel Nation All Rights Reserved
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/94740110489"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp size={24} />
      </a>
    </footer>
  );
}
