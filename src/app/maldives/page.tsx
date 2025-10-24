import MaldivesDestination from '@/components/destination/MaldivesDestination'
import Hero from '@/components/home/Hero'
import Tabs from '@/components/ui/Tabs'
import { maldivesHeroData } from '@/lib/utils/data'
import React from 'react'

const Maldives = () => {
    return (
        <>
            <Hero heroData={maldivesHeroData} height='lg:min-h-[80vh]' />
            <MaldivesDestination />
        </>
    )
}

export default Maldives