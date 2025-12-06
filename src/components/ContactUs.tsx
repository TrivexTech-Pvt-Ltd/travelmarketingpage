"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn
} from "react-icons/fa";
import Link from "next/link";
import { LuSend } from "react-icons/lu";
import { FiMail, FiMap, FiMapPin, FiPhone } from "react-icons/fi";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
}

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = "The field is required.";
    if (!formData.email) newErrors.email = "The field is required.";
    if (!formData.phone) newErrors.phone = "The field is required.";
    if (!formData.subject) newErrors.subject = "The field is required.";
    if (!formData.message) newErrors.message = "The field is required.";
    if (!formData.consent)
      newErrors.consent = "You must agree before submitting.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const res = await fetch("/api/contactus", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (data.success) {
      Swal.fire({
        icon: "success",
        title: "Thank You!",
        text: "Your message has been sent successfully.",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again later.",
      });
    }
  };

  return (
    <section className="pt-36 bg-gray-50">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-16">
        <h1 className="text-sea-green text-3xl sm:text-4xl md:text-5xl uppercase font-normal font-playfair-display text-center py-3">
          Start Your Journey with Us
        </h1>
        <p className="text-gray-500 text-base lg:text-lg text-center mb-4 sm:mb-12">
          Whether you are planning a honeymoon, a family getaway, or a once-in-a-lifetime adventure <br /> our team is ready to craft it for you.
        </p>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-10">
          {/* Contact Info */}
          <div className="flex justify-center items-center h-full">
            <div className="p-8 flex flex-col items-start">
              <h2 className="text-2xl font-semibold text-shadow-wash mb-6 text-left">
                Contact Us
              </h2>
              <div className="space-y-4 text-gray-500">
                <div className="flex gap-x-2">
                  <FiMapPin className="mt-1" />
                  <p className="text-left">
                    Travel Nation Lanka (Pvt) Ltd<br />
                    92/01/04,<br /> 1st Floor,<br /> Old Galle Rd,<br />Walana ,<br />Panadura
                  </p>
                </div>

                <p className="text-left flex items-center gap-x-2">
                  <FiMail />
                  <a
                    href="mailto:info@travelnation.vip"
                    className="hover:underline"
                  >
                    info@travelnation.vip
                  </a>
                </p>
                <div className="flex items-center gap-x-2">
                  <FiPhone />
                  <a href="tel:+94771774118" className="text-left">
                    +94 77 177 4118
                  </a>
                </div>

              </div>
              <div className="flex items-center gap-x-4 mt-8  text-sea-green text-lg text-left">
                <Link
                  href="#"
                  className="hover:text-teal-500 transition-transform transform hover:scale-110 border p-3 rounded-md"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href="#"
                  className="hover:text-teal-500 transition-transform transform hover:scale-110 border p-3 rounded-md"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href="#"
                  className="hover:text-teal-500 transition-transform transform hover:scale-110 border p-3 rounded-md"
                >
                  <FaTiktok />
                </Link>
                <Link
                  href="#"
                  className="hover:text-teal-500 transition-transform transform hover:scale-110 border p-3 rounded-md"
                >
                  <FaLinkedinIn />
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {["name", "email", "phone", "subject"].map((field) => (
                  <div key={field}>
                    <label className="block text-gray-500 mb-1 capitalize">
                      {field}
                    </label>
                    <input
                      type={
                        field === "email"
                          ? "email"
                          : field === "phone"
                            ? "tel"
                            : "text"
                      }
                      name={field}
                      value={
                        typeof formData[field as keyof FormData] === "boolean"
                          ? String(formData[field as keyof FormData])
                          : (formData[field as keyof FormData] as string)
                      }
                      onChange={handleChange}
                      className={`w-full border h-10 rounded-lg p-3 focus:ring-1 focus:ring-sea-green outline-none ${errors[field]
                        ? "border-red-500"
                        : "border-gray-300 focus:ring-sea-green"
                        }`}
                    />
                    {errors[field] && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors[field]}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full border rounded-lg p-3 focus:ring-1 focus:ring-sea-green outline-none ${errors.message
                    ? "border-red-500"
                    : "border-gray-300 focus:ring-sea-green"
                    }`}
                  placeholder="How can we help you?"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Consent */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="h-4 w-4 text-sea-green border-gray-300 rounded focus:ring-sea-green"
                />
                <label className="text-sm text-gray-600">
                  I agree that my data is
                  <a href="#" className="text-sea-green underline">
                    collected and stored.
                  </a>
                </label>
              </div>
              {errors.consent && (
                <p className="text-red-500 text-sm">{errors.consent}</p>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  className="uppercase cursor-pointer flex items-center gap-2 text-sm text-white bg-sea-green py-3 px-8 rounded-md transition-all duration-300 hover:bg-gradient-to-r hover:from-sea-green hover:to-emerald-400 hover:scale-105"
                >
                  <LuSend />
                  Get in touch
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="relative w-full h-[500px] overflow-hidden rounded-lg my-4">
          {/* Google Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63309.02025815471!2d79.90217258071775!3d6.769010986776209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f17!3m3!1m2!1s0x3ae2489f9aefb69b%3A0x2e6fae84dc0b9e6e!2sPanadura!5e0!3m2!1sen!2slk!4v1690000000000!5m2!1sen!2slk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>

          {/* Label Box */}
          <div className="absolute left-1/2 top-1/2 -translate-x-[75px] -translate-y-[140px]">
            <div className="bg-sea-green text-white px-5 py-2 rounded-md shadow-lg whitespace-nowrap text-sm font-semibold">
              TravelNation
            </div>
          </div>

          {/* Connecting Line */}
          <div
            className="
      absolute left-1/2 top-[43%] 
      -translate-x-1/2 -translate-y-[70px]
      w-[2px] h-[96px] 
      bg-sea-green
    "
          ></div>

          {/* Pin + Ripple */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {/* Pin center */}
            <div className="relative w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-md border border-black">
              <div className="w-3 h-3 bg-black rounded-full"></div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
