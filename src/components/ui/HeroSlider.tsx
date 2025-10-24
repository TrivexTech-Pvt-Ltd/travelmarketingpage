"use client"
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image, { StaticImageData } from 'next/image';

interface HeroSliderProps {
    images: StaticImageData[],
    country: string;
    title: string;
    height: string;
    link: string;
}

const HeroSlider = () => {
    return (
        <div className="relative w-full h-[600px]">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                slidesPerView={1}
                navigation={false}
                className="absolute inset-0 w-full h-full"
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                speed={1000}
                loop={true}
            >
                {packageData?.heroImages.map((image, index) => (
                    <SwiperSlide key={index} className="relative w-full h-full">
                        <Image
                            src={image}
                            alt={`hero-${index}`}
                            fill
                            sizes="100vw"
                            className="object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <motion.div
                className="absolute z-20 text-white text-center space-y-6 px-4"
                initial={{ y: 170, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 1.6, ease: "easeOut" }}
                key={activeSlide}
            >
                <h4 className="text-2xl tracking-wide uppercase">{country}</h4>

                <h1 className="text-4xl sm:text-5xl md:text-7xl font-work-sans font-medium leading-tight">
                    {text.split("\n").map((line: string, i: number) => (
                        <span key={i} className="block">
                            {line}
                        </span>
                    ))}
                </h1>

                <Link
                    href="#"
                    className="text-white bg-sea-green py-4 px-8 rounded-4xl border border-white 
          transition-all duration-300 hover:bg-gradient-to-r hover:from-sea-green hover:to-emerald-400 hover:scale-105"
                >
                    Explore Our Tours
                </Link>
            </motion.div>
        </div>
    )
}

export default HeroSlider