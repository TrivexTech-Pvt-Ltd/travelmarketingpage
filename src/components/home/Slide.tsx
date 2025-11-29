import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface SlideProps {
  image?: any;
  video?: string;
  text?: string;
  country?: string;
  link?: string;
  height?: string;
  activeSlide: number;
}

const Slide = ({
  image,
  video,
  country = "",
  text = "",
  link = "#",
  height,
  activeSlide,
}: SlideProps) => {
  return (
    <div className="relative w-full">
      {/* VIDEO SLIDE */}
      {video && (
        <div className="relative w-full">
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full object-cover z-10"
            style={{ height: height || "620px" }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>


      )}

      {/* IMAGE SLIDE */}
      {image && (
        <div
          className={`relative w-full flex justify-center items-center`}
          style={{ height: height || "620px" }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Image */}
          <Image
            src={image}
            alt="hero image"
            width={1920}
            height={1080}
            className="w-full h-200 object-cover "
            style={{ height: height || "620px" }}
          />

          {/* Text + Button */}
          <motion.div
            className="absolute z-20 text-white text-center space-y-6 px-4"
            initial={{ y: 170, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            key={activeSlide}
          >
            <h4 className="text-white text-2xl tracking-wide uppercase">
              {country}
            </h4>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-playfair-display font-medium leading-tight">
              {text.split("\n").map((line: string, i: number) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <Link
              href={link}
              className="text-white bg-sea-green py-3 px-8 rounded-md border border-white
              transition-all duration-300 hover:bg-gradient-to-r hover:from-sea-green hover:to-emerald-400 hover:scale-105"
            >
              Discover
            </Link>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Slide;
