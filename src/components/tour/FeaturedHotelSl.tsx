"use client"
import { slFeaturedHotels } from '@/utils/data';
import { useSLTourPackageStore } from '@/store/TourPackageStore';
import FeaturedHotelSlCard from './FeaturedHotelSlCard';

const FeaturedHotelSl = () => {
    const data = useSLTourPackageStore(s => s.tourPackage);
    const featuredHotelsData = slFeaturedHotels.filter(x => data?.featuredHotels?.includes(x.id));
    console.log("featuredHotelsData", featuredHotelsData)
    if (!data) return null
    return (
        <div className='max-w-7xl mx-auto py-5 sm:py-14'>
            <h3 className='text-3xl sm:text-4xl text-sea-green font-semibold font-playfair-display text-center my-4'>Our Featured Hotels</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-4">
                {
                    featuredHotelsData.map((hotel) => (
                        <FeaturedHotelSlCard key={hotel.id} {...hotel} />
                    ))
                }
            </div>
        </div>
    )
}

export default FeaturedHotelSl