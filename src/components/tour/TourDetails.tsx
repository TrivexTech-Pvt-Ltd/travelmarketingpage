"use client"
import { useEffect } from 'react'
import TourHero from './TourHero'
import Container from '../Container'
import { getMaldivesHotelBySlug } from '@/utils/hotel'
import { useTourPackageStore } from '@/store/TourPackageStore'
import DetailsHeader from './DetailsHeader'
import TourFeaturesTab from './TourFeaturesTab'
import FeaturedHotels from './FeaturedHotels'

const TourDetails = ({ slug }: { slug: string }) => {

    const packageData = getMaldivesHotelBySlug(slug);
    const setPackageData = useTourPackageStore(s => s.setPackage);

    useEffect(() => {
        setPackageData(packageData)
    }, [packageData, setPackageData])

    return (
        <div className='bg-light-cyan'>
            <div className='pt-20'>
                <TourHero />
            </div>
            <Container>
                <DetailsHeader />
                <TourFeaturesTab />
                <FeaturedHotels />
            </Container>
        </div>
    )
}

export default TourDetails