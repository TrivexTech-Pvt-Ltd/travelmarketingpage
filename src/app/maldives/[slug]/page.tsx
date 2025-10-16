import Container from '@/components/Container'
import { MaldivesData } from '@/lib/utils/data'
import { getMaldivesHotelBySlug } from '@/lib/utils/hotel'
import React from 'react'

const MaldivesHotelsDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params

    const packageData = getMaldivesHotelBySlug(slug)
    console.log("packageData", packageData);

    const featuredHotelsData = MaldivesData.filter(x => packageData?.featuredHotels?.includes(x.id));
    console.log(featuredHotelsData)

    return (
        <Container>
            <h1>{JSON.stringify(featuredHotelsData)}</h1>
        </Container>
    )
}

export default MaldivesHotelsDetails