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
    <section className="bg-gray-50">
      {/* Google Map */}
      <div className="w-full pt-14 h-[600px] mt-10 rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63309.02025815471!2d79.90217258071775!3d6.769010986776209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2489f9aefb69b%3A0x2e6fae84dc0b9e6e!2sPanadura!5e0!3m2!1sen!2slk!4v1690000000000!5m2!1sen!2slk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-16">
        <h1 className="text-4xl font-bold text-center mb-4 text-sea-green font-playfair-display">
          Get in Touch
        </h1>
        <p className="text-gray-500 text-base text-center mb-4 sm:mb-12">
          We&apos;d love to hear from you! Fill out the form below or reach us
          directly through our contact details.
        </p>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-10">
          {/* Contact Info */}
          <div className="flex justify-center items-center h-full">
            <div className="p-8 flex flex-col items-start">
              <h2 className="text-2xl font-semibold text-shadow-wash mb-6 text-left">
                Contact details
              </h2>
              <div className="space-y-4 text-gray-500">
                <p className="text-left">
                  Travel Nation, No.
                  92/01/03, 1st Floor, Old <br /> Galle Rd, Panadura 12500
                </p>
                <p className="text-left">
                  <a
                    href="mailto:info@travelnation.vip"
                    className="hover:underline"
                  >
                    info@travelnation.vip
                  </a>
                </p>
                <p className="text-left">
                  +94 74 011 0489
                </p>
              </div>
              <div className="flex items-center gap-x-4 mt-8  text-sea-green text-lg text-left">
                <Link
                  href="#"
                  className="hover:text-teal-500 transition-transform transform hover:scale-110 border p-3"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href="#"
                  className="hover:text-teal-500 transition-transform transform hover:scale-110 border p-3"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href="#"
                  className="hover:text-teal-500 transition-transform transform hover:scale-110 border p-3"
                >
                  <FaTiktok />
                </Link>
                <Link
                  href="#"
                  className="hover:text-teal-500 transition-transform transform hover:scale-110 border p-3"
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
      </div>
    </section>
  );
}
