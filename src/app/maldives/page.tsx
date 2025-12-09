import MaldivesDestination from '@/components/destination/MaldivesDestination'
import Hero from '@/components/home/Hero'
import HeroImage from '@/components/home/HeroImage'
import { maldivesHeroData } from '@/utils/data'
import { maldivesDestHeroData } from '@/utils/maldivesData'

const Maldives = () => {
    return (
        <>
            <Hero heroData={maldivesDestHeroData} height="lg:min-h-[80vh]" />
            <MaldivesDestination />
        </>
    )
}

export default Maldives