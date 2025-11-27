import MaldivesDestination from '@/components/destination/MaldivesDestination'
import HeroImage from '@/components/home/HeroImage'
import { maldivesHeroData } from '@/utils/data'
import { maldivesDestHeroData } from '@/utils/maldivesData'

const Maldives = () => {
    return (
        <>
            <HeroImage heroData={maldivesDestHeroData} height='lg:min-h-[80vh]' />
            <MaldivesDestination />
        </>
    )
}

export default Maldives