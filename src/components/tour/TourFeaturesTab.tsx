"use client"
import { useState } from 'react';
import {
    Star,
    Bed,
    Utensils,
    Heart,
    Activity,
    MapPin
} from "lucide-react";
import { useTourPackageStore } from '@/store/TourPackageStore';
import AccommodationTab from './AccommodationTab';
import DiningTab from './DiningTab';
import WellnessTab from './WellnessTab';
import ActivitiesTab from './ActivitiesTab';
import HighlightTab from './HighlightTab';
import MapTab from './MapTab';

export const featuresTabData = [
    {
        id: "highlight",
        name: "Highlight",
        icon: Star,
    },
    {
        id: "accommodation",
        name: "Accommodation",
        icon: Bed,
    },
    {
        id: "dining",
        name: "Dining",
        icon: Utensils,
    },
    {
        id: "wellness",
        name: "Wellness & SPA",
        icon: Heart,
    },
    {
        id: "activities",
        name: "Activities",
        icon: Activity,
    },
    {
        id: "map",
        name: "Map & Directions",
        icon: MapPin,
    },
];


const TourFeaturesTab = () => {
    const [tabIndex, setTabIndex] = useState<string>("highlight")
    const data = useTourPackageStore(s => s.tourPackage);
    if (!data) return null;
    return (
        <div className='max-w-7xl mx-auto my-16'>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-3">
                {featuresTabData.map(({ id, name, icon: Icon }) => (
                    <button
                        type='button'
                        key={id}
                        className={`px-2 lg:px-4 py-3 text-sm lg:text-base rounded-sm flex items-center gap-2 transition cursor-pointer ${id === tabIndex ? 'bg-white text-sea-green shadow-md' : 'bg-sea-green text-white hover:bg-sea-green/85'}`}
                        onClick={() => setTabIndex(id)}
                    >
                        <Icon size={18} />
                        {name}
                    </button>
                ))}
            </div>
            <div className="my-8">
                {"resortHighlights" in data ? (
                    <>
                        {tabIndex === "highlight" && (
                            <HighlightTab highlightedList={data.resortHighlights} />
                        )}
                        {tabIndex === "accommodation" && (
                            <AccommodationTab data={data.accommodation} />
                        )}
                        {tabIndex === "dining" && <DiningTab dinings={data.dinings} />}
                        {tabIndex === "wellness" && (
                            <WellnessTab wellnessSpa={data.wellnessSpa} />
                        )}
                        {tabIndex === "activities" && (
                            <ActivitiesTab activities={data.activities} />
                        )}
                        {tabIndex === "map" && <MapTab data={data.direction} />}
                    </>
                ) : (
                    null
                )}
            </div>
        </div>


    )
}

export default TourFeaturesTab