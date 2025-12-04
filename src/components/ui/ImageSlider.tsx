"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ImageSliderType } from "@/types/hero.types";

interface ImageSliderProps {
    heroData:ImageSliderType[],
    height:string;
}

const ImageSlider = ({heroData,height}:ImageSliderProps) => {
  return (
     <div className={`relative w-full ${height} overflow-hidden`}>
            <Swiper
              modules={[Navigation, Pagination, Autoplay, A11y]}
              slidesPerView={1}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              speed={800}
              loop={true}
              className="w-full h-full"
            >
              {heroData.map((img) => (
                <SwiperSlide key={img.id} className="relative w-full h-full">
                  <Image
                    src={img.image}
                    alt={`hero_${img.id}`}
                    fill
                    className="object-cover object-center"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
  )
}

export default ImageSlider