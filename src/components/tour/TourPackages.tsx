import { MaldivesData, srilankanData } from '@/lib/utils/data'
import React from 'react'
import PackageCard from '../ui/PackageCard'
import Image from 'next/image'
import { PlaneShape } from '@/lib/utils/staticImages'

const TourPackages = () => {
    return (
        <>
        <div className='px-5 md:px-8 xl:px-40 bg-[#f8f8f8] my-10 py-12'>
            <h3 className='text-5xl text-center pt-10 font-work-sans text-sea-green font-semibold mb-2'>Maldives Gateways</h3>
            <p className='text-base text-gray-500 font-medium text-center mb-4'>Escape to paradise where turquoise waters, luxury, <br /> and adventure come together for an unforgettable experience.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-4 relative">
                <Image src={PlaneShape} alt='shape' width={420} height={420} priority className='absolute right-0 top-0' />
                {MaldivesData.map((card) => (
                    <PackageCard key={card.name} {...card} />
                ))}
            </div>
        </div>
        <div className='px-5 md:px-8 xl:px-40 my-10 py-12'>
            <h3 className='text-5xl text-center pt-10 font-work-sans text-sea-green font-semibold mb-2'>Sri Lanka Journeys</h3>
            <p className='text-base text-gray-500 font-medium text-center mb-4'>Experience the highlights of this emerald island nation on a luxury <br/> 10-day Classic Sri Lanka journey.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-4 relative">
                <Image src={PlaneShape} alt='shape' width={420} height={420} priority className='absolute right-0 top-0' />
                {srilankanData.map((card) => (
                    <PackageCard key={card.name} {...card} />
                ))}
            </div>
        </div>
        </>
        

    )
}

export default TourPackages