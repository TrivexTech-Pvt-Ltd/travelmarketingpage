"use client"
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from "next/image";
import { useSLTourPackageStore } from '@/store/TourPackageStore';
import { A11y, Autoplay, Navigation } from 'swiper/modules';
import Modal from '../ui/Modal';
import Quotation from '../ui/Quotation';

const RoomCategories = () => {
    const data = useSLTourPackageStore(s => s.tourPackage);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    if (!data) return null;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto py-8 md:py-16">
            <div className="w-full h-[480px] md:h-[720px]">
                <Swiper
                    modules={[Navigation, Autoplay, A11y]}
                    slidesPerView={1}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    speed={800}
                    loop={true}
                    className="w-full h-full"
                >
                    {data.roomCategories.images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div className="w-full h-full">
                                <Image
                                    src={img}
                                    alt={`Slide ${index}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="bg-soft-beige flex flex-col items-center justify-center p-4 md:p-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-playfair-display mb-10 text-center text-shadow-wash">Pricing</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-16">
                    {data.roomCategories.pricings.map((item, index) => (
                        <div key={index} className="text-center">
                            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-shadow-wash font-playfair-display">{item.type}</h3>
                            <p className="text-sm sm:text-base text-gray-500 py-2">
                                From – ${item.price.toFixed(2)} Per Person
                            </p>
                        </div>
                    ))}
                </div>
                <p className="text-sm sm:text-base mt-10 italic text-gray-500">
                    ** Prices may vary depending on season.
                </p>
                <button onClick={() => setIsModalOpen(true)} type="button" className="cursor-pointer mt-10 px-8 py-3 bg-teal-700 text-white rounded-md uppercase tracking-wide hover:bg-teal-800 transition">
                    Inquire
                </button>
            </div>

            {/* Quotation Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Get a Quote"
            >
                <Quotation />
            </Modal>
        </div>
    )
}

export default RoomCategories