import Image, { StaticImageData } from "next/image";
import { MapPin, Calendar1, PlaneIcon, SailboatIcon } from "lucide-react";
import Link from "next/link";
import { FiMapPin } from "react-icons/fi";

interface TravelCardProps {
    name: string;
    location: string;
    image: StaticImageData;
    title: string;
    slug: string;
    country?: string;
    nights: string;
}

const PackageCard = ({
    image,
    name,
    location,
    slug,
    country,
    title,
    nights
}: TravelCardProps) => {
    return (
        <div className="relative w-full max-w-md mx-auto overflow-hidden group">
            {/* Background Image */}
            <div className="relative h-[500px] w-full">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                />
            </div>

            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/40 transition-opacity duration-500 
                   group-hover:bg-black/20 pointer-events-none"
            />

            {/* Content */}
            <div className="absolute bottom-10 left-0 right-0 px-6 text-white text-center">
                <div className="flex justify-center items-center">
                    <p className="text-sm opacity-90 flex items-center gap-x-2 mx-auto capitalize"> <FiMapPin /> {location}</p>
                </div>


                <h2 className="mt-2 text-2xl font-playfair-display font-medium">
                    {name}
                </h2>
                {
                    country === 'sri-lanka' ? <div className="flex justify-center items-center pt-3">
                        <p className="text-sm opacity-90 flex items-center gap-x-2 mx-auto capitalize text-center">{nights}</p>
                    </div> : null
                }


                <Link href={`/${country}/${slug}`}
                    className="mt-6 inline-block border rounded-4xl bg-sea-green text-white border-sea-green px-6 py-2 
                     text-sm font-medium hover:bg-white hover:border-sea-green hover:text-sea-green hover:scale-105  
                     transition-all duration-300"
                >
                    More Info
                </Link>
            </div>
        </div>

    );
};

export default PackageCard;
