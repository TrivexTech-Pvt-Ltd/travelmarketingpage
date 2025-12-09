"use client";
import Link from "next/link";
import { slSliderNew, MalSliderNew } from "@/utils/data";
import ImageSlider from "../ui/ImageSlider";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const Destinations = () => {
  return (
    <div className="flex flex-col">

      {/* SRI LANKA SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* IMAGE */}
        <motion.div
          className="order-1 lg:order-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          variants={fadeInLeft}
        >
          <ImageSlider
            heroData={slSliderNew}
            height="h-96 lg:h-full xl:h-[680px] 4xl:h-[1080px]"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          className="order-2 lg:order-2 bg-soft-beige p-6 flex md:justify-center md:items-center flex-col lg:px-12 xl:px-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          variants={fadeInRight}
        >
          <div className="space-y-6 md:space-y-10 max-xl:mb-5">

            <motion.h3
              className="text-sea-green text-3xl sm:text-4xl md:text-5xl uppercase font-normal font-playfair-display"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Discover the Beauty <br /> of Sri Lanka
            </motion.h3>

            <motion.p
              className="text-base lg:text-xl text-gray-500 leading-7"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              The island of stories, ancient heritage, and untamed wilderness.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/sri-lanka"
                className="text-white w-fit flex items-center gap-x-2 text-sm rounded-md bg-sea-green py-3 px-6 sm:py-4 sm:px-8 border transition-all duration-300 hover:bg-transparent border-sea-green hover:text-sea-green hover:scale-105 font-medium"
              >
                View Destination <FiArrowRight size={16} />
              </Link>
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* MALDIVES SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* IMAGE */}
        <motion.div
          className="order-1 lg:order-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          variants={fadeInRight}
        >
          <ImageSlider
            heroData={MalSliderNew}
            height="h-96 lg:h-full xl:h-[680px] 4xl:h-[1080px]"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          className="order-2 lg:order-1 bg-soft-beige p-6 flex justify-center items-center flex-col lg:px-12 xl:px-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          variants={fadeInLeft}
        >
          <div className="space-y-6 md:space-y-10 max-xl:mb-5">

            <motion.h3
              className="text-sea-green text-3xl sm:text-4xl md:text-5xl uppercase font-normal font-playfair-display"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Luxury Travel in the <br /> Maldives
            </motion.h3>

            <motion.p
              className="text-base lg:text-xl text-gray-500 leading-7"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              The epitome of barefoot luxury, where time slows and nature breathes in colour.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/maldives"
                className="text-white text-sm w-fit flex items-center gap-x-2 rounded-md bg-sea-green py-3 px-6 sm:py-4 sm:px-8 border transition-all duration-300 hover:bg-transparent border-sea-green hover:text-sea-green hover:scale-105 font-medium"
              >
                View Destination <FiArrowRight size={16} />
              </Link>
            </motion.div>

          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default Destinations;
