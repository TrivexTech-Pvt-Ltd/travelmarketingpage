"use client"
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { atollData, destination_1, destination_2, destination_3, destinationImages_3, destinationImages_4, destinationImages_5, destinationImages_6, slCulture, slJourneys, slOverview, slWildLife } from '@/lib/utils/data';
import Link from 'next/link';
import AtollCard from './AtollCard';
import ImageSlider from "../ui/ImageSlider";

interface SriLankaOverviewProps {
    setActiveTab: (value: string) => void
}

const SriLankaOverview = ({ setActiveTab }: SriLankaOverviewProps) => {

    const handleScrollToGetaways = () => {

        window.location.hash = "getaways";

        const section = document.getElementById("getaways-section");
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
            setActiveTab("getaways");
        }
    }
    return (
        <>
            <div className='px-5 md:px-8 xl:px-40'>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-7xl mx-auto my-8 sm:my-16">
                    <div className="flex justify-center items-center">
                        <div className='pr-2'>
                            <p className='text-sea-green text-lg uppercase font-medium'>OverView</p>
                            <h3 className='text-sea-green text-3xl sm:text-4xl md:text-6xl font-semibold font-playfair-display my-5'>A Journey of Culture, Nature, and Adventure</h3>
                            <p className='text-sm sm:text-base text-gray-500 mt-4 lg:mt-8 leading-7 sm:leading-8'>Sri Lanka, known as the "Pearl of the Indian Ocean," is a destination where ancient history meets vibrant natural beauty. From golden beaches to lush mountain ranges and from bustling cities to serene temples, Sri Lanka offers something special for every traveler. At Travel Nation, we specialize in creating journeys that allow you to fully experience the diverse cultural heritage, captivating wildlife, and iconic regions of this remarkable island.</p>
                        </div>
                    </div>
                    <ImageSlider heroData={slOverview} height="h-96 lg:h-full xl:h-[680px]" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center max-w-7xl mx-auto my-10 sm:my-20">
                    <div className="order-2 lg:order-1 h-full">
                        <ImageSlider heroData={slCulture} height="h-96 lg:h-full xl:h-[680px]" />
                    </div>
                    <div className="flex justify-center items-center bg-soft-beige h-full order-1 lg:order-2">
                        <div className='p-6 sm:p-12'>
                            <h3 className='text-shadow-wash text-3xl sm:text-4xl md:text-5xl font-semibold font-playfair-display my-3 sm:my-5'>Cultural Heritage</h3>
                            <p className='text-sm sm:text-base text-gray-500 mb-6 sm:mb-8 leading-7'>Sri Lanka&apos;s rich cultural heritage spans over 2,500 years, with a legacy of ancient kingdoms, colonial influences, and religious traditions. Explore the country&apos;s UNESCO World Heritage Sites, from the towering rock fortress of Sigiriya to the sacred city of Anuradhapura, where Buddhist relics are revered. Witness traditional Kandyan dance performances, visit centuries-old temples like the Temple of the Tooth Relic in Kandy, and discover hidden gems in ancient cities like Polonnaruwa.</p>
                            <p className='text-sm sm:text-base text-gray-500 leading-7'>Every corner of Sri Lanka tells a story, and Travel Nation ensures that your journey takes you beyond the surface, allowing you to connect with the island&apos;s history, architecture, and spiritual essence.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 items-center sm:my-20">
                <div className="flex justify-center items-center bg-soft-beige h-full">
                    <div className="flex justify-center items-center bg-soft-beige h-full order-1 lg:order-2">
                        <div className='p-6 sm:p-12'>
                            <h3 className='text-shadow-wash text-3xl sm:text-4xl md:text-5xl font-semibold font-playfair-display my-3 sm:my-5'>Wildlife Sri Lanka</h3>
                            <p className='text-sm sm:text-base text-gray-500 mb-6 sm:mb-8 leading-7'>Sri Lanka is a wildlife lover&apos;s paradise, home to some of the most biodiverse ecosystems in the world. The island boasts an incredible variety of animals, from majestic elephants in Yala National Park to elusive leopards in Wilpattu. Embark on safaris through lush jungles, explore wetlands teeming with birdlife, or set sail for whale-watching excursions off the coast of Mirissa</p>
                            <p className='text-sm sm:text-base text-gray-500 leading-7'>At Travel Nation, we offer eco-friendly and responsible wildlife experiences, ensuring you can marvel at Sri Lanka&apos;s incredible creatures while supporting conservation efforts. Whether you&apos;re looking to witness an elephant herd gather at the watering hole in Minneriya or spot blue whales in the Indian Ocean, we curate safaris and nature treks that bring you closer to the island&apos;s untamed beauty.</p>
                        </div>
                    </div>
                </div>
                <ImageSlider heroData={slWildLife} height="h-96 lg:h-full xl:h-[680px]" />
            </div>

            <div className='px-5 md:px-8 xl:px-40'>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center sm:my-20 max-sm:p-4">
                    <ImageSlider heroData={slJourneys} height="h-96 lg:h-full xl:h-[480px]" />



                    <div className="h-full max-sm:py-4">
                        <div className='flex flex-col justify-between h-full sm:pl-8'>
                            <div className='flex flex-col gap-y-2 max-sm:py-3'><p className='text-sea-green text-lg uppercase font-medium'>Sri Lanka</p>
                                <h3 className='text-sea-green text-3xl sm:text-4xl md:text-6xl font-semibold font-playfair-display'>Your Journey with Travel Nation</h3>
                            </div>
                            <p className='text-sm sm:text-base text-gray-500 mb-4 leading-7 lg:pr-28'>At Travel Nation, we create journeys that bring you closer to the heart of Sri Lanka. Whether you want to explore its ancient heritage, seek out wildlife in the wild, or simply relax by pristine beaches, we curate personalized itineraries that ensure your experience is nothing short of extraordinary. Let us show you the best of Sri Lanka, with insider knowledge and expert guidance that make every moment unforgettable.</p>
                            <button type='button' onClick={handleScrollToGetaways} className="w-fit text-white bg-sea-green py-4 px-8 transition-all duration-300 hover:bg-gradient-to-r hover:from-sea-green hover:to-emerald-400 hover:scale-105 font-medium uppercase text-sm cursor-pointer">Journeys</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default SriLankaOverview




