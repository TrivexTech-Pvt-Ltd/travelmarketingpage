"use client"
import { MaldivesData } from '@/lib/utils/data';
import { useTourPackageStore } from '@/store/TourPackageStore'
import React from 'react'
import PackageCard from '../ui/PackageCard';

const FeaturedHotels = () => {
    const data = useTourPackageStore(s => s.tourPackage);
    const featuredHotelsData = MaldivesData.filter(x => data?.featuredHotels?.includes(x.id));
    console.log(featuredHotelsData, 'featuredHotelsData')
    if (!data) return null
    return (
        <div className='max-w-7xl mx-auto py-16'>
            <h3 className='text-3xl text-sea-green font-semibold font-work-sans'>You May Also Like</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-4">
                {
                    featuredHotelsData.map((hotel, index) => (
                        <PackageCard key={index} country='maldives' {...hotel} isFeatured={true} />
                    ))

                }
            </div>
        </div>
    )
}

export default FeaturedHotels