import { dedicatedServices } from '@/lib/utils/data'
import { div } from 'framer-motion/client'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div className='services-bg h-[580px] w-full relative flex justify-center items-center my-10'>
      <div className="absolute inset-0 bg-black/65 z-10 pointer-events-none" ></div>
      <div className='flex flex-col items-center gap-y-5 z-50'>
        <h4 className='text-xl text-white font-medium uppercase'>We are dedicated to</h4>
        <h3 className='text-5xl text-white font-semibold font-work-sans'>Discover the Art of Exceptional Travel</h3>
        <p className='text-lg text-white'>Travel Nation offers a seamless mix of discovery and relaxation. Think personalised tours and excursions <br /> that cater to all tastes as well as serene wellness retreats and intriguing escapes.</p>
        <p className='text-lg text-white'>Trust us to handle all the details, so you can focus on making memories.</p>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-16 py-5'>
          {
            dedicatedServices.map((item) => (
              <div className='flex flex-col gap-y-2 justify-center items-center' key={item.id}>
                <Image src={item.image} height={100} width={100} alt={item.title} />
                <span className='text-lg text-white font-medium'>{item.title}</span>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default Services