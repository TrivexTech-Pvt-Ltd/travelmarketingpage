import { dedicatedServices } from '@/lib/utils/data'
import { div } from 'framer-motion/client'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div className='services-bg md:h-[580px] w-full relative flex justify-center items-center my-10'>
      <div className="absolute inset-0 bg-black/65 z-10 pointer-events-none" ></div>
      <div className='flex flex-col items-center gap-y-5 z-30 max-md:p-4'>
        <h4 className='text-xl text-white font-medium uppercase'>We are dedicated to</h4>
        <h3 className='text-4xl md:text-5xl text-white font-semibold font-playfair-display text-center'>Discover the Art of Exceptional Travel</h3>
        <p className='text-base md:text-lg text-white text-center'>Travel Nation offers a seamless mix of discovery and relaxation. Think personalised tours and excursions <br /> that cater to all tastes as well as serene wellness retreats and intriguing escapes.</p>
        <p className='text-base md:text-lg text-white text-center'>Trust us to handle all the details, so you can focus on making memories.</p>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-16 py-5'>
          {
            dedicatedServices.map((item) => (
              <div className='flex flex-col gap-y-2 justify-center items-center flex-wrap' key={item.id}>
                <Image src={item.image} height={100} width={100} alt={item.title} className='h-16 w-16 md:w-20 md:h-20' />
                <span className='text-base md:text-lg text-white font-medium'>{item.title}</span>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default Services