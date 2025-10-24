import TourDetailsSriLanka from '@/components/tour/TourDetailsSriLanka'
import React from 'react'

const SriLankanHotelsDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params
    return (
        <TourDetailsSriLanka slug={slug}/>
    )
}

export default SriLankanHotelsDetails