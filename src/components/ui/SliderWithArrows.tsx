"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useRef } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

type SliderWithArrowsProps = {
    images: StaticImageData[]
}

const SliderWithArrows = ({ images }: SliderWithArrowsProps) => {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);
    const swiperRef = useRef<any>(null);

    useEffect(() => {
        if (
            swiperRef.current &&
            swiperRef.current.params &&
            prevRef.current &&
            nextRef.current
        ) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.destroy(); // remove old
            swiperRef.current.navigation.init(); // init new
            swiperRef.current.navigation.update(); // update Swiper
        }
    }, []);

    return (
        <div className="relative w-full h-[450px] rounded-2xl overflow-hidden group">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, A11y]}
                slidesPerView={1}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                speed={800}
                loop={true}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className="w-full h-full"
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index} className="relative w-full h-full">
                        <Image
                            src={img}
                            alt={`accommodation_${index}`}
                            fill
                            className="object-cover object-center"
                            sizes="100vw"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <button
                type="button"
                ref={prevRef}
                aria-label="Previous"
                className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 z-10  text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                <BsArrowLeft size={36} />
            </button>

            <button
                type="button"
                ref={nextRef}
                aria-label="Next"
                className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 z-10 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110" >
                <BsArrowRight size={36} />
            </button>
        </div>
    )
}

export default SliderWithArrows