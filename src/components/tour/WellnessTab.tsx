"use client"
import { ResortWellnessSpa } from '@/types/hotel.package.type';
import SliderWithArrows from "../ui/SliderWithArrows";

interface Props {
    wellnessSpa?: ResortWellnessSpa[];
}

const WellnessTab = ({ wellnessSpa }: Props) => {
    if (!wellnessSpa) return null
    return (
        <div className="my-8">
            {
                wellnessSpa.map((item, index) => (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center my-10" key={index}>
                        <SliderWithArrows images={item.images} />
                        <div className="space-y-4">
                            <h4 className="text-xl font-medium font-work-sans text-black uppercase">{item.title}</h4>
                            <hr />
                            <div className="text-gray-600">
                                <p className="py-4 text-base">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default WellnessTab