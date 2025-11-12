"use client"
import { getMaldivesHotelBySlug } from '@/utils/hotel';
import React, { useState } from 'react'
import ImageSlider from '../ui/ImageSlider';
import { ImageSliderType } from '@/types/hero.types';
import HighlightTab from './HighlightTab';
import Modal from '../ui/Modal';
import Quotation from '../ui/Quotation';
import Link from 'next/link';

type RoomDetailsProps = {
    resort: string;
    room: string
}

const RoomDetails = ({ resort, room }: RoomDetailsProps) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const packageData = getMaldivesHotelBySlug(resort);
    const roomData = packageData?.accommodation.find((s) => s.slug === room);
    const images: ImageSliderType[] = (roomData?.images ?? []).map((img, index) => ({
        id: index + 1,
        image: img
    }));
    if (!roomData) return null;
    return (
        <div className='space-y-2'>
            <div className='pt-24'>
                <ImageSlider heroData={images} height="h-96 md:h-[480px]" />
            </div>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col gap-y-4 justify-center items-center pt-10'>
                    <h1 className='text-5xl text-black font-medium'>{roomData.name}</h1>
                    <p className='text-xl font-normal mb-0'>{packageData?.name}</p>
                    <p className='text-base font-semibold text-gray-500 mb-0'>{packageData?.location}</p>
                    <p className='text-lg py-10'>Total Area {roomData.area} / Guests:&nbsp;{roomData.paxChild === 0 ? `${roomData.paxAdult} adults` : `${roomData.paxAdult} adults or ${roomData.paxAdult} adults + ${roomData.paxChild} child`}</p>
                </div>
                <div className='pb-5'>
                    <HighlightTab highlightedList={roomData.features} map={roomData.floorPlan.path} highlightContent={roomData.roomDetails} isRoomDetails={true} />
                </div>
                <div className='flex flex-col gap-y-8 justify-center items-center pb-10'>
                    <button onClick={() => setIsModalOpen(true)} type='button' className="bg-sea-green cursor-pointer text-white px-16 py-3 rounded-md block w-fit hover:bg-transparent hover:text-sea-green border border-sea-green transition-all duration-300">
                        Request Now
                    </button>
                    <Link href={`/maldives/${packageData?.slug}`} className='underline hover:text-sea-green text-base'>{`Back to ${packageData?.name}`}</Link>
                </div>
            </div>
            {/* Modal */}
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

export default RoomDetails