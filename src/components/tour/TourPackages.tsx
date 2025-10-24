import { MaldivesData, srilankanData } from '@/lib/utils/data';
import PackageCard from '../ui/PackageCard';

interface TourPackagesProps {
    bgColor?: string;
    isSrilanka?: boolean;
    isMaldives?: boolean;
    isDestination?: boolean
}

const TourPackages = ({ bgColor = 'bg-light-gray', isSrilanka = true, isMaldives = true, isDestination = false }: TourPackagesProps) => {
    return (
        <>
            {
                isMaldives ? <div className={`px-5 md:px-8 xl:px-40 ${bgColor} ${isDestination ? 'my-0 py-0' : 'py-5 sm:py-12'} `}>
                    <h3 className='text-3xl md:text-4xl lg:text-5xl text-center pt-10 font-playfair-display text-sea-green font-semibold mb-4'>Maldives Gateways</h3>
                    <p className='text-base text-gray-500 font-medium text-center mb-4'>Escape to paradise where turquoise waters, luxury, <br /> and adventure come together for an unforgettable experience.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-4 relative">
                        {MaldivesData.map((card) => (
                            <PackageCard key={card.name} country='maldives' {...card} />
                        ))}
                    </div>
                </div> : null
            }
            {
                isSrilanka ? <div className='px-5 md:px-8 xl:px-40 py-5 sm:py-12'>
                    <h3 className='text-3xl md:text-4xl lg:text-5xl text-center pt-10 font-playfair-display text-sea-green font-semibold mb-4'>Sri Lanka Journeys</h3>
                    <p className='text-base text-gray-500 font-medium text-center mb-4'>Experience the highlights of this emerald island nation on a luxury <br /> 10-day Classic Sri Lanka journey.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-4 relative">
                        {srilankanData.map((card) => (
                            <PackageCard country='sri-lanka' key={card.name} {...card} />
                        ))}
                    </div>
                </div> : null
            }
        </>


    )
}

export default TourPackages