import Link from "next/link";
const Intro = () => {
  return (
    <div className="flex flex-col px-5 md:px-20 xl:px-40 my-12 max-sm:mb-0 md:my-24 gap-y-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-sea-green font-normal text-center uppercase font-playfair-display">
        Crafting Journeys Beyond the Ordinary Across <br/> Sri Lanka <span className="font-montserrat">&</span> the Maldives
      </h2>
      <p className="text-base lg:text-lg text-gray-500 text-center py-6">
        At Travel Nation, we design journeys that stir the soul , blending the
        wild beauty of Sri Lanka <br/> and the serene elegance of the Maldives into
        one unforgettable experience.
      </p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-sea-green uppercase font-normal text-center font-playfair-display">
        The Essence of Travel Nation
      </h2>
      <p className="text-base lg:text-lg text-gray-500 text-center pt-6">
        Every journey begins with curiosity, the desire to see, taste, and feel
        something extraordinary. At Travel Nation, we go beyond itineraries. <br/> We
        create travel experiences where every sunrise feels personal and every
        moment leaves a story to tell.
      </p>
      <p className="text-base lg:text-lg text-gray-500 text-center pb-3">
        Whether it&apos;s tracing the cultural threads
        of Sri Lanka&apos;s ancient kingdoms or unwinding in the turquoise stillness
        of a Maldivian island, our goal is simple, to make you feel the world
        differently.
      </p>
      <div className="flex justify-center">
        <Link
          href="/our-core"
          className="text-white bg-sea-green py-3 px-6 sm:py-4 sm:px-8 
                    flex items-center justify-center text-sm font-medium 
                    transition-all duration-300 hover:bg-white border hover:border-sea-green hover:text-sea-green hover:scale-105"
        >
          Discover Who We Are
        </Link>
      </div>
    </div>
  );
};

export default Intro;
