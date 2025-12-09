"use client";
import { tourPackagesCardData } from "@/utils/data";
import PackageCard from "../ui/PackageCard";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TourPackages = () => {
    const [showAll, setShowAll] = useState(false);

    const visibleTrips = showAll
        ? tourPackagesCardData
        : tourPackagesCardData.slice(0, 6);

    const gridItem = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    return (
        <div className="px-5 md:px-8 xl:px-10 2xl:px-20 4xl:px-96 py-5 sm:py-12">

            {/* Heading */}
            <motion.h3
                className="text-3xl md:text-4xl lg:text-5xl text-center pt-10 font-playfair-display text-sea-green font-normal mb-4 uppercase"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                Be moved by the journey
            </motion.h3>

            {/* Paragraph */}
            <motion.p
                className="text-base lg:text-lg italic text-gray-500 text-center py-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                Travel becomes memorable when it feels personal. With Travel Nation,
                your itinerary is curated from local insight and thoughtful care. <br />
                You will step into places that travellers rarely see and gather stories
                that stay with you long after the bags are unpacked.
            </motion.p>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 4xl:gap-10 p-4 relative">
                <AnimatePresence>
                    {visibleTrips.map((tour) => (
                        <motion.div
                            key={tour.id}
                            variants={gridItem}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ duration: 0.4 }}
                        >
                            <PackageCard {...tour} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Buttons */}
            <div className="flex justify-center mt-10 gap-4">
                {!showAll && (
                    <motion.button
                        onClick={() => setShowAll(true)}
                        className="text-white cursor-pointer text-sm bg-sea-green py-3 px-6 sm:py-4 mx-auto sm:px-8 transition-all duration-300 rounded-md border hover:bg-transparent border-sea-green hover:text-sea-green hover:scale-105 font-medium"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        View all Itineraries
                    </motion.button>
                )}

                {showAll && (
                    <motion.button
                        onClick={() => setShowAll(false)}
                        className="text-white cursor-pointer text-sm bg-sea-green py-3 px-6 sm:py-4 mx-auto sm:px-8 transition-all duration-300 rounded-md border hover:bg-transparent border-sea-green hover:text-sea-green hover:scale-105 font-medium"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        View Less
                    </motion.button>
                )}
            </div>
        </div>
    );
};

export default TourPackages;
