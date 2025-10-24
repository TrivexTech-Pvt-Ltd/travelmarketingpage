"use client"
import { useEffect } from 'react';
import { getSriLankanBySlug } from '@/lib/utils/hotel';
import { useSLTourPackageStore } from '@/store/TourPackageStore';
import TourHeroSl from './TourHeroSl';
import Container from '../Container';
import TourItinerary from './TourItinerary';
import RoomCategories from './RoomCategories';

const TourDetailsSriLanka = ({ slug }: { slug: string }) => {
    const packageData = getSriLankanBySlug(slug);
    const setPackageData = useSLTourPackageStore(s => s.setPackage);
    console.log("packageData",packageData);

    useEffect(() => {
        setPackageData(packageData)
    }, [slug, setPackageData])
    return (
        <div className='bg-light-cyan'>
            <div className='pt-20'>
                <TourHeroSl />
            </div>
            <TourItinerary />
            <Container>
                <RoomCategories />
            </Container>

        </div>
    )
}

export default TourDetailsSriLanka