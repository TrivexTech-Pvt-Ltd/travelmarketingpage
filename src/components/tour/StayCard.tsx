import { thousandSeparator } from '@/lib/helper';
import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface StayCardProps {
    image: StaticImageData;
    name: string;
    threeNightPrice: number;
    fourNightPrice: number;
    nightCount: number
}

const StayCard = ({ image, name, threeNightPrice, fourNightPrice, nightCount }: StayCardProps) => {
    return (
        <div className="relative w-full h-[450px] overflow-hidden shadow-lg group">
            {/* Background Image */}
            <Image
                src={image}
                alt="Water Villa with Pool + Slide"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/45 group-hover:bg-black/50 transition-colors duration-300" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
                <p className="text-lg tracking-widest mb-2">{nightCount} NIGHT</p>
                <h3 className="text-4xl font-medium font-work-sans leading-tight mb-8">
                    {name.split("\n").map((line: string, i: number) => (
                        <span key={i} className="block">
                            {line}
                        </span>
                    ))}
                </h3>
                <p className="text-4xl font-work-sans font-medium mb-12">$ {nightCount === 3 ? thousandSeparator(threeNightPrice) : thousandSeparator(fourNightPrice)}</p>
                <button className="hidden bg-sea-green px-6 py-3 text-white font-medium border border-transparent rounded-md hover:bg-transparent hover:border-white transition-all">
                    VIEW ROOM
                </button>
            </div>
        </div>
    )
}

export default StayCard