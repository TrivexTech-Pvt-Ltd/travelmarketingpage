"use client";

import { useState, useEffect } from "react";
import { Star, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

interface Review {
    name: string;
    email: string;
    location: string;
    package: string;
    review: string;
    rating: number;
}


const initialReviews: Review[] = [];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [reviews, setReviews] = useState<Review[]>(initialReviews);
    const nextSlide = () =>
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
    const prevSlide = () =>
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

    // let review: Review = {
    //     name: "",
    //     email: "",
    //     location: "",
    //     package: "",
    //     review: "",
    //     rating: 0
    // };

    const review = reviews[currentIndex];

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const res = await fetch("/api/review");
                const data = await res.json();
                if (data.success && data.reviews?.length > 0) {
                    // 🧠 Option 1: Replace static with API data
                    setReviews(data.reviews);

                    // 🧠 Option 2: Append API data to existing static ones
                    // setReviews((prev) => [...prev, ...data.reviews]);
                } else {
                    console.warn("No API reviews found or fetch failed.");
                }
            } catch (error) {
                console.error("Error fetching reviews:", error);
            }
        };

        fetchReviews();
    }, []);

    if (!review) return null;
    return (


        <section className="bg-gray-50 min-h-screen flex items-center justify-center p-6">
            <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8 relative">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-sea-green">
                        Live Traveler Reviews
                    </h2>
                    {/* <span className="bg-red-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                        ● LIVE UPDATES
                    </span> */}
                </div>

                {/* Review Card */}
                <div className="border border-gray-100 rounded-2xl p-6 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-sea-green text-white flex items-center justify-center text-lg font-semibold">
                            {review.name.charAt(0)}
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">
                                {review.name}
                            </h3>
                            <div className="flex items-center gap-1 text-text-sea-green text-sm">
                                <MapPin size={16} />
                                <span>{review.location}</span>
                            </div>
                            {/* <p className="text-gray-500 text-xs mt-1">{review.date}</p> */}
                        </div>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-3">
                        {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                        ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                        {review.review}
                    </p>

                    {/* Trip Package */}
                    <div className="border border-blue-200 bg-blue-50 rounded-xl px-4 py-3">
                        <p className="text-sm text-gray-700">
                            <span className="font-bold text-gray-900">Trip Package:</span>{" "}
                            {review.package}
                        </p>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-center mt-8 gap-4">
                    <button
                        onClick={prevSlide}
                        className="bg-sea-green text-white p-3 rounded-full shadow hover:bg-sea-green transition"
                    >
                        <ChevronLeft />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="bg-sea-green text-white p-3 rounded-full shadow hover:bg-sea-green transition"
                    >
                        <ChevronRight />
                    </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center mt-4 space-x-2">
                    {reviews?.length
                        ? reviews.map((_, i) => (
                            <span
                                key={i}
                                className={`w-2.5 h-2.5 rounded-full ${i === currentIndex ? 'bg-sea-green' : 'bg-gray-300'}`}
                            ></span>
                        ))
                        : null}
                </div>
            </div>
        </section>
    );
}
