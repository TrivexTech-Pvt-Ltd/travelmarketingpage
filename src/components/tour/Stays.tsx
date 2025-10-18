"use client"
import { useTourPackageStore } from '@/store/TourPackageStore'
import React, { useState } from 'react'
import { RiHotelBedFill } from 'react-icons/ri'
import StayCard from './StayCard'

const Stays = () => {
    const [nightCount, setNightCount] = useState<number>(3)
    const data = useTourPackageStore(s => s.tourPackage)
    return (
        <div className='max-w-7xl mx-auto my-16'>
            <ul className="grid grid-cols-2">
                <li className={`py-4  font-medium flex justify-center cursor-pointer ${nightCount === 3 ? 'bg-sea-green text-white' : 'text-sea-green bg-white'}`} onClick={() => setNightCount(3)}>
                    <span className='flex items-center gap-x-3 text-lg'><RiHotelBedFill />  3 Nights </span>
                </li>
                <li className={`py-4  font-medium flex justify-center cursor-pointer ${nightCount === 4 ? 'bg-sea-green text-white' : 'text-sea-green bg-white'}`} onClick={() => setNightCount(4)}>
                    <span className='flex items-center gap-x-3 text-lg'><RiHotelBedFill />  4 Nights </span>
                </li>
            </ul>
            <div className='grid md:grid-cols-3 gap-6 py-8'>
                {
                    data?.stays.map((item, index) => (
                        <StayCard key={index} name={item.name} image={item.image} threeNightPrice={item.threeNightPrice} fourNightPrice={item.fourNightPrice} nightCount={nightCount} />
                    ))
                }

            </div>
        </div>
    )
}

export default Stays