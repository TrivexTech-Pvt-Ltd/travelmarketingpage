
import TourDetails from '@/components/tour/TourDetails'
import React from 'react'

const MaldivesHotelsDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params

    return (
        <TourDetails slug={slug}/>
    )
}

export default MaldivesHotelsDetails