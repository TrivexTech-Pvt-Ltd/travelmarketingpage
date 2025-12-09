import { ResortDirection } from '@/types/hotel.package.type'
import React from 'react'

interface MapTabProps {
    data?: ResortDirection
}

const MapTab = ({ data }: MapTabProps) => {
    if (!data) return null;
    return (
        <div className='space-y-2 w-full'>
            <p className='text-lg font-medium text-center text-gray-500 py-2'>{data.description}</p>
            <iframe className='450px 4xl:h-[1080px]' src={data.mapEmbed} width="100%" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default MapTab