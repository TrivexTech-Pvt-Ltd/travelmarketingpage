"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { atollData, destination_1, destination_2, destination_3, destinationImages_3, destinationImages_4, destinationImages_5, destinationImages_6 } from '@/lib/utils/data';
import Link from 'next/link';
import AtollCard from './AtollCard';
import ImageSlider from "../ui/ImageSlider";

interface MaldivesOverviewProps {
  setActiveTab: (value: string) => void
}

const MaldivesOverview = ({ setActiveTab }: MaldivesOverviewProps) => {

  const handleScrollToGetaways = () => {

    window.location.hash = "getaways";

    const section = document.getElementById("getaways-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveTab("getaways");
    }
  }
  return (
    <>
      <div className='px-5 md:px-8 xl:px-40'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-7xl mx-auto my-8 sm:my-16">
          <div className="flex justify-center items-center">
            <div className='pr-2'>
              <p className='text-sea-green text-lg uppercase font-medium'>The Maldives</p>
              <h3 className='text-sea-green text-3xl sm:text-4xl md:text-6xl font-semibold font-playfair-display my-5'>A Paradise of Luxury<br />and Serenity</h3>
              <p className='text-sm sm:text-base text-gray-500 mb-8 sm:mb-16 leading-7 sm:leading-8'>The Maldives is a tropical paradise like no other, where powdery white sand beaches, crystal-clear waters, and overwater bungalows await those seeking a serene and luxurious escape. With its unique geography, made up of over 1,000 islands spread across 26 atolls, the Maldives offers an unparalleled blend of relaxation and adventure. At Travel Nation, we specialize in curating exclusive experiences across the Maldives, ensuring your journey is defined by indulgence, tranquility, and unforgettable moments.</p>
              <Link href="/about" className="text-white bg-sea-green py-4 px-8 border border-white transition-all duration-300 hover:bg-gradient-to-r hover:from-sea-green hover:to-emerald-400 hover:scale-105 font-medium uppercase text-sm">
                About Us
              </Link>
            </div>
          </div>
          <ImageSlider heroData={destination_1} height="h-96 lg:h-full xl:h-[680px]" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center max-w-7xl mx-auto my-10 sm:my-20">
          <div className="order-2 lg:order-1 h-full">
            <ImageSlider heroData={destination_2} height="h-96 lg:h-full xl:h-[680px]" />
          </div>
          <div className="flex justify-center items-center bg-soft-beige h-full order-1 lg:order-2">
            <div className='p-6 sm:p-12'>
              <h3 className='text-shadow-wash text-3xl sm:text-4xl md:text-5xl font-semibold font-playfair-display my-3 sm:my-5'>Resorts and Luxury</h3>
              <p className='text-sm sm:text-base text-gray-500 mb-6 sm:mb-8 leading-7'>The Maldives is synonymous with luxury, offering some of the world’s most opulent resorts, each designed to offer the ultimate escape from the everyday. Whether you’re staying in a secluded beachfront villa or an iconic overwater bungalow, every moment here is one of pure relaxation.</p>
              <p className='text-sm sm:text-base text-gray-500 leading-7'>At Travel Nation, we partner with handpicked resorts that cater to all types of travelers — from honeymooners seeking romance and privacy to families looking for a fun-filled escape. Each resort offers personalized service, gourmet dining, and private pools, along with spa retreats set against breathtaking ocean backdrops.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center sm:my-20">
        <div className="flex justify-center items-center bg-soft-beige h-full">
          <div className='p-5 sm:p-12'>
            <h3 className='text-shadow-wash text-3xl sm:text-4xl md:text-5xl font-semibold font-playfair-display my-5'>Our Featured Resorts Offer Experiences Like</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10 px-5 sm:px-10'>
              {
                destination_3.map((item) => (
                  <div key={item.id} className='flex flex-col gap-y-2 items-center justify-center'>
                    {
                      item.image ? <Image src={item.image} alt={item.title} height={50} width={50} /> : null
                    }

                    <h4 className='text-lg sm:text-xl font-semibold text-shadow-wash'>{item.title}</h4>
                    <p className='text-center text-gray-500 text-sm sm:text-base'>{item.description}</p>
                  </div>
                ))
              }

            </div>
          </div>
        </div>
        <ImageSlider heroData={destinationImages_3} height="h-96 lg:h-full xl:h-[680px]" />
      </div>

      <div className='px-5 md:px-8 xl:px-40'>
        {/* section 5 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center max-w-7xl mx-auto my-10 sm:my-20">
          <div className="order-2 lg:order-1 h-full">
            <ImageSlider heroData={destinationImages_4} height="h-96 lg:h-full xl:h-[680px]" />
          </div>

          <div className="flex justify-center items-center bg-soft-beige h-full order-1 lg:order-2">
            <div className='p-6 sm:p-12'>
              <p className='text-shadow-wash text-lg uppercase font-medium'>Beaches</p>
              <h3 className='text-shadow-wash text-3xl sm:text-4xl md:text-5xl font-semibold font-playfair-display my-5'>Where Serenity <br /> Meets Beauty</h3>
              <p className='text-sm sm:text-base  text-gray-500 mb-8 leading-6'>The Maldives boasts some of the most beautiful beaches in the world. Each island in the Maldives is a haven of white sand, surrounded by crystal-clear lagoons. Imagine long walks on sun-drenched shores, where the only sound is the gentle lapping of waves, and the sunsets light up the sky in shades of pink and gold.</p>
              <p className='text-sm sm:text-base  text-gray-500 leading-6'>Whether you&apos;re looking for the perfect spot to relax with a good book, or you want to snorkel just off the shore, the beaches in the Maldives promise pure serenity. At Travel Nation, we make sure you experience the best of these beaches, with quiet, private stretches of sand where you can unwind in total seclusion.</p>
            </div>
          </div>
        </div>
        {/* section 6 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-7xl mx-auto sm:my-16">
          <div className="flex justify-center items-center">
            <div className='pr-2'>
              <p className='text-sea-green text-lg uppercase font-medium'>Diving</p>
              <h3 className='text-sea-green text-3xl sm:text-4xl md:text-6xl font-semibold font-playfair-display my-5'>A World Beneath the Surface</h3>
              <p className='text-sm sm:text-base text-gray-500 mb-4 leading-7'>For divers and marine enthusiasts, the Maldives is a dream come true. The surrounding coral reefs teem with marine life, offering some of the best diving and snorkeling spots in the world. Explore underwater caves, swim with manta rays, encounter gentle whale sharks, and witness vibrant coral gardens..</p>
              <div className='flex flex-col gap-y-6 sm:pl-8 py-4'>
                <div className='flex gap-x-4'>
                  <div className='w-8 h-8'>
                    <IoCheckmarkDoneSharp className="text-sea-green text-lg" />
                  </div>
                  <div className='text-sm sm:text-base text-shadow-wash'>
                    <strong>Baa Atoll&apos;s Hanifaru Bay &mdash; </strong>A UNESCO Biosphere Reserve famous for its seasonal gatherings of manta rays and whale sharks.
                  </div>
                </div>
                <div className='flex gap-x-4'>
                  <div className='w-8 h-8'>
                    <IoCheckmarkDoneSharp className="text-sea-green text-lg" />
                  </div>
                  <div className='text-sm sm:text-base text-shadow-wash'>
                    <strong>NAri Atoll – </strong>Known for its crystal-clear waters and vibrant reefs, Ari Atoll offers encounters with reef sharks, turtles, and schools of tropical fish.
                  </div>
                </div>
                <div className='flex gap-x-4'>
                  <div className='w-8 h-8'>
                    <IoCheckmarkDoneSharp className="text-sea-green text-lg" />
                  </div>
                  <div className='text-sm sm:text-base text-shadow-wash'>
                    <strong>Vaavu Atoll&nbsp;s Fotteyo Kandu – </strong>One of the Maldives’ top diving destinations, with its spectacular underwater caves, swim-throughs, and stunning coral formations.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ImageSlider heroData={destinationImages_5} height="h-96 lg:h-full xl:h-[680px]" />
        </div>
        {/* section 7 */}
        <div className='py-10'>
          <p className='text-sea-green text-lg uppercase font-medium text-center'>Atolls and Islands</p>
          <h3 className='text-sea-green text-3xl sm:text-4xl md:text-6xl font-semibold font-playfair-display my-5 text-center'>A Unique Experience in Every Region</h3>
          <p className='text-base text-gray-500 mb-4 leading-7 text-center'>Each atoll in the Maldives has its own unique character, offering something different to every traveler. Here&nbsp;s a glimpse of <br /> some of the top atolls and islands we explore at Travel Nation</p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 py-6">
            {atollData.map((atoll) => (
              <AtollCard
                key={atoll.id}
                image={atoll.image}
                title={atoll.title}
                description={atoll.description}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center sm:my-20 max-sm:p-4">
        <ImageSlider heroData={destinationImages_6} height="h-96 lg:h-full xl:h-[480px]" />
        <div className="h-full max-sm:py-4">
          <div className='flex flex-col justify-between h-full sm:pl-8'>
            <div className='flex flex-col gap-y-2 max-sm:py-3'><p className='text-sea-green text-lg uppercase font-medium'>Maldives</p>
              <h3 className='text-sea-green text-3xl sm:text-4xl md:text-6xl font-semibold font-playfair-display'>Your Maldives Experience with Travel Nation</h3>
            </div>
            <p className='text-sm sm:text-base text-gray-500 mb-4 leading-7 pr-4'>At Travel Nation, we specialize in curating personalized Maldives experiences that reflect your unique travel style. Whether you&apos;re looking for a private escape on a hidden island or a lavish stay at a world-class resort, we ensure your Maldives journey is seamless and unforgettable. From diving into vibrant coral reefs to relaxing on pristine beaches, our tailor-made itineraries give you the chance to experience the Maldives in a way that&apos;s just right for you.</p>
            <button type='button' onClick={handleScrollToGetaways} className="w-fit text-white bg-sea-green py-4 px-8 transition-all duration-300 hover:bg-gradient-to-r hover:from-sea-green hover:to-emerald-400 hover:scale-105 font-medium uppercase text-sm cursor-pointer">Getaways</button>
          </div>
        </div>
      </div>
    </>

  )
}

export default MaldivesOverview




