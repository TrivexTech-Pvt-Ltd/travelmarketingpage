"use client";
import { YourJourney } from "@/utils/staticImages";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterNote = () => {
  return (
    <section className="relative w-full h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={YourJourney}
          alt="Adventure landscape"
          className="w-full h-full object-cover"
        />
        {/* Soft Overlay */}
        <div className="absolute inset-0 bg-white/20"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto h-full flex items-start justify-between px-6 lg:pl-20 lg:pr-64 pt-20">

        {/* Left Text */}
        <div className="max-w-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl uppercase font-normal font-playfair-display leading-14 text-gray-900">
            Your Journey<br />
            starts here
          </h1>
        </div>

        {/* Right Text */}
        <div className="max-w-md space-y-6">
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Let us guide you forward
          </p>
          <button type='button' className="cursor-pointer text-gray-900 text-sm w-fit flex items-center gap-x-2 rounded-md bg-transparent py-3 px-6 sm:py-4 sm:px-8 border border-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white hover:scale-105 font-medium">
            Let&apos;s go Places
          </button>
        </div>
      </div>
    </section>
  );
};

export default FooterNote;
