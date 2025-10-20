import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface SectionData {
    title: string;
    description: string;
    image: StaticImageData;
}

interface Props {
    activities?: SectionData;
}

const ActivitiesTab = ({ activities }: Props) => {
    if (!activities) return null
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-md">
                <Image
                    src={activities.image}
                    alt={activities.title}
                    fill
                    className="object-cover object-center"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="space-y-6 order-2 md:order-1">
                <h2 className="text-4xl font-semibold text-black font-work-sans">
                    {activities.title}
                </h2>
                <p className="text-gray-500 leading-relaxed whitespace-pre-line text-lg">
                    {activities.description}
                </p>
            </div>
        </div>
    )
}

export default ActivitiesTab