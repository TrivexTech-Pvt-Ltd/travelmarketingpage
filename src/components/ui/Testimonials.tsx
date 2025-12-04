"use client";

import { useEffect, useState } from "react";
import { Star, MapPin, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // removed Navigation
import "swiper/css";
import "swiper/css/pagination";
import ImageSlider from "./ImageSlider";
import { slSliderNew } from "@/utils/data";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import { About1, Hero4 } from "@/utils/staticImages";
import { motion, AnimatePresence } from "framer-motion";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

interface Testimonial {
  text: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    text: `We spent 13 days on a Bawa tour with wonderful driver and 
    guide Manjula, including Kandalama Heritance, The Kandy House, 
    The Last House, Jetwing Yala, Jetwing Lighthouse and Club Villa hotels. 
    We are 3 friends, one of them in the wheelchair. Dulmini Ekanayake 
    from Red Dot Tours was very helpful and very patient and found 
    solutions to all our special demands.`,
    author: "Rene (March 2025) United Kingdom",
  },
  {
    text: `Our Sri Lanka trip was an unforgettable experience! The team planned 
    everything perfectly — from the hotels to the excursions. Our guide was 
    knowledgeable and incredibly friendly. The wildlife safari and cultural visits 
    made our holiday magical.`,
    author: "Anna (February 2024) • Germany",
  },
  // Add more items here…
];

export default function Testimonials() {

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center my-10">
      <div className="bg-soft-beige p-6 flex justify-center items-center flex-col lg:px-12 h-full">
        <div className="max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Testimonial Text */}
              <p className="text-base md:text-lg leading-relaxed text-gray-500">
                {testimonials[index].text}
              </p>

              {/* Author */}
              <p className="text-sm md:text-base font-semibold opacity-70">
                {testimonials[index].author}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-10">
            <button
              type="button"
              onClick={prev}
              className="h-12 w-12 rounded-full flex items-center justify-center hover:bg-white transition cursor-pointer"
            >
              <MdArrowBack size={22} />
            </button>

            <button
              type="button"
              onClick={next}
              className="h-12 w-12 rounded-full flex items-center justify-center hover:bg-white transition cursor-pointer"
            >
              <MdArrowForward size={22} />
            </button>
          </div>
        </div>

      </div>
      <Image
        src={Hero4}
        height={500}
        width={500}
        alt="maldives"
        className="w-full h-96 lg:h-full xl:h-[680px]"
      />
    </div>
  );
}
