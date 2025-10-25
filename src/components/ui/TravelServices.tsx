import { AlilaHero5, Hero3, Hero4, Hero5, Hero6, MVPHero3, NineArch, NooeHero4 } from '@/utils/staticImages'
import Image from 'next/image'
import React from 'react'

const TravelServices = () => {
    return (
        <div className='bg-light-gray'>
            <div className='grid grid-cols-1 tablet:grid-cols-2 max-w-7xl mx-auto py-5 sm:py-8 md:py-16 px-4 sm:px-10 gap-4 sm:gap-10'>
                <div className="flex justify-center items-center">
                    <div className='pr-2'>
                        <h3 className='text-sea-green text-3xl sm:text-4xl md:text-6xl font-semibold font-playfair-display my-5'>We Offer All Types of Travel Services</h3>
                        <p className='text-sm sm:text-base text-gray-500 mb-4 sm:mb-16 leading-7 sm:leading-8 md:pr-16'>At Travel Nation, we don&apos;t just plan trips – we create unforgettable memories that stay with you long after you return home. Let us show you the beauty of the Maldives and Sri Lanka, and together, we&apos;ll craft your perfect adventure.</p>
                        <button type='button' className="w-fit text-white bg-sea-green py-4 px-8 transition-all duration-300 hover:bg-gradient-to-r hover:from-sea-green hover:to-emerald-400 hover:scale-105 font-medium uppercase text-sm cursor-pointer">Inquire</button>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-3'>
                    <Image src={MVPHero3} alt='hero' height={200} width={200} className='w-full rounded-md sm:rounded-tr-[20%] sm:rounded-bl-[20%] h-40 sm:h-60' />
                    <Image src={Hero6} alt='hero' height={200} width={200} className='w-full rounded-md sm:rounded-tl-[20%] sm:rounded-br-[20%] h-40 sm:h-60' />
                    <Image src={NineArch} alt='hero' height={200} width={200} className='w-full rounded-md sm:rounded-tl-[20%] sm:rounded-br-[20%] h-40 sm:h-60' />
                    <Image src={AlilaHero5} alt='hero' height={200} width={200} className='w-full rounded-md sm:rounded-tr-[20%] sm:rounded-bl-[20%] h-40 sm:h-60' />

                </div>

            </div>
        </div>

    )
}

export default TravelServices