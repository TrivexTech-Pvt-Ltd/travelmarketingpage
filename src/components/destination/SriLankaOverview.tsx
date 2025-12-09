
"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  slCulture,
  slGastronomy,
  slWildLife,
  slillCountry,
  slOcean,
  slColombo,
} from "@/utils/data";
import ImageSlider from "../ui/ImageSlider";
import FooterNote from "./FooterNote";

interface SriLankaOverviewProps {
  setActiveTab: (value: string) => void;
}

const SriLankaOverview = ({ setActiveTab }: SriLankaOverviewProps) => {
  return (
    <>
      {/* INTRO SECTION */}
      <div className="flex flex-col justify-center items-center max-w-7xl mx-auto max-sm:px-4 py-4 sm:py-10 mb-5">
        <h1 className="text-sea-green text-3xl sm:text-4xl md:text-5xl font-normal uppercase font-playfair-display my-5">
          The Island of Timeless Wonder
        </h1>
        <p className="text-sm lg:text-lg text-gray-500 leading-7 text-center py-1">
          Golden beaches kissed by the Indian Ocean. Ancient kingdoms rising
          from the mist. Tea-covered hills stretching endlessly into the clouds.
        </p>
        <p className="text-sm lg:text-lg text-gray-500 leading-7 text-center py-1">
          Sri Lanka is not just a destination, it is an awakening of the senses.
        </p>
        <p className="text-sm lg:text-lg text-gray-500 leading-7 text-center py-1">
          Here, every sunrise brings new colour, and every encounter tells a
          story steeped in warmth and tradition.
        </p>
      </div>

      {/* CULTURE SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="order-1 lg:order-1 h-full w-full">
          <ImageSlider
            heroData={slCulture}
            height="h-96 lg:h-full xl:h-[680px] 4xl:h-[1080px]"
          />
        </div>

        <div className="flex justify-center items-center bg-soft-beige h-full order-2 lg:order-2">
          <div className="p-6 sm:p-12">
            <h3 className="text-sea-green text-3xl sm:text-4xl md:text-5xl font-normal uppercase font-playfair-display my-3 sm:my-5">
              Cultural Heritage
            </h3>
            <p className="text-base lg:text-xl text-shadow-wash mb-6 sm:mb-8 leading-7">
              Walk through ancient temples and lost kingdoms.
            </p>
            <p className="text-sm lg:text-lg text-gray-500 mb-6 sm:mb-8 leading-7">
              Step into the cradle of Sri Lankan civilisation. Discover the
              awe-inspiring rock fortress of Sigiriya, the sacred city of
              Anuradhapura, and the cave temples of Dambulla, each whispering
              stories of kings, monks, and timeless artistry. Cycle through
              sleepy villages, meet local artisans, and watch the sunrise over
              ancient stupas, this is history that still breathes.
            </p>
          </div>
        </div>
      </div>

      {/* HILL COUNTRY SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="order-1 lg:order-2 h-full w-full">
          <ImageSlider
            heroData={slillCountry}
            height="h-96 lg:h-full xl:h-[680px] 4xl:h-[1080px]"
          />
        </div>

        <div className="flex justify-center items-center bg-soft-beige h-full order-2 lg:order-1">
          <div className="p-6 sm:p-12">
            <h3 className="text-sea-green text-3xl sm:text-4xl md:text-5xl font-normal uppercase font-playfair-display my-3 sm:my-5">
              Hill Country
            </h3>
            <p className="text-base lg:text-xl text-shadow-wash mb-6 sm:mb-8 leading-7">
              The Land of Mist and Tea
            </p>
            <p className="text-sm lg:text-lg text-gray-500 mb-6 sm:mb-8 leading-7">
              Journey into the highlands, where Nuwara Eliya, Ella, and Hatton
              paint a dreamscape of emerald-green slopes and cascading
              waterfalls.
            </p>
            <p className="text-sm lg:text-lg text-gray-500 leading-7">
              Sip freshly brewed Ceylon tea as cool mountain air drifts through
              your window. Walk through colonial towns, cross old stone bridges,
              and take the world-famous train ride through the hills, one of
              life&apos;s great scenic journeys.
            </p>
          </div>
        </div>
      </div>

      {/* WILDLIFE SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="order-1 lg:order-1 h-full w-full">
          <ImageSlider
            heroData={slWildLife}
            height="h-96 lg:h-full xl:h-[680px] 4xl:h-[1080px]"
          />
        </div>

        <div className="flex justify-center items-center bg-soft-beige h-full order-2 lg:order-2">
          <div className="p-6 sm:p-12">
            <h3 className="text-sea-green text-3xl sm:text-4xl md:text-5xl font-normal uppercase font-playfair-display my-3 sm:my-5">
              Wildlife <span className="font-libreBaskerville">&</span> National
              Parks
            </h3>
            <p className="text-base lg:text-xl text-shadow-wash mb-6 sm:mb-8 leading-7">
              Nature&apos;s Living Theatre
            </p>
            <p className="text-sm lg:text-lg text-gray-500 mb-6 sm:mb-8 leading-7">
              Few places on earth hold such biodiversity in such a small space.
              From the stealth of a leopard in Yala, to the majesty of elephants
              in Minneriya, to blue whales off the coast of Mirissa, Sri Lanka
              is a paradise for wildlife lovers.
            </p>
            <p className="text-sm lg:text-lg text-gray-500 leading-7">
              Our naturalist-led safaris take you deep into the wilderness,
              where the thrill of discovery meets the calm of connection.
            </p>
          </div>
        </div>
      </div>

      {/* OCEAN SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="order-1 lg:order-2 h-full w-full">
          <ImageSlider
            heroData={slOcean}
            height="h-96 lg:h-full xl:h-[680px] 4xl:h-[1080px]"
          />
        </div>

        <div className="flex justify-center items-center bg-soft-beige h-full order-2 lg:order-1">
          <div className="p-6 sm:p-12">
            <h3 className="text-sea-green text-3xl sm:text-4xl md:text-5xl font-normal uppercase font-playfair-display my-3 sm:my-5">
              Ocean, Culture <span className="font-libreBaskerville">&</span>{" "}
              Timeless Beauty
            </h3>
            <p className="text-sm lg:text-lg text-gray-500 mb-6 sm:mb-8 leading-7">
              Along the coast, life carries a gentle rhythm. The warmth of the
              people, their rituals, and their stories shape every moment.
              Lanterns glow during festivals, drums echo through village
              streets, and the scent of fresh spices drifts from open kitchens.{" "}
              <br /> Watch the ocean shift from soft blue to deep turquoise as
              fishermen tend to their craft and children play along the sand.
            </p>
            <p className="text-sm lg:text-lg text-gray-500 leading-7">
              Stay in elegant villas or small coastal hideaways and feel the
              calm of the shoreline settle in.
            </p>
          </div>
        </div>
      </div>

      {/* GASTRONOMY SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="order-1 lg:order-1 h-full w-full">
          <ImageSlider
            heroData={slGastronomy}
            height="h-96 lg:h-full xl:h-[680px] 4xl:h-[1080px]"
          />
        </div>

        <div className="flex justify-center items-center bg-soft-beige h-full order-2 lg:order-2">
          <div className="p-6 sm:p-12">
            <h3 className="text-sea-green text-3xl sm:text-4xl md:text-5xl font-normal uppercase font-playfair-display my-3 sm:my-5">
              Sri Lanka Gastronomy
            </h3>
            <p className="text-base sm:text-xl text-shadow-wash mb-6 sm:mb-8 leading-7">
              A Journey Through Taste
            </p>
            <p className="text-sm lg:text-lg text-gray-500 mb-6 sm:mb-8 leading-7">
              Flavours in Sri Lanka rise from markets that wake with the sun.
              Spice sellers grind cinnamon and cardamom by hand, while fishermen
              return with their night&apos;s catch. In the hills, families
              simmer curries rich with coconut and garden vegetables. Along the
              coast, fire-grilled seafood meets a squeeze of lime and a handful
              of fresh herbs. <br /> You will taste the island in every dish.
              Warm hoppers, fragrant rice, sweet festival treats, and strong tea
              brewed in the highlands. Each plate carries a memory of the people
              who grew it, cooked it, and shared it.
            </p>
            <p className="text-sm lg:text-lg text-gray-500 leading-7">
              Sri Lankan food is comfort, colour, and community. A true journey
              of flavour that stays with you long after you leave
            </p>
          </div>
        </div>
      </div>

      {/* COLOMBO SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="order-1 lg:order-2 h-full w-full">
          <ImageSlider
            heroData={slColombo}
            height="h-96 lg:h-full xl:h-[680px] 4xl:h-[1080px]"
          />
        </div>

        <div className="flex justify-center items-center bg-soft-beige h-full order-2 lg:order-1">
          <div className="p-6 sm:p-12">
            <h3 className="text-sea-green text-3xl sm:text-4xl md:text-5xl font-normal uppercase font-playfair-display my-3 sm:my-5"> Colombo </h3>
            <p className="text-base lg:text-xl text-shadow-wash mb-6 sm:mb-8 leading-7">
              Where Heritage Meets Modernity
            </p>
            <p className="text-sm lg:text-lg text-gray-500 mb-6 sm:mb-8 leading-7">
              Once a trading port, now a vibrant capital, Colombo blends
              colonial charm with contemporary style.
            </p>
            <p className="text-sm lg:text-lg text-gray-500 mb-6 sm:mb-8 leading-7">
              Café-lined streets, galleries, boutique stores, and rooftop bars
              reflect a city that&apos;s both energetic and elegant.
            </p>
            <p className="text-sm lg:text-lg text-gray-500 leading-7">
              It is the perfect beginning or end to your island story.
            </p>
          </div>
        </div>
      </div>
      {/* FOOTER NOTE */}
      <div className="my-16 px-5 lg:px-56">
        <h4 className="font-semibold text-shadow-wash uppercase text-xl my-2">
          Sri Lanka is where every journey becomes a story.
        </h4>
        <p className="text-gray-500 text-base md:text-xl py-3 italic leading-9">
          "At Travel Nation, we reveal Sri Lanka through experiences that go
          beyond the guidebooks, a walk through the cobbled streets of Galle
          Fort as the sun sets over the ramparts, the sound of temple drums in
          Kandy, a morning safari in Yala where leopards roam free, or a quiet
          moment by a lake watching elephants bathe in the golden light. We know
          the pulse of this island, its rhythm, its flavours, its soul and we
          invite you to explore it in a way that is deeply personal, luxurious,
          and authentic."
        </p>
      </div>

      <FooterNote />
    </>
  );
};

export default SriLankaOverview;
