import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface AtollCardProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const AtollCard = ({ image, title, description }: AtollCardProps) => {
  return (
    <div className="bg-white shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="relative w-full h-56">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-shadow-wash text-center">{title}</h2>
        <p className="text-gray-500 mt-2 text-sm sm:text-base text-center leading-7">{description}</p>
      </div>
    </div>
  )
}

export default AtollCard