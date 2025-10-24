"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, DoorOpen } from "lucide-react"; 
import { RiHotelBedFill } from "react-icons/ri";
import { LuPlane, LuRoute } from "react-icons/lu";

const tabs = [
    { id: "overview", label: "Overview", icon: Monitor },
    { id: "gateway", label: "Gateway", icon: DoorOpen },
];

export default function Tabs() {
    const [activeTab, setActiveTab] = useState<string>("overview");

    return (
        <div className="py-10">
            <div className="w-full max-w-3xl mx-auto">
                <ul className="grid grid-cols-2 border border-sea-green">
                    <li className={`py-4  font-medium flex justify-center cursor-pointer ${activeTab === "overview" ? 'bg-sea-green text-white' : 'text-sea-green bg-white'}`} onClick={() => setActiveTab("overview")}>
                        <span className='flex items-center gap-x-3 text-lg uppercase'><LuRoute />  Overview </span>
                    </li>
                    <li className={`py-4  font-medium flex justify-center cursor-pointer ${activeTab === "getaways" ? 'bg-sea-green text-white' : 'text-sea-green bg-white'}`} onClick={() => setActiveTab("getaways")}>
                        <span className='flex items-center gap-x-3 text-lg uppercase'><LuPlane />  getaways </span>
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
                            <h2 className="text-xl font-semibold mb-2">Overview</h2>
                            <p className="text-gray-600">This is the Overview section content.</p>
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
                            <h2 className="text-xl font-semibold mb-2">Gateway</h2>
                            <p className="text-gray-600">This is the Gateway content section.</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
