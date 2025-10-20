
import { Hero6, MaldivesHero } from '@/lib/utils/staticImages'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Destinations = () => {
    return (
        <div className='flex flex-col md:pb-20'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <Image src={MaldivesHero} height={500} width={500} alt='maldives' className='w-full h-auto' />
                <div className='bg-soft-beige p-6 flex justify-center items-center flex-col md:px-28'>
                    <div className='space-y-6 md:space-y-10'>
                        <h3 className='text-sea-green text-4xl md:text-5xl font-semibold font-work-sans'>Luxury Travel in the <br /> Maldives</h3>
                        <p className='text-base md:text-lg text-gray-500'>In the Maldives, we offer exclusive stays at world-renowned resorts, where you can dive into crystal-clear waters, unwind in overwater villas, and indulge in rejuvenating spa treatments against a backdrop of endless ocean views. Whether it&apos;s an idyllic honeymoon or a family getaway, we tailor every moment to your desires.</p>
                        <Link href="#" className="text-white bg-sea-green py-4 px-8 border border-white transition-all duration-300 hover:bg-gradient-to-r hover:from-sea-green hover:to-emerald-400 hover:scale-105 font-medium">
                            View Destinations
                        </Link>
                    </div>
                </div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='bg-soft-beige p-6 flex md:justify-center md:items-center flex-col md:px-28'>
                    <div className='space-y-6 md:space-y-10'>
                        <h3 className='text-sea-green text-4xl md:text-5xl font-semibold font-work-sans'>Discover the Beauty <br /> of Sri Lanka</h3>
                        <p className='text-lg text-gray-500'>In Sri Lanka, we introduce you to a land of rich heritage, breathtaking landscapes, and unmatched hospitality. Explore ancient temples, hike through mist-covered mountains, and witness wildlife up close in one of the world&apos;s top safari destinations. With Travel Nation, every journey is a seamless fusion of adventure and relaxation, offering personalized tours that cater to all tastes — from serene wellness retreats to adrenaline-pumping escapades.</p>
                        <Link href="#" className="text-white bg-sea-green py-4 px-8 border border-white transition-all duration-300 hover:bg-gradient-to-r hover:from-sea-green hover:to-emerald-400 hover:scale-105 font-medium">
                            View Destinations
                        </Link>
                    </div>
                </div>
                <Image src={Hero6} height={500} width={500} alt='maldives' className='w-full h-auto' />

            </div>
        </div>
    )
}

export default Destinations