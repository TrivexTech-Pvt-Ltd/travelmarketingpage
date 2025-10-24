"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuPlane, LuRoute } from "react-icons/lu";
import TourPackages from "../tour/TourPackages";
import MaldivesOverview from "./MaldivesOverview";

const MaldivesDestination = () => {
    const [activeTab, setActiveTab] = useState<string>("overview");

    return (
        <div className="py-5 sm:py-10" id="getaways-section">
            <div className="w-full max-w-3xl mx-auto my-5 max-md:px-4">
                <ul className="grid grid-cols-2 border border-sea-green">
                    <li value="overview" className={`py-3 sm:py-4  font-medium flex justify-center cursor-pointer ${activeTab === "overview" ? 'bg-sea-green text-white' : 'text-sea-green bg-white'}`} onClick={() => setActiveTab("overview")}>
                        <span className='flex items-center gap-x-3 text-base sm:text-lg uppercase'><LuRoute />  Overview </span>
                    </li>
                    <li value="getaways" className={`py-3 sm:py-4  font-medium flex justify-center cursor-pointer ${activeTab === "getaways" ? 'bg-sea-green text-white' : 'text-sea-green bg-white'}`} onClick={() => setActiveTab("getaways")}>
                        <span className='flex items-center gap-x-3 text-base sm:text-lg uppercase'><LuPlane />  getaways </span>
                    </li>
                </ul>
            </div>

            <div className="mt-6">
                <AnimatePresence mode="wait">
                    {activeTab === "overview" && (
                        <motion.div
                            key="overview"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <MaldivesOverview setActiveTab={setActiveTab}/>
                        </motion.div>
                    )}

                    {activeTab === "getaways" && (
                        <motion.div
                            key="getaways"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <TourPackages isSrilanka={false} bgColor="bg-white" isDestination={true} />

                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default MaldivesDestination