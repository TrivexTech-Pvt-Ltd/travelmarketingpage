import { highlightContent } from "@/types/hotel.package.type";
import { Highlights } from "@/utils/staticImages";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { LuCircleCheckBig } from "react-icons/lu";
import { motion } from "framer-motion";
const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0 },
};
interface HighlightTabProps {
  highlightedList?: string[];
  map: string;
  highlightContent: highlightContent;
  isRoomDetails?: boolean;
}

const HighlightTab = ({
  highlightedList,
  map,
  highlightContent,
  isRoomDetails = false,
}: HighlightTabProps) => {
  if (!highlightedList) return null;
  return (
    // <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-6">
    //   <div className="space-y-4">
    //     <h3 className="text-xl font-medium font-work-sans">
    //       {highlightContent.title}
    //     </h3>
    //     <div className="space-y-5">
    //       {highlightContent.highlights.map((item, index) => (
    //         <p key={index} className="text-gray-500 text-base">
    //           {item}
    //         </p>
    //       ))}
    //     </div>
    //   </div>

    //   <div className="md:pl-10 md:pt-10  md:border-l-2 md:border-gray-500">
    //     <h3 className="text-2xl font-medium font-work-sans text-black">
    //       {isRoomDetails ? "Key" : "Resort"} highlights
    //     </h3>
    //     {highlightedList.map((item, index) => (
    //       <div
    //         className="flex items-center gap-x-4 text-gray-500 text-base my-5"
    //         key={index}
    //       >
    //         {" "}
    //         <div className="text-lg">
    //           <LuCircleCheckBig className="text-sea-green" />{" "}
    //         </div>{" "}
    //         <div>{item}</div>{" "}
    //       </div>
    //     ))}
    //     <Link
    //       href={map}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className="py-3 group inline-flex items-center gap-x-3 uppercase text-[15px] text-gray-700 font-semibold transition-all"
    //     >
    //       <span className="group-hover:underline transition-all duration-300">
    //         {isRoomDetails ? "View Floor Plan" : "Resort Map"}
    //       </span>
    //       <HiArrowLongRight
    //         size={18}
    //         className="opacity-80 transform transition-all duration-300 group-hover:translate-x-1.5 group-hover:opacity-100 group-hover:scale-110"
    //       />
    //     </Link>
    //   </div>
    // </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-6">
      {/* LEFT — fade & slide from LEFT */}
      <motion.div
        className="space-y-4"
        variants={fadeLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h3 className="text-xl font-medium font-work-sans">
          {highlightContent.title}
        </h3>

        <div className="space-y-5">
          {highlightContent.highlights.map((item, index) => (
            <p key={index} className="text-gray-500 text-base">
              {item}
            </p>
          ))}
        </div>
      </motion.div>

      {/* RIGHT — fade & slide from RIGHT */}
      <motion.div
        className="md:pl-10 md:pt-10 md:border-l-2 md:border-gray-500"
        variants={fadeRight}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h3 className="text-2xl font-medium font-work-sans text-black">
          {isRoomDetails ? "Key" : "Resort"} highlights
        </h3>

        {highlightedList.map((item, index) => (
          <div
            className="flex items-center gap-x-4 text-gray-500 text-base my-5"
            key={index}
          >
            <div className="text-lg">
              <LuCircleCheckBig className="text-sea-green" />
            </div>
            <div>{item}</div>
          </div>
        ))}

        <Link
          href={map}
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 group inline-flex items-center gap-x-3 uppercase text-[15px] text-gray-700 font-semibold transition-all"
        >
          <span className="group-hover:underline transition-all duration-300">
            {isRoomDetails ? "View Floor Plan" : "Resort Map"}
          </span>
          <HiArrowLongRight
            size={18}
            className="opacity-80 transform transition-all duration-300 group-hover:translate-x-1.5 group-hover:opacity-100 group-hover:scale-110"
          />
        </Link>
      </motion.div>
    </div>
  );
};

export default HighlightTab;
