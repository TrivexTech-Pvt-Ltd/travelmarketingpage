"use client";

import { useState } from "react";
import React from "react";
import Swal from "sweetalert2";
import { FaPlaneDeparture, FaSuitcaseRolling, FaUmbrellaBeach } from "react-icons/fa";

const ReviewForm = () => {
  const [hover, setHover] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    location: "",
    package: "",
    review: "",
    rating: 0,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.rating === 0) {
      Swal.fire({
        icon: "error",
        title: "Rating Required",
        text: "Please provide a rating before submitting your review.",
      });
      return;
    }

    setLoading(true);
    const res = await fetch("/api/review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      Swal.fire({
        icon: "success",
        title: "Thank You! 💚",
        text: "Your review has been submitted successfully.",
      });
      setForm({
        name: "",
        email: "",
        location: "",
        package: "",
        review: "",
        rating: 0,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "There was an error submitting your review. Please try again later.",
      });
    }

    setLoading(false);
  };

  return (
    <section className="relative bg-gradient-to-br from-emerald-100 via-green-100 to-cyan-300 py-16 px-8 md:px-28 overflow-hidden">
      {/* Floating Background Icons */}
      <FaPlaneDeparture className="absolute text-emerald-300 text-[6rem] top-10 left-8 animate-float opacity-30" />
      <FaUmbrellaBeach className="absolute text-green-300 text-[5rem] bottom-16 right-10 animate-float-delayed opacity-30" />
      <FaSuitcaseRolling className="absolute text-emerald-400 text-[4rem] top-1/2 right-1/4 animate-float-slow opacity-25" />

      <div className="relative max-w-7xl mx-auto  p-8 sm:p-12 ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-emerald-800 tracking-tight">
          🌍 Share Your Travel Experience
        </h2>
        <p className="text-center text-gray-600 mb-10">
          We&apos;d love to hear about your journey — your feedback helps other travelers
          and inspires us to create even better adventures!
        </p>

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleSubmit}
        >
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="border border-gray-300 bg-white/60 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-400 focus:outline-none transition-all"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="border border-gray-300 bg-white/60 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-400 focus:outline-none transition-all"
            />
          </div>

          {/* Location */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Enter your location"
              className="border border-gray-300 bg-white/60 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-400 focus:outline-none transition-all"
            />
          </div>

          {/* Package */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">Package</label>
            <select
              value={form.package}
              onChange={(e) => setForm({ ...form, package: e.target.value })}
              className="border border-gray-300 bg-white/60 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-400 focus:outline-none transition-all"
            >
              <option value="">Select your trip package</option>
              <option value="CT">Cultural Tour</option>
              <option value="BV">Beach Vacation</option>
              <option value="AP">Adventure Package</option>
              <option value="HS">Honeymoon Special</option>
              <option value="FH">Family Holiday</option>
              <option value="LE">Luxury Escape</option>
              <option value="WF">Wildlife Safari</option>
              <option value="CP">Custom Package</option>
            </select>
          </div>

          {/* Rating */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">
              Your Rating <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2 cursor-pointer">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => setForm({ ...form, rating: star })}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                  className={`text-3xl transition-transform duration-200 ${star <= (hover || form.rating)
                      ? "text-yellow-400 scale-110 drop-shadow-sm"
                      : "text-gray-300"
                    }`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          {/* Review */}
          <div className="md:col-span-2 flex flex-col">
            <label className="text-gray-700 font-medium mb-2">
              Review <span className="text-red-500">*</span>
            </label>
            <textarea
              name="review"
              rows={4}
              placeholder="Tell us about your amazing trip..."
              value={form.review}
              onChange={handleChange}
              required
              className="border border-gray-300 bg-white/60 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-400 focus:outline-none resize-none transition-all"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="md:col-span-2 flex justify-center mt-8">
            <button
              type="submit"
              disabled={loading}
              className="relative bg-gradient-to-r from-emerald-500 to-green-400 hover:from-emerald-600 hover:to-green-500 text-white font-semibold py-3 px-12 rounded-full shadow-lg hover:shadow-emerald-300/50 transition-all duration-300 disabled:opacity-60"
            >
              {loading ? "Submitting..." : "✨ Submit Review"}
            </button>
          </div>
        </form>
      </div>

      {/* Floating Animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 7s ease-in-out infinite;
          animation-delay: 2s;
        }
        .animate-float-slow {
          animation: float 9s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default ReviewForm;
