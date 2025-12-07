"use client"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import ImageSlider from "../ui/ImageSlider";
import { divingMarineLife, honeymoon, islandsAtolls, resortVillas } from "@/utils/maldivesData";
import FooterNote from "./FooterNote";

interface MaldivesOverviewProps {
  setActiveTab: (value: string) => void
}

const MaldivesOverview = ({ setActiveTab }: MaldivesOverviewProps) => {
  return (
    <>
      <div className="flex justify-center items-center max-w-7xl mx-auto my-8 sm:my-16">
        <div className="text-center">
          <h3 className='text-sea-green text-3xl sm:text-4xl md:text-5xl font-normal uppercase font-playfair-display my-5'>Welcome to the Maldives</h3>
          <p className='text-sm sm:text-lg text-gray-500 leading-7 sm:leading-8'>where time slows, and tranquillity takes form in shades of blue.
            A paradise of coral islands floating like pearls across the Indian Ocean, this is where barefoot luxury meets untouched nature.</p>
          <p className='text-sm sm:text-lg text-gray-500 leading-7 sm:leading-8'>Sail across turquoise waters at sunset, dive into coral gardens alive with colour, or simply lose track of time beneath the open sky.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="flex justify-center items-center bg-soft-beige h-full lg:px-16">
          <div className='pr-2'>
            <h3 className='text-sea-green text-3xl sm:text-4xl md:text-5xl font-normal uppercase font-playfair-display my-5'>Resorts <span className="font-libreBaskerville">&</span> Villas</h3>
            <p className='text-shadow-wash text-base lg:text-xl uppercase font-medium my-5'>Your Private Haven</p>
            <p className='text-sm lg:text-lg text-gray-500 mb-6 sm:mb-8 leading-7 sm:leading-8'>From overwater villas to beachfront sanctuaries, every stay in the Maldives redefines luxury.
              Travel Nation partners with exclusive resorts that blend modern design with nature&apos;s beauty, where sunrise breakfasts and sunset champagne are part of everyday life
            </p>
            <p className='text-sm lg:text-lg text-gray-500 mb-6 sm:mb-8 leading-7 sm:leading-8'>Each resort is carefully chosen to match your style, whether intimate and boutique or grand and iconic.</p>
          </div>
        </div>
        <ImageSlider heroData={resortVillas} height="h-96 lg:h-full xl:h-[680px]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <ImageSlider heroData={divingMarineLife} height="h-96 lg:h-full xl:h-[680px]" />
        <div className="flex justify-center items-center bg-soft-beige h-full lg:px-16">
          <div className='pr-2'>
            <h3 className='text-sea-green text-3xl sm:text-4xl md:text-5xl font-normal uppercase font-playfair-display my-5'>Diving <span className="font-libreBaskerville">&</span> Marine Life</h3>
            <p className='text-shadow-wash text-base lg:text-xl uppercase font-medium my-5'>Beneath the Blue</p>
            <p className='text-sm lg:text-lg text-gray-500 mb-6 sm:mb-8 leading-7 sm:leading-8'>The Maldives is one of the world&apos;s greatest underwater playgrounds.
              Home to manta rays, whale sharks, and vibrant coral gardens, every dive or snorkel feels like entering another world.
            </p>
            <p className='text-sm lg:text-lg text-gray-500 mb-6 sm:mb-8 leading-7 sm:leading-8'>Whether you are a beginner or a certified diver, our handpicked experiences let you explore the atolls with trusted guides and top-tier safety.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="flex justify-center items-center bg-soft-beige h-full lg:px-14">
          <div className='pr-2'>
            <h3 className='text-sea-green text-3xl sm:text-4xl md:text-5xl font-normal uppercase font-playfair-display my-5'>Romance <span className="font-libreBaskerville">&</span> Honeymoons</h3>
            <p className='text-shadow-wash text-base lg:text-xl uppercase font-medium my-5'>Where Love Meets the Horizon</p>
            <p className='text-sm lg:text-lg text-gray-500 mb-6 sm:mb-8 leading-7 sm:leading-8'>Few places on earth are as effortlessly romantic as the Maldives.
              Imagine walking barefoot on powder-white sand, sharing candlelit dinners by the ocean, or sailing into the sunset aboard a private catamaran.
            </p>
            <p className='text-sm lg:text-lg text-gray-500 mb-6 sm:mb-8 leading-7 sm:leading-8'>Our honeymoon escapes are designed for intimacy, indulgence, and unforgettable moments — where every day feels like a dream.</p>
          </div>
        </div>
        <ImageSlider heroData={honeymoon} height="h-96 lg:h-full xl:h-[680px]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <ImageSlider heroData={islandsAtolls} height="h-96 lg:h-full xl:h-[680px]" />
        <div className="flex justify-center items-center bg-soft-beige h-full lg:px-16">
          <div className='pr-2'>
            <h3 className='text-sea-green text-3xl sm:text-4xl md:text-5xl font-normal uppercase font-playfair-display my-5'>Atolls <span className="font-libreBaskerville">&</span> Islands</h3>
            <p className='text-shadow-wash text-base lg:text-xl uppercase font-medium my-5'>Each with Its Own Soul</p>
            <div className='flex flex-col gap-y-6 sm:pl-8 py-4'>
              <div className='flex gap-x-4'>
                <div className='w-8 h-8'>
                  <IoCheckmarkDoneSharp className="text-sea-green text-lg" />
                </div>
                <div className='text-sm sm:text-base text-gray-500'>
                  <strong>North Malé Atoll – </strong>Close to the capital and perfect for first-time visitors, offering a mix of luxury resorts, great nightlife, and easy transfers.
                </div>
              </div>
              <div className='flex gap-x-4'>
                <div className='w-8 h-8'>
                  <IoCheckmarkDoneSharp className="text-sea-green text-lg" />
                </div>
                <div className='text-sm sm:text-base text-gray-500'>
                  <strong>South Malé Atoll – </strong>Quieter and more secluded, ideal for couples seeking serenity with exceptional diving sites.
                </div>
              </div>
              <div className='flex gap-x-4'>
                <div className='w-8 h-8'>
                  <IoCheckmarkDoneSharp className="text-sea-green text-lg" />
                </div>
                <div className='text-sm sm:text-base text-gray-500'>
                  <strong>Ari Atoll – </strong>Famous for its marine diversity, with some of the Maldives&apos;s best dive spots and elegant resorts.
                </div>
              </div>
              <div className='flex gap-x-4'>
                <div className='w-8 h-8'>
                  <IoCheckmarkDoneSharp className="text-sea-green text-lg" />
                </div>
                <div className='text-sm sm:text-base text-gray-500'>
                  <strong>Baa Atoll – </strong>UNESCO Biosphere Reserve, home to manta rays, coral gardens, and luxurious eco-retreats.
                </div>
              </div>
              <div className='flex gap-x-4'>
                <div className='w-8 h-8'>
                  <IoCheckmarkDoneSharp className="text-sea-green text-lg" />
                </div>
                <div className='text-sm sm:text-base text-gray-500'>
                  <strong>Lhaviyani & Noonu Atolls – </strong>Ideal for off-the-beaten-path travellers looking for untouched lagoons and peaceful seclusion.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="my-16 px-5 lg:px-56">
        <h4 className="font-semibold text-shadow-wash uppercase text-xl my-2">The Maldives is more than a holiday, it is an experience of stillness, elegance, and connection.</h4>
        <p className="text-gray-500 text-base md:text-xl py-3 italic text-center leading-9">
          "At Travel Nation, we bring you handpicked island escapes designed for pure indulgence, from private villas suspended above crystal lagoons to beachfront sanctuaries shaded by palms. Whether it is a romantic getaway, a family retreat, or a wellness escape, every stay is wrapped in serenity."
        </p>
      </div>
      <FooterNote />
    </>

  )
}

export default MaldivesOverview




