import { Hero6, MaldivesHero } from "@/utils/staticImages";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { slSliderNew, MalSliderNew } from "@/utils/data";
import ImageSlider from "../ui/ImageSlider";
import { FiArrowDownRight, FiArrowRight } from "react-icons/fi";

const Destinations = () => {
  return (
    <div className="flex flex-col">
      {/* ⭐ SRI LANKA SECTION — Image RIGHT → LEFT */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* IMAGE LEFT */}
        <div className="h-full">
          <ImageSlider
            heroData={slSliderNew}
            height="h-96 lg:h-full xl:h-[680px]"
          />
        </div>
        {/* <div className="order-2 lg:order-1 h-full">
     
        </div> */}

        {/* TEXT RIGHT */}
        <div className="bg-soft-beige p-6 flex md:justify-center md:items-center flex-col lg:px-12 xl:px-20">
          <div className="space-y-6 md:space-y-10 max-xl:mb-5">
            <h3 className="text-sea-green text-3xl sm:text-4xl md:text-5xl uppercase font-semibold font-playfair-display">
              Discover the Beauty <br /> of Sri Lanka
            </h3>
            <p className="text-base sm:text-2xl text-gray-500 leading-7">
              The island of stories, ancient heritage, and untamed wilderness.
            </p>
            <Link
              href="/sri-lanka"
              className="text-white w-fit flex items-center gap-x-2 text-sm bg-sea-green py-3 px-6 sm:py-4 sm:px-8 border border-white transition-all duration-300 hover:bg-gradient-to-r hover:from-sea-green hover:to-emerald-400 hover:scale-105 font-medium"
            >
              View Destinations <FiArrowRight size={16}/>
            </Link>
          </div>
        </div>
      </div>

      {/* ⭐ MALDIVES SECTION — Image LEFT → RIGHT */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* TEXT LEFT */}
        <div className="bg-soft-beige p-6 flex justify-center items-center flex-col lg:px-12 xl:px-20">
          <div className="space-y-6 md:space-y-10 max-xl:mb-5">
            <h3 className="text-sea-green text-3xl sm:text-4xl md:text-5xl uppercase font-semibold font-playfair-display">
              Luxury Travel in the <br /> Maldives
            </h3>
            <p className="text-base sm:text-2xl text-gray-500 leading-7">
              The epitome of barefoot luxury, where time slows and nature
              breathes in colour.
            </p>
            <Link
              href="/maldives"
              className="text-white text-sm w-fit flex items-center gap-x-2 bg-sea-green py-3 px-6 sm:py-4 sm:px-8 border border-white transition-all duration-300 hover:bg-gradient-to-r hover:from-sea-green hover:to-emerald-400 hover:scale-105 font-medium"
            >
              View Destinations <FiArrowRight size={16}/>
            </Link>
          </div>
        </div>
        <ImageSlider
          heroData={MalSliderNew}
          height="h-96 lg:h-full xl:h-[680px]"
        />
      </div>


    </div>
  );
};

export default Destinations;
