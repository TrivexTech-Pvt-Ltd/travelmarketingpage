
import { Hero6, MaldivesHero } from '@/lib/utils/staticImages'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Destinations = () => {
    return (
        <div className='flex flex-col md:pb-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <Image src={MaldivesHero} height={500} width={500} alt='maldives' className='w-full h-full' />
                <div className='bg-soft-beige p-6 flex justify-center items-center flex-col lg:px-12 xl:px-28'>
                    <div className='space-y-6 md:space-y-10 max-xl:mb-5'>
                        <h3 className='text-sea-green text-3xl sm:text-4xl md:text-5xl font-semibold font-playfair-display'>Luxury Travel in the <br /> Maldives</h3>
                        <p className='text-sm sm:text-base text-gray-500 leading-7'>In the Maldives, we offer exclusive stays at world-renowned resorts, where you can dive into crystal-clear waters, unwind in overwater villas, and indulge in rejuvenating spa treatments against a backdrop of endless ocean views. Whether it&apos;s an idyllic honeymoon or a family getaway, we tailor every moment to your desires.</p>
                        <Link href="#" className="text-white text-sm bg-sea-green py-3 px-6 sm:py-4 sm:px-8 border border-white transition-all duration-300 hover:bg-gradient-to-r hover:from-sea-green hover:to-emerald-400 hover:scale-105 font-medium">
                            View Destinations
                        </Link>
                    </div>
                </div>

            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='bg-soft-beige p-6 flex md:justify-center md:items-center flex-col lg:px-12 xl:px-28 order-2 lg:order-1'>
                    <div className='space-y-6 md:space-y-10 max-xl:mb-5'>
                        <h3 className='text-sea-green text-3xl sm:text-4xl md:text-5xl font-semibold font-playfair-display'>Discover the Beauty <br /> of Sri Lanka</h3>
                        <p className='text-sm sm:text-base text-gray-500 leading-7'>In Sri Lanka, we introduce you to a land of rich heritage, breathtaking landscapes, and unmatched hospitality. Explore ancient temples, hike through mist-covered mountains, and witness wildlife up close in one of the world&apos;s top safari destinations. With Travel Nation, every journey is a seamless fusion of adventure and relaxation, offering personalized tours that cater to all tastes — from serene wellness retreats to adrenaline-pumping escapades.</p>
                        <Link href="#" className="text-white text-sm bg-sea-green py-3 px-6 sm:py-4 sm:px-8 border border-white transition-all duration-300 hover:bg-gradient-to-r hover:from-sea-green hover:to-emerald-400 hover:scale-105 font-medium">
                            View Destinations
                        </Link>
                    </div>
                </div>
                <div className='lg:order-2 order-1 h-full'>
                    <Image src={Hero6} height={500} width={500} alt='maldives' className='w-full h-full' />
                </div>


            </div>
        </div>
    )
}

export default Destinations