import MaldivesDestination from '@/components/destination/MaldivesDestination'
import Hero from '@/components/home/Hero'
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