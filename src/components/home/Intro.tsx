import { servicesData } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
const Intro = () => {
  return (
    <div className="flex flex-col px-5 md:px-20 xl:px-56 my-12 max-sm:mb-0 md:my-24 gap-y-4">
      <h3 className="text-lg text-sea-green uppercase text-center font-medium">
        Welcome to Travel Nation
      </h3>
      <h2 className="text-3xl sm:text-3xl lg:text-4xl text-sea-green font-semibold text-center font-playfair-display">
        Crafting Journeys Beyond the Ordinary — Across Sri Lanka & the Maldives.
      </h2>
      <p className="text-base lg:text-lg text-gray-500 text-center py-6">
        At Travel Nation, we design journeys that stir the soul — blending the
        wild beauty of Sri Lanka and the serene elegance of the Maldives into
        one unforgettable experience.
      </p>
      {/* <div className="grid sm:grid-cols-2 xl:grid-cols-4 sm:gap-4 lg:gap-12 my-4">
        {servicesData.map((item) => (
          <div
            className="flex flex-col gap-y-2 justify-center items-center py-2 lg:py-10"
            key={item.id}
          >
            <Image
              src={item.image}
              alt="custom_tours"
              height={80}
              width={80}
              className="fill-sea-green h-16 w-16 md:w-20 md:h-20"
            />
            <p className="text-sm md:text-base text-gray-500 py-4 text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div> */}
      <h2 className="text-3xl sm:text-3xl lg:text-4xl text-sea-green font-semibold text-center font-playfair-display">
        The Essence of Travel Nation
      </h2>
      <p className="text-base lg:text-lg text-gray-500 text-center py-6">
        Every journey begins with curiosity, the desire to see, taste, and feel
        something extraordinary. At Travel Nation, we go beyond itineraries. We
        create travel experiences where every sunrise feels personal and every
        moment leaves a story to tell. Whether it’s tracing the cultural threads
        of Sri Lanka’s ancient kingdoms or unwinding in the turquoise stillness
        of a Maldivian island, our goal is simple, to make you feel the world
        differently.
      </p>
      <div className="flex justify-center">
        <Link
          href="/about-us"
          className="text-white bg-sea-green h-10 px-8 rounded-md 
    flex items-center justify-center text-base font-medium 
    transition-all duration-300 hover:bg-emerald-400 hover:scale-105"
        >
          Discover Who We Are
        </Link>
      </div>
    </div>
  );
};

export default Intro;
