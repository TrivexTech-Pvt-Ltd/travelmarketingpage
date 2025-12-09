"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuPlane, LuRoute } from "react-icons/lu";
import MaldivesOverview from "./MaldivesOverview";
import PackageCard from "../ui/PackageCard";
import { tourPackagesCardData } from "@/utils/data";

const MaldivesDestination = () => {
    const [activeTab, setActiveTab] = useState<string>("overview");
    const maldivesPackages = tourPackagesCardData.filter(x => x.country === "maldives");

    return (
        <div className="py-5 sm:py-10" id="getaways-section">
            <div className="flex justify-center">
                <div className="relative flex bg-white shadow-sm rounded-full py-2 gap-3">

                    {/* Moving highlight */}
                    <div
                        className="absolute top-2 bottom-2 rounded-full transition-all duration-300 bg-sea-green"
                        style={{
                            width: "180px",
                            left: activeTab === "overview" ? "6px" : "195px",
                        }}
                    ></div>

                    {/* Tab 1 */}
                    <button
                        type="button"
                        onClick={() => setActiveTab("overview")}
                        className={`relative cursor-pointer z-10 px-8 py-3 text-lg font-medium transition-colors ${activeTab === "overview" ? "text-white" : "text-[#4A4A4A]"
                            }`}
                    >
                        <span className="flex items-center gap-x-3 text-base uppercase">
                            <LuRoute /> Overview
                        </span>
                    </button>

                    {/* Tab 2 */}
                    <button
                        type="button"
                        onClick={() => setActiveTab("getaways")}
                        className={`relative cursor-pointer z-10 px-8 py-3 text-lg font-medium transition-colors ${activeTab === "getaways" ? "text-white" : "text-[#4A4A4A]"
                            }`}
                    >
                        <span className="flex items-center gap-x-3 text-base uppercase">
                            <LuPlane /> Getaways
                        </span>
                    </button>
                </div>
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
                            <MaldivesOverview setActiveTab={setActiveTab} />
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
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-4 relative sm:px-10 xl:px-40 4xl:px-96">
                                {
                                    maldivesPackages.map((data) => (
                                        <PackageCard key={data.id} {...data} />
                                    ))
                                }
                            </div>

                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default MaldivesDestination