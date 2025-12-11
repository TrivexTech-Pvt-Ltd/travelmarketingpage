"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import ImageSlider from "../ui/ImageSlider";
import {
  divingMarineLife,
  honeymoon,
  islandsAtolls,
  resortVillas,
} from "@/utils/maldivesData";
import FooterNote from "./FooterNote";
import { motion } from "framer-motion";

const fadeDown = {
  hidden: { opacity: 0, y: -40 },
  show: { opacity: 1, y: 0 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};
interface MaldivesOverviewProps {
  setActiveTab: (value: string) => void;
}
const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0 },
};
const MaldivesOverview = ({ setActiveTab }: MaldivesOverviewProps) => {
  return (
    <>
      <motion.div
        className="flex justify-center items-center max-w-7xl mx-auto my-8 sm:my-16 px-5 sm:px-0"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <div className="text-center">
          {/* Fade DOWN heading */}
          <motion.h3
            variants={fadeDown}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-sea-green text-3xl sm:text-4xl md:text-5xl font-normal uppercase font-playfair-display my-5"
          >
            Welcome to the Maldives
          </motion.h3>

          {/* Fade UP paragraph 1 */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-sm sm:text-lg text-gray-500 leading-7 sm:leading-8"
          >
            Where time slows, and tranquillity takes form in shades of blue. A
            paradise of coral islands floating like pearls across the Indian
            Ocean, this is where barefoot luxury meets untouched nature.
          </motion.p>

          {/* Fade UP paragraph 2 */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-sm sm:text-lg text-gray-500 leading-7 sm:leading-8"
          >
            Sail across turquoise waters at sunset, dive into coral gardens
            alive with colour, or simply lose track of time beneath the open
            sky.
          </motion.p>
        </div>
      </motion.div>
      {/* RESORTS & VILLAS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* IMAGE — slides in from RIGHT */}
        <motion.div
          className="order-1 lg:order-2 h-full w-full"
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <ImageSlider
            heroData={resortVillas}
            height="h-96 lg:h-full xl:h-[680px] 4xl:h-[1080px]"
          />
        </motion.div>

        {/* TEXT — slides in from LEFT */}
        <motion.div
          className="flex justify-center items-center bg-soft-beige h-full order-2 lg:order-1 lg:px-16 px-5"
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="pr-2">
            <h3 className="text-sea-green text-3xl sm:text-4xl md:text-5xl font-normal uppercase font-playfair-display my-5">
              Resorts <span className="font-libreBaskerville">&</span> Villas
            </h3>

            <p className="text-shadow-wash text-base lg:text-xl uppercase font-medium my-5 max-w-prose mx-auto">
              Your Private Haven
            </p>

            <p className="text-sm lg:text-lg text-gray-500 mb-6 sm:mb-8 leading-7 sm:leading-8 max-w-prose mx-auto">
              From overwater villas to beachfront sanctuaries, every stay in the
              Maldives redefines luxury. Travel Nation partners with exclusive
              resorts that blend modern design with nature&apos;s beauty, where
              sunrise breakfasts and sunset champagne are part of everyday life.
            </p>

            <p className="text-sm lg:text-lg text-gray-500 mb-6 sm:mb-8 leading-7 sm:leading-8 max-w-prose mx-auto">
              Each resort is carefully chosen to match your style, whether
              intimate and boutique or grand and iconic.
            </p>
          </div>
        </motion.div>
      </div>
      {/* DIVING & MARINE LIFE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* IMAGE — slides in from LEFT */}
        <motion.div
          className="order-1 lg:order-1 h-full w-full"
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <ImageSlider
            heroData={divingMarineLife}
            height="h-96 lg:h-full xl:h-[680px] 4xl:h-[1080px]"
          />
        </motion.div>

        {/* TEXT — slides in from RIGHT */}
        <motion.div
          className="flex justify-center items-center bg-soft-beige h-full order-2 lg:order-2 lg:px-16 px-5"
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="pr-2">
            <h3 className="text-sea-green text-3xl sm:text-4xl md:text-5xl font-normal uppercase font-playfair-display my-5">
              Diving <span className="font-libreBaskerville">&</span> Marine
              Life
            </h3>

            <p className="text-shadow-wash text-base lg:text-xl uppercase font-medium my-5 max-w-prose mx-auto">
              Beneath the Blue
            </p>

            <p className="text-sm lg:text-lg text-gray-500 mb-6 sm:mb-8 leading-7 sm:leading-8 max-w-prose mx-auto">
              The Maldives is one of the world&apos;s greatest underwater
              playgrounds. Home to manta rays, whale sharks, and vibrant coral
              gardens, every dive or snorkel feels like entering another world.
            </p>

            <p className="text-sm lg:text-lg text-gray-500 mb-6 sm:mb-8 leading-7 sm:leading-8 max-w-prose mx-auto">
              Whether you are a beginner or a certified diver, our handpicked
              experiences let you explore the atolls with trusted guides and
              top-tier safety.
            </p>
          </div>
        </motion.div>
      </div>
      {/* ROMANCE & HONEYMOONS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* IMAGE — slides in from RIGHT */}
        <motion.div
          className="order-1 lg:order-2 h-full w-full"
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <ImageSlider
            heroData={honeymoon}
            height="h-96 lg:h-full xl:h-[680px] 4xl:h-[1080px]"
          />
        </motion.div>

        {/* TEXT — slides in from LEFT */}
        <motion.div
          className="flex justify-center items-center bg-soft-beige h-full order-2 lg:order-1 lg:px-16 px-5"
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="pr-2">
            <h3 className="text-sea-green text-3xl sm:text-4xl md:text-5xl font-normal uppercase font-playfair-display my-5">
              Romance <span className="font-libreBaskerville">&</span>{" "}
              Honeymoons
            </h3>

            <p className="text-shadow-wash text-base lg:text-xl uppercase font-medium my-5 max-w-prose mx-auto">
              Where Love Meets the Horizon
            </p>

            <p className="text-sm lg:text-lg text-gray-500 mb-6 sm:mb-8 leading-7 sm:leading-8 max-w-prose mx-auto">
              Few places on earth are as effortlessly romantic as the Maldives.
              Imagine walking barefoot on powder-white sand, sharing candlelit
              dinners by the ocean, or sailing into the sunset aboard a private
              catamaran.
            </p>

            <p className="text-sm lg:text-lg text-gray-500 mb-6 sm:mb-8 leading-7 sm:leading-8 max-w-prose mx-auto">
              Our honeymoon escapes are designed for intimacy, indulgence, and
              unforgettable moments — where every day feels like a dream.
            </p>
          </div>
        </motion.div>
      </div>
      {/* ATOLLS & ISLANDS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* IMAGE — fade & slide from LEFT */}
        <motion.div
          className="order-1 lg:order-1 h-full w-full"
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <ImageSlider
            heroData={islandsAtolls}
            height="h-96 lg:h-full xl:h-[680px] 4xl:h-[1080px]"
          />
        </motion.div>

        {/* TEXT — fade & slide from RIGHT */}
        <motion.div
          className="flex justify-center items-center bg-soft-beige h-full order-2 lg:order-2 lg:px-16 px-5"
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="pr-2">
            <h3 className="text-sea-green text-3xl sm:text-4xl md:text-5xl font-normal uppercase font-playfair-display my-5">
              Atolls <span className="font-libreBaskerville">&</span> Islands
            </h3>

            <p className="text-shadow-wash text-base lg:text-xl uppercase font-medium my-5 max-w-prose mx-auto">
              Each with Its Own Soul
            </p>

            <div className="flex flex-col gap-y-6 sm:pl-8 py-4 max-w-prose mx-auto">
              {[
                {
                  title: "North Malé Atoll",
                  desc: "Close to the capital and perfect for first-time visitors, offering a mix of luxury resorts, great nightlife, and easy transfers.",
                },
                {
                  title: "South Malé Atoll",
                  desc: "Quieter and more secluded, ideal for couples seeking serenity with exceptional diving sites.",
                },
                {
                  title: "Ari Atoll",
                  desc: "Famous for its marine diversity, with some of the Maldives's best dive spots and elegant resorts.",
                },
                {
                  title: "Baa Atoll",
                  desc: "UNESCO Biosphere Reserve, home to manta rays, coral gardens, and luxurious eco-retreats.",
                },
                {
                  title: "Lhaviyani & Noonu Atolls",
                  desc: "Ideal for off-the-beaten-path travellers looking for untouched lagoons and peaceful seclusion.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-x-4">
                  <div className="w-8 h-8">
                    <IoCheckmarkDoneSharp className="text-sea-green text-lg" />
                  </div>
                  <div className="text-sm sm:text-base text-gray-500">
                    <strong>{item.title} – </strong>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      {/* FOOTER NOTE */}
      <motion.div
        className="my-16 px-5 lg:px-56"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {/* Heading – fade DOWN */}
        <motion.h4
          variants={fadeDown}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-semibold text-shadow-wash uppercase text-xl my-2 max-w-prose mx-auto text-center"
        >
          The Maldives is more than a holiday, it is an experience of stillness,
          elegance, and connection.
        </motion.h4>

        {/* Paragraph – fade UP */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-gray-500 text-base md:text-xl py-3 italic text-center leading-9 max-w-prose mx-auto"
        >
          "At Travel Nation, we bring you handpicked island escapes designed for
          pure indulgence, from private villas suspended above crystal lagoons
          to beachfront sanctuaries shaded by palms. Whether it is a romantic
          getaway, a family retreat, or a wellness escape, every stay is wrapped
          in serenity."
        </motion.p>
      </motion.div>
      <FooterNote />
    </>
  );
};

export default MaldivesOverview;
