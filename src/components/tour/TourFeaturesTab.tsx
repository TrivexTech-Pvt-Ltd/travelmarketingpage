"use client"
import React, { useState } from 'react'
import {
    Star,
    Bed,
    Utensils,
    Heart,
    Activity,
    MapPin
} from "lucide-react";
import Image from 'next/image';
import { useTourPackageStore } from '@/store/TourPackageStore';
import { Highlights } from '@/lib/utils/staticImages';
import { LuCircleCheckBig } from 'react-icons/lu';
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
    return (
        <div className='max-w-7xl mx-auto my-16'>
            <div className="grid grid-cols-6 gap-3">
                {featuresTabData.map(({ id, name, icon: Icon }) => (
                    <button
                        type='button'
                        key={id}
                        className={`px-4 py-3 rounded-sm flex items-center gap-2 transition cursor-pointer ${id === tabIndex ? 'bg-white text-sea-green' : 'bg-sea-green text-white hover:bg-sea-green/85'}`}
                        onClick={() => setTabIndex(id)}
                    >
                        <Icon size={18} />
                        {name}
                    </button>
                ))}
            </div>
            <div className='my-8'>
                {
                    tabIndex === "highlight" ? <HighlightTab highlightedList={data?.resortHighlights}/>
                     :
                        tabIndex === "accommodation" ? <AccommodationTab data={data?.accommodation}/> :
                            tabIndex === "dining" ? <DiningTab dinings={data?.dinings}/> :
                                tabIndex === "wellness" ? <WellnessTab wellnessSpa={data?.wellnessSpa}/> :
                                    tabIndex === "activities" ? <ActivitiesTab activities={data?.activities}/> :
                                        tabIndex === "map" ? <MapTab data={data?.direction}/> : null
                }
            </div>
        </div>


    )
}

export default TourFeaturesTab