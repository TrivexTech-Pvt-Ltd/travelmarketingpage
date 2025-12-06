import Image from "next/image";
import Link from "next/link";
import { Hero8 } from "@/utils/staticImages";

const Services = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <Image src={Hero8} alt="LUXURY TAILOR-MADE HOLIDAYS" className="h-full" />
      <div className="bg-soft-beige p-6 flex justify-center items-center flex-col lg:px-12 xl:px-20">
        <div className="space-y-6 py-6">
          <h3 className="text-sea-green text-3xl sm:text-4xl md:text-5xl uppercase font-normal text-center font-playfair-display">
            LUXURY TAILOR-MADE HOLIDAYS
          </h3>
          <p className="text-sm lg:text-lg text-gray-500 text-center">
            Crafted with precision, delivered with passion.
          </p>
          <p className="text-sm lg:text-lg text-gray-500 text-center">
            Every traveller is unique, and so is every journey we create. Our
            travel designers work with you personally to curate bespoke
            itineraries that reflect your interests, pace, and style.
          </p>
          <p className="text-sm lg:text-lg text-gray-500 text-center">
            From boutique stays to private chauffeurs and exclusive experiences,
            we ensure that your holiday is seamless, sophisticated, and
            unforgettable.
          </p>
          <p className="text-sm lg:text-lg text-gray-500 text-center">
            At Travel Nation, luxury is not about extravagance, it is about
            meaningful moments, thoughtfully delivered.
          </p>
          <div className="relative z-30 hidden flex-col items-center text-center gap-4 px-4 max-w-4xl">
            <p className="text-gray-500 font-semibold text-base leading-relaxed italic">
              “Be moved by the journey”
            </p>
            <p className="text-sm lg:text-lg text-gray-500 text-center">
              Travel becomes memorable when it feels personal. With Travel Nation,
              your itinerary is curated from local insight and thoughtful care.
              You will step into places that travellers rarely see and gather
              stories that stay with you long after the bags are unpacked.
            </p>
          </div>
          <div className="flex justify-center items-center w-full">
            <Link
              href="/maldives"
              className="text-white text-sm bg-sea-green py-3 px-6 sm:py-4 mx-auto sm:px-8 rounded-md border transition-all duration-300 hover:bg-transparent border-sea-green hover:text-sea-green hover:scale-105 font-medium"
            >
              Lets go Places
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Services;
