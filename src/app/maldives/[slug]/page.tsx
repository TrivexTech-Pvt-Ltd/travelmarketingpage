
import TourDetails from '@/components/tour/TourDetails'
import React from 'react'

const MaldivesHotelsDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params


    // const featuredHotelsData = MaldivesData.filter(x => packageData?.featuredHotels?.includes(x.id));
    // console.log(featuredHotelsData)

    return (
        <TourDetails slug={slug}/>
    )
}

export default MaldivesHotelsDetails