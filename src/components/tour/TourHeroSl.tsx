"use client"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useSLTourPackageStore } from '@/store/TourPackageStore';
import Image from 'next/image';


const TourHeroSl = () => {
    const packageData = useSLTourPackageStore(s => s.tourPackage);
    if (!packageData?.heroImages) return null;
    return (
        <div className="relative w-full h-96 lg:h-full xl:h-[680px] 4xl:h-[1080px]">
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
        </div>
    )
}

export default TourHeroSl