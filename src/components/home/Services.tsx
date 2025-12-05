import Image from "next/image";
import Link from "next/link";
import { Hero8 } from "@/utils/staticImages";

const Services = () => {
  return (
    // <div className="services-bg md:h-[580px] w-full relative flex justify-center items-center md:mt-20">
    //   <div className="absolute inset-0 bg-black/65 z-10 pointer-events-none"></div>
    //   <div className="flex flex-col items-center gap-y-5 z-30 max-md:p-4">
    //     {/* <h4 className='text-xl text-white font-medium uppercase'>We are dedicated to</h4>
    //     <h3 className='text-4xl md:text-5xl text-white font-semibold font-playfair-display text-center'>Discover the Art of Exceptional Travel</h3>
    //     <p className='text-base md:text-lg text-white text-center'>Travel Nation offers a seamless mix of discovery and relaxation. Think personalised tours and excursions <br /> that cater to all tastes as well as serene wellness retreats and intriguing escapes.</p>
    //     <p className='text-base md:text-lg text-white text-center'>Trust us to handle all the details, so you can focus on making memories.</p> */}
    //     <h4 className=" text-white text-3xl sm:text-4xl md:text-5xl font-semibold font-playfair-display">
    //       LUXURY TAILOR-MADE HOLIDAYS
    //     </h4>
    //     <p className="text-xs md:text-base text-white text-center">
    //       Crafted with precision, delivered with passion.
    //     </p>
    //     <p className="text-base md:text-lg text-white text-center">
    //       Every traveller is unique, and so is every journey we create. Our
    //       travel designers work with you personally to curate bespoke
    //       itineraries that reflect your interests, pace, and style.
    //     </p>
    //     <p className="text-base md:text-lg text-white text-center">
    //       From boutique stays to private chauffeurs and exclusive experiences,
    //       we ensure that your holiday is seamless, sophisticated, and
    //       unforgettable.
    //     </p>
    //     <p className="text-base md:text-lg text-white text-center">
    //       At Travel Nation, luxury is not about extravagance, it is about
    //       meaningful moments, thoughtfully delivered.
    //     </p>
    //     <div className="relative z-30 flex flex-col items-center text-center gap-4 px-4 max-w-4xl">
    //       <p className="text-white text-base leading-relaxed mb-6 italic md:mt-10">
    //         “Be moved by the journey”
    //       </p>
    //       <p className="text-base md:text-lg text-white text-center">
    //         Travel becomes memorable when it feels personal. With Travel Nation,
    //         your itinerary is curated from local insight and thoughtful care.
    //         You will step into places that travellers rarely see and gather
    //         stories that stay with you long after the bags are unpacked.
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <Image src={Hero8} alt="LUXURY TAILOR-MADE HOLIDAYS" className="h-full" />
      <div className="bg-soft-beige p-6 flex justify-center items-center flex-col lg:px-12 xl:px-20">
        <div className="space-y-6 py-6">
          <h3 className="text-sea-green text-3xl sm:text-4xl md:text-5xl uppercase font-semibold text-center font-playfair-display">
            LUXURY TAILOR-MADE HOLIDAYS
          </h3>
          <p className="text-sm md:text-[15px] text-gray-500 text-center">
            Crafted with precision, delivered with passion.
          </p>
          <p className="text-sm md:text-[15px] text-gray-500 text-center">
            Every traveller is unique, and so is every journey we create. Our
            travel designers work with you personally to curate bespoke
            itineraries that reflect your interests, pace, and style.
          </p>
          <p className="text-sm md:text-[15px] text-gray-500 text-center">
            From boutique stays to private chauffeurs and exclusive experiences,
            we ensure that your holiday is seamless, sophisticated, and
            unforgettable.
          </p>
          <p className="text-sm md:text-[15px] text-gray-500 text-center">
            At Travel Nation, luxury is not about extravagance, it is about
            meaningful moments, thoughtfully delivered.
          </p>
          <div className="relative z-30 hidden flex-col items-center text-center gap-4 px-4 max-w-4xl">
            <p className="text-gray-500 font-semibold text-base leading-relaxed italic">
              “Be moved by the journey”
            </p>
            <p className="text-sm md:text-[15px] text-gray-500 text-center">
              Travel becomes memorable when it feels personal. With Travel Nation,
              your itinerary is curated from local insight and thoughtful care.
              You will step into places that travellers rarely see and gather
              stories that stay with you long after the bags are unpacked.
            </p>
          </div>
          <div className="flex justify-center items-center w-full">
            <Link
              href="/maldives"
              className="text-white text-sm bg-sea-green py-3 px-6 sm:py-4 mx-auto sm:px-8 border border-white transition-all duration-300 hover:bg-gradient-to-r hover:from-sea-green hover:to-emerald-400 hover:scale-105 font-medium"
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
