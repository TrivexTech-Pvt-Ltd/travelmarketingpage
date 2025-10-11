"use client";

import { useState } from "react";
import React from 'react'
import Swal from "sweetalert2";

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
                icon: 'error',
                title: 'Rating Required',
                text: 'Please provide a rating before submitting your review.',
            });
            return;
        } else {

            setLoading(true);
            const res = await fetch("/api/review", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();
            if (data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Thank You!',
                    text: 'Your review has been submitted successfully.',
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
                    icon: 'error',
                    title: 'Submission Failed',
                    text: 'There was an error submitting your review. Please try again later.',
                });
            }

            setLoading(false);
        };
    }

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-lg my-10">
            <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
                Share Your Travel Experience
            </h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-gray-700 font-medium mb-2">
                        Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sea-green"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-gray-700 font-medium mb-2">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sea-green"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="location" className="text-gray-700 font-medium mb-2">
                        Location
                    </label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={form.location}
                        onChange={handleChange}
                        placeholder="Enter your location"
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sea-green"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="package" className="text-gray-700 font-medium mb-2">
                        Package
                    </label>
                    <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sea-green" value={form.package} onChange={(e) => setForm({ ...form, package: e.target.value })}>
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
                <div className="flex flex-col">
                    <label htmlFor="rating" className="text-gray-700 font-medium mb-2">
                        Your Rating <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-1 cursor-pointer">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                onClick={() => setForm({ ...form, rating: star })}
                                onMouseEnter={() => setHover(star)}
                                onMouseLeave={() => setHover(0)}
                                className={`text-2xl transition-colors ${star <= (hover || form.rating)
                                    ? "text-yellow-400"
                                    : "text-gray-300"
                                    }`}
                            >
                                ★
                            </span>
                        ))}

                    </div>
                </div>
                <div className="md:col-span-2 flex flex-col">
                    <label htmlFor="review" className="text-gray-700 font-medium mb-2">
                        Review <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="review"
                        name="review"
                        rows={4}
                        placeholder="Share your travel experience..."
                        value={form.review}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sea-green"
                    ></textarea>
                </div>
                <div className="md:col-span-2 flex justify-center mt-4">
                    <button
                        type="submit"
                        className="bg-sea-green text-white py-3 px-10 rounded-full font-medium 
                   hover:bg-emerald-600 transition-all duration-300"
                        disabled={loading}
                    >
                        Submit Review
                    </button>
                </div>
            </form>
        </div>

    )
}

export default ReviewForm