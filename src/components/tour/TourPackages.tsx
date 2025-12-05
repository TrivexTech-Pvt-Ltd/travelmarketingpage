"use client"
import { tourPackagesCardData } from '@/utils/data';
import PackageCard from '../ui/PackageCard';
import { useState } from 'react';

const TourPackages = () => {
    const [showAll, setShowAll] = useState<boolean>(false);
    const [collapsingIds, setCollapsingIds] = useState<string[]>([]);
    const visibleTrips = showAll ? tourPackagesCardData : tourPackagesCardData.slice(0, 6);


    const handleSeeMore = () => {
        setShowAll(true);
    };

    const handleSeeLess = () => {
        // mark items 7+ as collapsing
        const idsToCollapse = tourPackagesCardData.slice(6).map(t => t.id);
        setCollapsingIds(idsToCollapse);

        // wait for animation before removing them
        setTimeout(() => {
            setShowAll(false);
            setCollapsingIds([]);
        }, 400); // match fade-out duration
    };

    return (
        <div className='px-5 md:px-8 xl:px-20 2xl:px-40 py-5 sm:py-12'>
            <h3 className='text-3xl md:text-4xl lg:text-5xl text-center pt-10 font-playfair-display text-sea-green font-semibold mb-4 uppercase'>Be moved by the journey</h3>
            <p className='text-base text-gray-500 font-medium text-center mb-4'>Travel becomes memorable when it feels personal. With Travel Nation, <br /> your itinerary is curated from local insight and thoughtful care. <br /> You will step into places that travellers rarely see and gather stories <br /> that stay with you long after the bags are unpacked.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-4 relative">
                {visibleTrips.map((tour, index) => {
                    const isFadeIn = showAll && index >= 6;
                    const isFadeOut = collapsingIds.includes(tour.id);

                    return (
                        <div
                            key={tour.id}
                            className={
                                isFadeOut
                                    ? "fade-out"
                                    : isFadeIn
                                        ? "fade-in"
                                        : ""
                            }
                        >
                            <PackageCard key={tour.id} {...tour} />
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-center mt-10">
                {!showAll && tourPackagesCardData.length > 6 && (
                    <button
                        onClick={handleSeeMore}
                        className="text-white cursor-pointer text-sm bg-sea-green py-3 px-6 sm:py-4 mx-auto sm:px-8 transition-all duration-300 hover:bg-gradient-to-r hover:from-sea-green hover:to-emerald-400 hover:scale-105 font-medium"
                    >
                        View all Itineraries
                    </button>
                )}

                {showAll && (
                    <button
                        onClick={handleSeeLess}
                        className="text-white cursor-pointer text-sm bg-sea-green py-3 px-6 sm:py-4 mx-auto sm:px-8 transition-all duration-300 hover:bg-gradient-to-r hover:from-sea-green hover:to-emerald-400 hover:scale-105 font-medium"
                    >
                        View Less
                    </button>
                )}
            </div>
        </div>
    )
}

export default TourPackages