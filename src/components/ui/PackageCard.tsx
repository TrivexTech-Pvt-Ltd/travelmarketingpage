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
}

const PackageCard = ({
    image,
    name,
    location,
    slug,
    country,
    title
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
                    <p className="text-sm opacity-90 flex items-center gap-x-2 mx-auto"> <FiMapPin /> {location}</p>
                </div>


                <h2 className="mt-2 text-2xl font-playfair-display font-medium">
                    {title}
                </h2>
                <Link href={`/${country}/${slug}`}
                    className="mt-6 inline-block rounded-full border border-white/60 px-6 py-2 
                     text-sm font-medium hover:bg-white hover:text-black 
                     transition-all duration-300"
                >
                    More info
                </Link>
            </div>
        </div>

    );
};

export default PackageCard;
