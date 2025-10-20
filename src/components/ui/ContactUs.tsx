"use client";

import { useState } from "react";
import Swal from "sweetalert2";

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

    console.log("Submitting contact form:", formData);
    const res = await fetch("/api/contactus", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (data.success) {
      {
        Swal.fire({
          icon: "success",
          title: "Thank You!",
          text: "Your message has been sent successfully.",
        });
        // setFormData({
        //     name: "",
        //     email: "",
        //     phone: "",
        //     subject: "",
        //     message: "",
        //     consent: false,
        // });
        // setErrors({});
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again later.",
      });
    }
  };

  return (
    <section>
      {" "}
      <div className="w-full h-[400px] mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63309.02025815471!2d79.90217258071775!3d6.769010986776209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2489f9aefb69b%3A0x2e6fae84dc0b9e6e!2sPanadura!5e0!3m2!1sen!2slk!4v1690000000000!5m2!1sen!2slk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-3xl font-semibold text-center mb-10">Contact Us</h1>

        {/* Contact Section */}
        <div className="grid md:grid-cols-2 gap-10 ">
          <div className="text-center justify-center">
            <h2 className="text-2xl font-semibold mb-4">Contact details</h2>
            <p className="mb-2">
              Travel Nation, No 92/01/03, 1st Floor, Old Galle Rd, Panadura
              12500
            </p>
            <p className="mb-2">
              <a
                href="mailto:info@travelnation.vip"
                className="text-teal-700 hover:underline"
              >
                info@travelnation.vip
              </a>
            </p>
            <p className="mb-6">+94 74 011 0489</p>

            {/* Social Icons */}
            <div className="flex justify-center space-x-4">
              <a href="#" className="hover:text-teal-700">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-teal-700">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-teal-700">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="#" className="hover:text-teal-700">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          {/* Right: Contact Form */}
          {/* <form className="bg-gray-50 shadow-md rounded-xl p-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone"
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>

            <textarea
              placeholder="How can we help you? Feel free to get in touch!"
              rows={4}
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-teal-600"
            ></textarea>

            <div className="flex items-center space-x-2">
              <input type="checkbox" id="agree" className="w-4 h-4" />
              <label htmlFor="agree" className="text-sm text-gray-600">
                I agree that my data is collected and stored.
              </label>
            </div>

            <button
              type="submit"
              className="bg-teal-700 text-white px-6 py-3 rounded-lg hover:bg-teal-800 transition"
            >
              GET IN TOUCH
            </button>
          </form> */}

          <div className="flex justify-center  ">
            <div className="w-full max-w-3xl bg-white rounded-xl shadow-md p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="flex items-center text-gray-600 mb-1">
                      <span className="mr-2">👤</span> Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full border-b-2 focus:outline-none py-1 ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="flex items-center text-gray-600 mb-1">
                      <span className="mr-2">📧</span> Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full border-b-2 focus:outline-none py-1 ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="flex items-center text-gray-600 mb-1">
                      <span className="mr-2">📞</span> Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full border-b-2 focus:outline-none py-1 ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm">{errors.phone}</p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="flex items-center text-gray-600 mb-1">
                      <span className="mr-2">ℹ️</span> Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full border-b-2 focus:outline-none py-1 ${
                        errors.subject ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm">{errors.subject}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="flex items-center text-gray-600 mb-1">
                    <span className="mr-2">✏️</span> How can we help you? Feel
                    free to get in touch!
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full border-b-2 focus:outline-none py-1 ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  )}
                </div>

                {/* Consent */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="h-4 w-4"
                  />
                  <label className="text-sm text-gray-600">
                    I agree that my data is{" "}
                    <a href="#" className="text-sky-600 underline">
                      collected and stored.
                    </a>
                  </label>
                </div>
                {errors.consent && (
                  <p className="text-red-500 text-sm">{errors.consent}</p>
                )}

                {/* Button */}
                <div>
                  <button
                    type="submit"
                    className="bg-teal-700 hover:bg-teal-800 text-white font-semibold px-8 py-2 rounded shadow"
                  >
                    GET IN TOUCH
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
