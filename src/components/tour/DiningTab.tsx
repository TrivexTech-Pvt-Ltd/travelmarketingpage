"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image, { StaticImageData } from "next/image";

interface Dining {
    name: string;
    description: string;
    images: StaticImageData[];
}

interface Props {
    dinings?: Dining[];
}

const DiningTab = ({ dinings }: Props) => {
    if (!dinings) return null;
    return (
        <div className="py-4">
            <h2 className="text-4xl font-medium text-black font-work-sans mb-10 text-center">
                Dining Experiences
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {dinings.map((dining, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl overflow-hidden flex flex-col"
                    >
                        <div className="relative w-full h-[300px]">
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay, A11y]}
                                slidesPerView={1}
                                autoplay={{ delay: 4000, disableOnInteraction: false }}
                                speed={800}
                                loop
                                className="w-full h-full"
                            >
                                {dining.images.map((img, idx) => (
                                    <SwiperSlide key={idx} className="relative w-full h-full">
                                        <Image
                                            src={img}
                                            alt={dining.name}
                                            fill
                                            className="object-cover object-center"
                                            sizes="100vw"
                                        />
                                        <div className="absolute inset-0 bg-black/20" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl font-medium text-sea-green mb-3">
                                {dining.name}
                            </h3>
                            <p className="text-gray-500 flex-grow">{dining.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DiningTab