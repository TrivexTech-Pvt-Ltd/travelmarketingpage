"use client"
import { thousandSeparator } from '@/lib/helper'
import { useTourPackageStore } from '@/store/TourPackageStore'
import Image from 'next/image'
import React from 'react'

const DetailsHeader = () => {
    const data = useTourPackageStore(s => s.tourPackage)
    if (!data) return null;
    return (
        <div className='flex flex-col lg:flex-row md:justify-center md:items-center gap-8 md:gap-16 my-5 max-w-7xl mx-auto'>
            {data?.logo && (
                <div className='flex-shrink-0'>
                    <Image src={data.logo} alt={data.name} width={200} height={200} className='max-sm:mx-auto' />
                </div>
            )}
            <div className='text-lg text-gray-500 flex-1 max-sm:text-center'>
                {data?.descriptionLong}
            </div>
            <div className="flex-shrink-0 max-sm:mx-auto">
                <div className='space-y-3 max-sm:mx-auto'>
                    <p className='text-lg text-gray-500 uppercase'>PER ROOM STARTING</p>
                    <p className='text-5xl text-sea-green font-medium'>$ {thousandSeparator(data?.price)}</p>
                </div>
            </div>

        </div>
    )
}

export default DetailsHeader