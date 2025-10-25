import SriLankaDestination from '@/components/destination/SriLankaDestination'
import Hero from '@/components/home/Hero'
import { srilankaHeroData } from '@/utils/data'
import React from 'react'

const SriLanka = () => {
    return (
        <>
            <Hero heroData={srilankaHeroData} height='lg:min-h-[80vh]' />
            <SriLankaDestination />
        </>
    )
}

export default SriLanka