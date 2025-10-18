"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoCheckmarkDoneSharp } from "react-icons/io5";


interface Accommodation {
    name: string;
    area: string;
    pax: number;
    features: string[];
    images: StaticImageData[];
}

interface Props {
    data?: Accommodation;
}

const AccommodationTab = ({ data }: Props) => {
    if (!data) return null;
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto my-16">
            {/* LEFT — Image Slider */}
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay, A11y]}
                    slidesPerView={1}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    speed={800}
                    loop={true}
                    className="w-full h-full"
                >
                    {data.images.map((img, index) => (
                        <SwiperSlide key={index} className="relative w-full h-full">
                            <Image
                                src={img}
                                alt={data.name}
                                fill
                                className="object-cover object-center"
                                sizes="100vw"
                            />
                            <div className="absolute inset-0 bg-black/30" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* RIGHT — Info */}
            <div className="space-y-6">
                <h2 className="text-4xl font-medium font-work-sans text-black capitalize">{data.name}</h2>
                <div className="text-gray-600 space-y-2">
                    <p className="text-lg font-medium text-sea-green">{data.area}</p>
                    <p className="text-2xl font-semibold text-sea-green font-work-sans">{data.pax}&nbsp;People</p>
                </div>
                <div className="space-y-3">
                    <ul className="space-y-2">
                        {data.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-gray-500 text-lg">
                                <IoCheckmarkDoneSharp className="text-sea-green w-5 h-5" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AccommodationTab