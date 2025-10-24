import MaldivesDestination from '@/components/destination/MaldivesDestination'
import Hero from '@/components/home/Hero'
import { maldivesHeroData } from '@/lib/utils/data'

const Maldives = () => {
    return (
        <>
            <Hero heroData={maldivesHeroData} height='lg:min-h-[80vh]' />
            <MaldivesDestination />
        </>
    )
}

export default Maldives