import { FaPaperPlane } from "react-icons/fa";
import { useSLTourPackageStore } from "@/store/TourPackageStore";
import Image from "next/image";
import { DestinationIcon, TimeIcon } from "@/utils/staticImages";

const TourItinerary = () => {
    const data = useSLTourPackageStore(s => s.tourPackage);
    if (!data) return null;
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
                    <div>
                        <div className="flex justify-center mb-2 text-6xl text-sea-green">
                            <Image src={TimeIcon} alt="duration" height={50} width={50} />
                        </div>
                        <h3 className="font-semibold text-xl text-sea-green">Duration</h3>
                        <p className="text-gray-500 text-base">{data.days} Days / {data.nights} Nights</p>
                    </div>
                    <div>
                        <div className="flex justify-center mb-2 text-6xl text-sea-green">
                            <Image src={DestinationIcon} alt="duration" height={50} width={50} />
                        </div>
                        <h3 className="font-semibold text-lg  text-sea-green">Destination</h3>
                        <p className="text-gray-500 text-base">{data.location}</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 max-md:px-4">
                    <div className="my-auto">
                        <p className="tracking-widest text-gray-800 font-medium text-base mb-4">{data.days} Days / {data.nights} Nights</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal uppercase font-playfair-display text-sea-green mb-6">{data.itinerary.title}</h2>
                        <p className="text-gray-500 leading-relaxed mb-4 text-sm sm:text-base md:text-lg">
                            {data.itinerary.description}
                        </p>
                    </div>
                    <div className="flex">
                        <div className="md::border-r border-gray-500 md:mr-6"></div>
                        <ul className="space-y-5 pl-4">
                            {
                                data.itinerary.list.map((item, index) => (
                                    <li key={index} className="flex items-start gap-4 text-gray-500 text-sm md:text-base">
                                        <span className="text-sea-green mt-1"><FaPaperPlane /></span>
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TourItinerary