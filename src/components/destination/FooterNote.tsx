"use client";
import { YourJourney } from "@/utils/staticImages";
import Image from "next/image";

const FooterNote = () => {
  return (
    <section className="relative w-full h-96 lg:h-full xl:h-[780px] 4xl:h-[1080px]">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={YourJourney}
          alt="Adventure landscape"
          className="w-full h-full object-cover"
          fill
        />
        {/* Soft Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto h-full flex items-start justify-between px-6 lg:pl-20 4xl:pl-96 lg:pr-64 4xl:pr-96 pt-20">

        {/* Left Text */}
        <div className="max-w-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl 4xl:text-7xl uppercase font-normal font-playfair-display leading-14 4xl:leading-20 text-white/50">
            Your Journey<br />
            starts here
          </h1>
        </div>

        {/* Right Text */}
        <div className="max-w-md space-y-6">
          <p className="text-white text-lg md:text-xl 4xl:2xl leading-relaxed">
            Let us guide you forward
          </p>
          <button type='button' className="cursor-pointer text-white text-sm 4xl:lg w-fit flex items-center gap-x-2 rounded-md bg-transparent py-3 px-6 sm:py-4 sm:px-8 border border-gray-100 transition-all duration-300 hover:bg-gray-900 hover:text-white hover:scale-105 font-medium">
            Let&apos;s go Places
          </button>
        </div>
      </div>
    </section>
  );
};

export default FooterNote;
