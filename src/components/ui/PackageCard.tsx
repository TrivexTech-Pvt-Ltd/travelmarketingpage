import Image, { StaticImageData } from "next/image";
import { MapPin, Calendar1, PlaneIcon, SailboatIcon } from "lucide-react";
import Link from "next/link";

interface TravelCardProps {
    name: string;
    description: string;
    location: string;
    nights: number;
    transfer?: string;
    image: StaticImageData;
    title: string;
    slug:string;
}

const PackageCard = ({
    image,
    name,
    title,
    location,
    nights,
    description,
    transfer,
    slug
}: TravelCardProps) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative">
            <div className="relative">
                <Image
                    src={image}
                    alt={name}
                    width={400}
                    height={260}
                    className="object-cover w-full h-60"
                />
                <div className="relative w-fit shadow-md px-4 py-2 flex justify-between items-center gap-4 text-sm text-gray-700 ml-4 -mt-5 bg-gradient-to-r from-sea-green to-emerald-400">
                    <div className="flex items-center text-white text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{location}</span>
                    </div>
                </div>
            </div>

            <div className="p-6 pb-16">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{name}</h2>

                <div className="flex justify-between py-3">
                    <div className="flex items-center gap-1 mb-2">
                        <Calendar1 className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm font-medium">{nights}</span>
                    </div>
                    {
                        transfer && <div className="flex items-center gap-1 mb-2">
                            {
                                transfer === "Seaplane Transfers" ? <PlaneIcon className="w-4 h-4 text-emerald-600" /> : <SailboatIcon className="w-4 h-4 text-emerald-600" />
                            }

                            <span className="text-sm font-medium">{transfer}</span>
                        </div>
                    }

                </div>

                <p className="text-gray-500 text-base py-2 border-gray-300 border-b border-t pb-4 mb-5">
                    {description}
                </p>
            </div>

            <Link href={`maldives/${slug}`} className="absolute bottom-0 right-0 bg-gradient-to-r from-sea-green to-emerald-400 text-white px-5 py-2 rounded-tl-xl shadow-lg">
                <div className="flex items-center gap-2">
                    <span className="text-base font-medium">View Details</span>
                </div>
            </Link>
        </div>

    );
};

export default PackageCard;
