"use client"
import { useTourPackageStore } from '@/store/TourPackageStore';
import React from 'react'
import { LuCircleCheckBig } from "react-icons/lu";

const InfoListSection = () => {
    const data = useTourPackageStore(s => s.tourPackage)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto my-16'>
            {
                data?.inclusions && <div className='space-y-4'>
                    <h3 className='text-4xl text-sea-green font-work-sans font-medium'>Your Inclusions </h3>
                    <div className='bg-white rounded-md p-6 flex flex-col gap-y-5 '>
                        {
                            data?.inclusions.list.map((item, index) => (
                                <div className='flex items-center gap-x-3 text-sea-green text-lg' key={index}> <LuCircleCheckBig className='text-sea-green' /> <div>{item}</div> </div>

                            ))
                        }
                    </div>

                    {data.inclusions.description && <p className='text-sea-green text-lg'>{data.inclusions.description}</p>}
                </div>

            }
            {
                data?.honeymoonInclusions && <div className='space-y-4'>
                    <h3 className='text-4xl text-sea-green font-work-sans font-medium'>Honeymoon Benefits</h3>
                    <div className='bg-white rounded-md p-6 flex flex-col gap-y-5 '>
                        {
                            data?.honeymoonInclusions.list.map((item, index) => (
                                <div className='flex items-center gap-x-3 text-sea-green text-lg' key={index}> <LuCircleCheckBig className='text-sea-green' /> <div>{item}</div> </div>

                            ))
                        }
                    </div>

                    {data.honeymoonInclusions.description && <p className='text-sea-green text-lg'>{data.honeymoonInclusions.description}</p>}
                </div>
            }
            {
                data?.bdayAnvInclusions && <div className='space-y-4 col-span-2'>
                    <h3 className='text-4xl text-sea-green font-work-sans font-medium'>Birthday & Wedding Anniversary Benefits</h3>
                    <div className='bg-white rounded-md p-6 flex flex-col gap-y-5 '>
                        {
                            data?.bdayAnvInclusions.list.map((item, index) => (
                                <div className='flex items-center gap-x-3 text-sea-green text-lg' key={index}> <LuCircleCheckBig className='text-sea-green' /> <div>{item}</div> </div>

                            ))
                        }
                    </div>

                    {data.bdayAnvInclusions.description && <p className='text-sea-green text-lg'>{data.bdayAnvInclusions.description}</p>}
                </div>
            }

        </div>
    )
}

export default InfoListSection