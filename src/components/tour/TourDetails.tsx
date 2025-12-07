"use client"
import { useEffect } from 'react'
import TourHero from './TourHero'
import Container from '../Container'
import { getMaldivesHotelBySlug } from '@/utils/hotel'
import { useTourPackageStore } from '@/store/TourPackageStore'
import DetailsHeader from './DetailsHeader'
import TourFeaturesTab from './TourFeaturesTab'
import FeaturedHotels from './FeaturedHotels'
import FooterNote from '../destination/FooterNote'
import Testimonials from '../ui/Testimonials'

const TourDetails = ({ slug }: { slug: string }) => {

    const packageData = getMaldivesHotelBySlug(slug);
    const setPackageData = useTourPackageStore(s => s.setPackage);

    useEffect(() => {
        setPackageData(packageData)
    }, [packageData, setPackageData])

    return (
        <>
            <TourHero />
            <Container>
                <DetailsHeader />
                <TourFeaturesTab />
                <FooterNote />
                <Testimonials />
                <FeaturedHotels />
            </Container>
        </>
    )
}

export default TourDetails