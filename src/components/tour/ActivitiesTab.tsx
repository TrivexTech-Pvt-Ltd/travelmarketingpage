"use client"
import { ResortActivity } from '@/types/hotel.package.type';
import Image from 'next/image';
import SliderWithArrows from '../ui/SliderWithArrows';


interface Props {
    activities?: ResortActivity[];
}

const ActivitiesTab = ({ activities }: Props) => {
    if (!activities) return null
    return (
        <div className="my-8">
            {
                activities.map((item, index) => (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center my-10" key={index}>
                        <SliderWithArrows images={item.images} />
                        <div className="space-y-4">
                            <h4 className="text-xl font-medium font-work-sans text-black uppercase">{item.title}</h4>
                            <hr />
                            <div className="text-gray-600">
                                {
                                    item.description.map((text, index) => (
                                        <p className="py-4 text-base" key={index}>{text}</p>
                                    ))
                                }
                                {
                                    item.activityList && <ul className='flex flex-col gap-y-1 list-disc pl-4'>
                                        {
                                            item.activityList.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))
                                        }
                                    </ul>
                                }


                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ActivitiesTab