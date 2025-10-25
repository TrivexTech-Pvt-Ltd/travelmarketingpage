import Image, { StaticImageData } from 'next/image'
import React from 'react'

type FeaturedHotelSlCardProps = {
    image: StaticImageData,
    name: string,
    description: string
}

const FeaturedHotelSlCard = ({ image, name, description }: FeaturedHotelSlCardProps) => {
    return (
        <div className="bg-white rounded-xl overflow-hidden flex flex-col"  >
            <div className="relative w-full h-[300px]">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover object-center"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-medium text-sea-green mb-3 text-center">
                    {name}
                </h3>
                <p className="text-gray-500 flex-grow text-sm sm:text-base text-center">{description}</p>
            </div>


        </div>

        
    )
}

export default FeaturedHotelSlCard