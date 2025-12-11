
import TourDetails from '@/components/tour/TourDetails'

const MaldivesHotelsDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params

    return (
        <TourDetails slug={slug}/>
    )
}

export default MaldivesHotelsDetails