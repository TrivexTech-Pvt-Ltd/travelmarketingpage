import { servicesData } from '@/utils/data'
import Image from 'next/image'

const Intro = () => {
    return (
        <div className='flex flex-col px-5 md:px-20 xl:px-56 my-12 max-sm:mb-0 md:my-24 gap-y-4'>
            <h3 className='text-lg text-sea-green uppercase text-center font-medium'>Welcome to Travel Nation</h3>
            <h2 className='text-3xl sm:text-4xl lg:text-6xl text-sea-green font-semibold text-center font-playfair-display'>Your Gateway to the Maldives and Sri Lanka!</h2>
            <p className='text-base lg:text-lg text-gray-500 text-center py-6'>At Travel Nation, we&apos;re not just about crafting holidays; we&apos;re about creating unforgettable journeys that immerse you in the heart of two of the world&apos;s most stunning destinations – the Maldives and Sri Lanka. Whether you&apos;re dreaming of pristine beaches, vibrant culture, or untamed wilderness, we&apos;ve got you covered.
                Our specialization lies in blending luxury with authentic experiences.</p>
            <div className='grid sm:grid-cols-2 xl:grid-cols-4 sm:gap-4 lg:gap-12 my-4'>
                {servicesData.map((item) => (
                    <div className='flex flex-col gap-y-2 justify-center items-center py-2 lg:py-10' key={item.id}>
                        <Image src={item.image} alt='custom_tours' height={80} width={80} className='fill-sea-green h-16 w-16 md:w-20 md:h-20' />
                        <p className='text-sm md:text-base text-gray-500 py-4 text-center'>{item.description}</p>
                    </div>
                ))

                }
            </div>
        </div>
    )
}

export default Intro