"use client"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ResortDining } from "@/types/hotel.package.type";
import SliderWithArrows from "../ui/SliderWithArrows";

interface Props {
    dinings?: ResortDining[];
}

const DiningTab = ({ dinings }: Props) => {
    if (!dinings) return null;
    return (
        <div className="my-8">
            {
                dinings.map((item, index) => (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center my-10" key={index}>
                        <SliderWithArrows images={item.images} />
                        <div className="space-y-4">
                            <h4 className="text-xl font-medium font-work-sans text-black uppercase">{item.name}</h4>
                            <hr />
                            <div className="text-gray-600">
                                {
                                    item.description.map((text, index) => (
                                        <p className="py-4 text-base" key={index}>{text}</p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DiningTab