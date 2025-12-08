"use client";

import { useEffect, useState } from "react";
import { Star, MapPin, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // removed Navigation
import "swiper/css";
import "swiper/css/pagination";
import ImageSlider from "./ImageSlider";
import { slSliderNew, testimonials } from "@/utils/data";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import { About1, About5 } from "@/utils/staticImages";
import { motion, AnimatePresence } from "framer-motion";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const handleSwipe = (event: any, info: any) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    // Swipe Right → Previous
    if (offset > 80 || velocity > 300) {
      prev();
    }
    // Swipe Left → Next
    else if (offset < -80 || velocity < -300) {
      next();
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center my-10">
      <div className="bg-soft-beige p-6 flex justify-center items-center flex-col lg:px-12 h-full order-2 lg:order-1">
        <div className="max-w-5xl">
          <h3 className="text-sea-green text-3xl sm:text-4xl md:text-5xl uppercase font-normal font-playfair-display py-3">
            STORIES FROM OUR JOURNEYS
          </h3>
          <p className="text-base lg:text-lg italic text-gray-500 leading-7 py-3">
            Our guests arrive as travellers and leave as friends <br /> carrying
            stories, laughter, and memories that last a lifetime
          </p>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleSwipe}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 cursor-grab active:cursor-grabbing"
            >
              <p className="text-base md:text-lg leading-relaxed text-shadow-wash mt-4">
                {testimonials[index].text}
              </p>

              <p className="text-sm md:text-base text-gray-500 font-semibold">
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
          <div className="w-fit px-5 rounded-sm py-1 bg-gray-900 mt-6">
            <Link
              href="https://www.trustpilot.com/review/travelnationsl.com?utm_medium=trustbox&utm_source=TrustBoxReviewCollector"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-3 group"
            >
              <span className="text-white text-base py-2 font-medium tracking-wide transition-opacity">
                View us on
              </span>
              <img
                src="https://cdn.trustpilot.net/brand-assets/4.3.0/logo-white.svg"
                alt="Trustpilot Logo"
                className="h-6 w-auto transition-transform group-hover:scale-105"
              />
            </Link>
          </div>
        </div>
      </div>
      <Image
        src={About5}
        height={500}
        width={500}
        alt="maldives"
        className="w-full h-96 lg:h-full xl:h-[680px] order-1 lg:order-2"
      />
    </div>
  );
}
