"use client"
import Image from "next/image";
import Link from "next/link";
import { Hero8 } from "@/utils/staticImages";
import { motion } from "framer-motion";
import ImageSlider from "../ui/ImageSlider";
import { luxHolidaySlider } from "@/utils/data";

const Services = () => {

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {/* IMAGE */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        variants={fadeInLeft}
      >
        <ImageSlider
          heroData={luxHolidaySlider}
          height="h-96 lg:h-full xl:h-[680px] 4xl:h-[1080px]"
        />
      </motion.div>

      {/* TEXT */}
      <motion.div
        className="bg-soft-beige p-6 flex justify-center items-center flex-col lg:px-12 xl:px-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        variants={fadeInRight}
      >
        <div className="space-y-6 py-6">
          <motion.h3
            className="text-sea-green text-3xl sm:text-4xl md:text-5xl uppercase font-normal text-center font-playfair-display"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
          >
            LUXURY TAILOR-MADE HOLIDAYS
          </motion.h3>

          {[
            "Crafted with precision, delivered with passion.",
            "Every traveller is unique, and so is every journey we create. Our travel designers work with you personally to curate bespoke itineraries that reflect your interests, pace, and style.",
            "From boutique stays to private chauffeurs and exclusive experiences, we ensure that your holiday is seamless, sophisticated, and unforgettable.",
            "At Travel Nation, luxury is not about extravagance, it is about meaningful moments, thoughtfully delivered."
          ].map((text, index) => (
            <motion.p
              key={index}
              className="text-sm lg:text-lg text-gray-500 text-center"
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
            >
              {text}
            </motion.p>
          ))}

          <motion.div
            className="flex justify-center items-center w-full"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link
              href="/maldives"
              className="text-white text-sm bg-sea-green py-3 px-6 sm:py-4 mx-auto sm:px-8 rounded-md border transition-all duration-300 hover:bg-transparent border-sea-green hover:text-sea-green hover:scale-105 font-medium"
            >
              Lets go Places
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
