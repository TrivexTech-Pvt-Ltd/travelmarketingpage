import Image from 'next/image'
import ImageSlider from './ui/ImageSlider'
import { aboutUsData, ourMissionData, ourValuesData } from '@/utils/data'
import { Hero6, OurStory } from '@/utils/staticImages'
import TravelServices from './ui/TravelServices'

const AboutUs = () => {
    return (
        <>
            <div className='pt-24'>
                <ImageSlider heroData={aboutUsData} height="h-96 md:h-[420px]" />
            </div>
            <div className='flex flex-col justify-center items-center max-w-7xl mx-auto max-sm:px-4 py-4 sm:py-10'>
                <h1 className='text-sea-green text-3xl sm:text-4xl md:text-6xl font-semibold font-playfair-display my-5'>About Travel Nation</h1>
                <p className='text-sm sm:text-base text-gray-500 leading-7 text-center'>At Travel Nation, we believe that travel is more than just visiting a new destination – it&apos;s about experiencing the world in a way that transforms you. Founded with a passion for exploring the vibrant cultures and breathtaking landscapes of the Maldives and Sri Lanka, our mission is to bring these incredible destinations closer to you, with bespoke journeys tailored to your needs and dreams.</p>
            </div>
            <div className='flex flex-col my-10'>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center max-w-7xl mx-auto">
                    <Image src={OurStory} height={500} width={500} alt='maldives' className='w-full h-full' />
                    <div className='bg-soft-beige p-6 flex justify-center items-center flex-col lg:px-12 2xl:px-28'>
                        <div className='space-y-6 md:space-y-10 max-xl:mb-5'>
                            <h3 className='text-shadow-wash text-3xl sm:text-4xl md:text-5xl font-semibold font-playfair-display'>Our Story</h3>
                            <p className='text-sm sm:text-base text-gray-500 leading-7'>Travel Nation was born out of a simple idea: to create travel experiences that leave a lasting impact. What began as a small, dedicated team with a shared love for adventure has grown into a trusted travel company that specializes in two of the world’s most iconic destinations. With years of experience in the travel industry and a deep connection to the Maldives and Sri Lanka, we’ve made it our goal to provide unique, meaningful experiences for every traveler who chooses us.</p>
                            <p className='text-sm sm:text-base text-gray-500 leading-7'>Our founders, having explored every hidden gem and luxurious escape these countries offer, built Travel Nation with one goal in mind – to help others discover the magic that lies within these lands, whether through sun-kissed island getaways or rich cultural expeditions.</p>
                        </div>
                    </div>

                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className='bg-soft-beige p-6 flex md:justify-center md:items-center flex-col lg:px-8 2xl:px-28 order-2 lg:order-1'>
                        <div className='space-y-6 md:space-y-10 max-xl:mb-5'>
                            <h3 className='text-shadow-wash text-3xl sm:text-4xl md:text-5xl font-semibold font-playfair-display my-5'>Our Mission</h3>
                            <p className='text-sm sm:text-base text-gray-500 leading-7'>Our mission is simple: to craft authentic, personalized travel experiences that bring out the very best of the Maldives and Sri Lanka. We believe in curating journeys that blend luxury, adventure, culture, and nature in perfect harmony, ensuring every trip is as unique as our clients</p>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10'>
                                {
                                    ourMissionData.map((item) => (
                                        <div key={item.id} className='flex flex-col gap-y-2 items-center justify-center'>
                                            {
                                                item.image ? <Image src={item.image} alt={item.title} height={50} width={50} /> : null
                                            }

                                            <h4 className='text-lg sm:text-xl font-semibold text-shadow-wash'>{item.title}</h4>
                                            <p className='text-center text-gray-500 text-sm'>{item.description}</p>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                    <div className='lg:order-2 order-1 h-full'>
                        <Image src={Hero6} height={500} width={500} alt='maldives' className='w-full h-full' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center max-w-7xl mx-auto pb-10 sm:pb-20'>
                <h1 className='text-sea-green text-3xl sm:text-4xl md:text-6xl font-semibold font-playfair-display my-5'>Our Values</h1>
                <p className='text-sm sm:text-base text-gray-500 leading-7 text-center max-sm:px-4'>Rooted in integrity and inspired by exploration, our values shape the way we curate every trip — ensuring each traveler experiences the world with comfort, purpose, and wonder.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-10 px-5 sm:px-10 py-6'>
                    {
                        ourValuesData.map((item) => (
                            <div key={item.id} className='flex flex-col gap-y-2 items-center justify-center'>
                                {
                                    item.image ? <Image src={item.image} alt={item.title} height={50} width={50} /> : null
                                }

                                <h4 className='text-lg sm:text-xl font-semibold text-sea-green'>{item.title}</h4>
                                <p className='text-center text-gray-500 text-sm'>{item.description}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
            <TravelServices/>
        </>
    )
}

export default AboutUs