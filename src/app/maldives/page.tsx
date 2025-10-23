import Hero from '@/components/home/Hero'
import Tabs from '@/components/ui/Tabs'
import { maldivesHeroData } from '@/lib/utils/data'
import React from 'react'

const Maldives = () => {
    return (
        <>
            <Hero heroData={maldivesHeroData} height='lg:min-h-[80vh]' />
            <Tabs />
        </>
    )
}

export default Maldives