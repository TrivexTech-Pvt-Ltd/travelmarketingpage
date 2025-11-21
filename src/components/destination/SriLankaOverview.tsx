"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { slCulture, slJourneys, slOverview, slWildLife } from "@/utils/data";
import ImageSlider from "../ui/ImageSlider";

interface SriLankaOverviewProps {
  setActiveTab: (value: string) => void;
}

const SriLankaOverview = ({ setActiveTab }: SriLankaOverviewProps) => {
  const handleScrollToGetaways = () => {
    window.location.hash = "getaways";

    const section = document.getElementById("getaways-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveTab("getaways");
    }
  };

  return (
    <>
      {/* GLOBAL WRAPPER WITH MAX WIDTH FOR LARGE SCREENS */}
      <div className="px-5 md:px-8 xl:px-20 2xl:px-28 max-w-screen-2xl mx-auto">
        {/* OVERVIEW SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center my-8 sm:my-16">
          <div className="flex justify-center items-center">
            <div className="pr-0 lg:pr-4">
              <p className="text-sea-green text-lg uppercase font-medium">
                OverView
              </p>

              <h3 className="text-sea-green text-3xl sm:text-4xl md:text-6xl font-semibold font-playfair-display my-5">
                A Journey of Culture, Nature, and Adventure
              </h3>

              <p className="text-sm sm:text-base text-gray-500 mt-4 lg:mt-8 leading-7 sm:leading-8">
                Sri Lanka, known as the "Pearl of the Indian Ocean," is a
                destination where ancient history meets vibrant natural beauty.
                From golden beaches to lush mountain ranges and from bustling
                cities to serene temples, Sri Lanka offers something special for
                every traveler. At Travel Nation, we specialize in creating
                journeys that allow you to fully experience the island's diverse
                cultural heritage, wildlife, and iconic regions.
              </p>
            </div>
          </div>

          <ImageSlider
            heroData={slOverview}
            height="h-80 sm:h-96 lg:h-[500px] xl:h-[650px] 2xl:h-[750px]"
          />
        </div>

        {/* CULTURE SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center my-10 sm:my-20">
          <div className="order-2 lg:order-1 h-full w-full">
            <ImageSlider
              heroData={slCulture}
              height="h-80 sm:h-96 lg:h-[500px] xl:h-[650px] 2xl:h-[750px]"
            />
          </div>

          <div className="flex justify-center items-center bg-soft-beige h-full order-1 lg:order-2">
            <div className="p-6 sm:p-12">
              <h3 className="text-shadow-wash text-3xl sm:text-4xl md:text-5xl font-semibold font-playfair-display my-3 sm:my-5">
                Cultural Heritage
              </h3>

              <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8 leading-7">
                Sri Lanka’s cultural heritage spans over 2,500 years, with a
                legacy of ancient kingdoms, colonial influence, and deep-rooted
                traditions. Explore UNESCO World Heritage Sites such as
                Sigiriya, Anuradhapura, and Dambulla. Experience Kandyan dance,
                visit ancient temples, and uncover stories preserved across
                millennia.
              </p>

              <p className="text-sm sm:text-base text-gray-500 leading-7">
                Travel Nation ensures your journey connects you with Sri Lanka’s
                rich architecture, traditions, and spiritual essence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WILDLIFE SECTION - FULL WIDTH */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center sm:my-20">
        <div className="flex justify-center items-center bg-soft-beige h-full">
          <div className="p-6 sm:p-12">
            <h3 className="text-shadow-wash text-3xl sm:text-4xl md:text-5xl font-semibold font-playfair-display my-3 sm:my-5">
              Wildlife Sri Lanka
            </h3>

            <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8 leading-7">
              Sri Lanka is a wildlife lover’s paradise, home to some of the most
              biodiverse ecosystems in the world. From elephants in Yala to
              leopards in Wilpattu, the island’s parks offer unmatched natural
              encounters.
            </p>

            <p className="text-sm sm:text-base text-gray-500 leading-7">
              Travel Nation provides eco-friendly wildlife adventures—from
              elephant gatherings in Minneriya to whale watching in
              Mirissa—bringing you face-to-face with Sri Lanka’s extraordinary
              creatures.
            </p>
          </div>
        </div>

        <ImageSlider
          heroData={slWildLife}
          height="h-80 sm:h-96 lg:h-[500px] xl:h-[650px] 2xl:h-[750px]"
        />
      </div>

      {/* JOURNEYS SECTION */}
      <div className="px-5 md:px-8 xl:px-20 2xl:px-28 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center sm:my-20">
          <ImageSlider
            heroData={slJourneys}
            height="h-80 sm:h-96 lg:h-[450px] xl:h-[550px] 2xl:h-[650px]"
          />

          <div className="h-full py-4 lg:pl-8">
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-y-2 py-3">
                <p className="text-sea-green text-lg uppercase font-medium">
                  Sri Lanka
                </p>

                <h3 className="text-sea-green text-3xl sm:text-4xl md:text-6xl font-semibold font-playfair-display">
                  Your Journey with Travel Nation
                </h3>
              </div>

              <p className="text-sm sm:text-base text-gray-500 mb-4 leading-7 lg:pr-20">
                At Travel Nation, we curate personalized itineraries tailored to
                your interests—whether it’s heritage, wildlife, beaches, or
                adventure. Let us guide you through Sri Lanka with insider
                knowledge and expert planning.
              </p>

              <button
                type="button"
                onClick={handleScrollToGetaways}
                className="w-fit text-white bg-sea-green py-4 px-8 transition-all duration-300 
                                hover:bg-gradient-to-r hover:from-sea-green hover:to-emerald-400 hover:scale-105 
                                font-medium uppercase text-sm cursor-pointer"
              >
                Journeys
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SriLankaOverview;
