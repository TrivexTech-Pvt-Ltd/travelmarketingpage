import { Highlights } from '@/utils/staticImages'
import Image from 'next/image'
import React from 'react'
import { LuCircleCheckBig } from 'react-icons/lu'

interface HighlightTabProps {
    highlightedList?: string[]
}

const HighlightTab = ({ highlightedList }: HighlightTabProps) => {
    if (!highlightedList) return null
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-md">
                <Image
                    src={Highlights}
                    alt="highlights"
                    fill
                    className="object-cover object-center"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className='pl-10 pt-10'>
                <h3 className='text-4xl font-medium font-work-sans text-black'>Resort highlights</h3>
                {
                    highlightedList.map((item, index) => (
                        <div className='flex items-center gap-x-4 text-gray-500 text-base my-5' key={index}> <div className='text-lg'><LuCircleCheckBig className='text-sea-green' /> </div> <div>{item}</div> </div>

                    ))
                }
            </div>
        </div>
    )
}

export default HighlightTab