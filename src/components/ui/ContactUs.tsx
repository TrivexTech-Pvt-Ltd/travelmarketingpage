"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({
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
      <div className="w-full h-[400px] mt-10 rounded-lg overflow-hidden shadow-md">
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
        <h1 className="text-4xl font-bold text-center mb-4 text-teal-700">
          Get in Touch
        </h1>
        <p className="text-gray-600 text-center mb-12">
          We'd love to hear from you! Fill out the form below or reach us
          directly through our contact details.
        </p>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col justify-center text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Contact Information
            </h2>

            <div className="space-y-4 text-gray-600">
              <p className="flex items-center justify-center gap-2">
                <FaMapMarkerAlt className="text-teal-700" /> Travel Nation, No.
                92/01/03, 1st Floor, Old Galle Rd, Panadura 12500
              </p>
              <p className="flex items-center justify-center gap-2">
                <FaEnvelope className="text-teal-700" />
                <a
                  href="mailto:info@travelnation.vip"
                  className="hover:underline"
                >
                  info@travelnation.vip
                </a>
              </p>
              <p className="flex items-center justify-center gap-2">
                <FaPhoneAlt className="text-teal-700" /> +94 74 011 0489
              </p>
            </div>

            <div className="flex justify-center mt-8 space-x-6 text-teal-700 text-lg">
              <a
                href="#"
                className="hover:text-teal-500 transition-transform transform hover:scale-110"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="hover:text-teal-500 transition-transform transform hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="hover:text-teal-500 transition-transform transform hover:scale-110"
              >
                <FaTiktok />
              </a>
              <a
                href="#"
                className="hover:text-teal-500 transition-transform transform hover:scale-110"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {["name", "email", "phone", "subject"].map((field) => (
                  <div key={field}>
                    <label className="block text-gray-700 mb-1 capitalize">
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
                      value={(formData as any)[field]}
                      onChange={handleChange}
                      className={`w-full border rounded-lg p-3 focus:ring-2 focus:ring-teal-600 outline-none ${
                        errors[field]
                          ? "border-red-500"
                          : "border-gray-300 focus:border-teal-600"
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
                  className={`w-full border rounded-lg p-3 focus:ring-2 focus:ring-teal-600 outline-none ${
                    errors.message
                      ? "border-red-500"
                      : "border-gray-300 focus:border-teal-600"
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
                  className="h-4 w-4 text-teal-700 border-gray-300 rounded focus:ring-teal-600"
                />
                <label className="text-sm text-gray-600">
                  I agree that my data is{" "}
                  <a href="#" className="text-teal-700 underline">
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
                  className="bg-teal-700 hover:bg-teal-800 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
