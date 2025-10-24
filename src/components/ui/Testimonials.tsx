"use client";

import { useEffect, useState } from "react";
import { Star, MapPin, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // removed Navigation
import "swiper/css";
import "swiper/css/pagination";

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
  const [reviews, setReviews] = useState<Review[]>(initialReviews);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("/api/review");
        const data = await res.json();
        if (data.success && data.reviews?.length > 0) {
          setReviews(data.reviews);
        } else {
          console.warn("No API reviews found or fetch failed.");
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchReviews();
  }, []);

  if (!reviews.length) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8 bg-cover bg-center">
      <div className="max-w-7xl w-full p-8 md:p-10 relative transition-all duration-300">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-sea-green mb-2">
            Traveler Testimonials
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Real experiences shared by our happy travelers ✈️
          </p>
        </div>

        {/* Swiper Section (navigation disabled) */}
        <Swiper
          modules={[Pagination, Autoplay]} // do not include Navigation here
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          pagination={{
            clickable: true,
            bulletClass:
              "swiper-pagination-bullet bg-gray-300 w-3 h-3 rounded-full mx-1",
            bulletActiveClass: "swiper-pagination-bullet-active bg-sea-green",
          }}
          // navigation prop removed / not provided
          className="!pb-10"
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i}>
              <div className="relative bg-white/70 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-inner ">
                <Quote
                  size={40}
                  className="absolute top-4 right-4 text-green-800 opacity-70"
                />

                {/* Reviewer Info */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-sea-green text-white flex items-center justify-center text-lg font-semibold shadow-md">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {review.name}
                    </h3>
                    <div className="flex items-center gap-1 text-sea-green text-sm">
                      <MapPin size={16} />
                      <span>{review.location}</span>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-base leading-relaxed mb-6 italic">
                  “{review.review}”
                </p>

                {/* Package Info */}
                <div className="px-4 py-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-gray-900">
                      Trip Package:
                    </span>{" "}
                    {review.package}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Fallback CSS: hide nav buttons in case they appear from other code */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          display: none !important;
        }
      `}</style>
    </section>
  );
}
