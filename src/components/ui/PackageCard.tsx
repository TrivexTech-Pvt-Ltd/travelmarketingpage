
"use client";

import Image from "next/image";
import { FiMapPin } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const fadeDown = {
  hidden: { opacity: 0, y: -40 },
  show: { opacity: 1, y: 0 },
};

interface TravelCardProps {
  name: string;
  location: string;
  image: string;
  title: string;
  slug: string;
  country?: string;
  nights: string;
}

const PackageCard = ({
  image,
  name,
  location,
  slug,
  country,
  title,
  nights,
}: TravelCardProps) => {
  return (
    <motion.div
      className="relative w-full overflow-hidden group"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      {/* Image */}
      <motion.div
        variants={fadeUp}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative h-96 md:h-[520px] 2xl:h-[620px] 4xl:h-[920px] w-full"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:bg-black/20 pointer-events-none" />

      {/* Text */}
      <motion.div
        variants={fadeDown}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="absolute bottom-10 left-0 right-0 px-6 text-white text-center"
      >
        <div className="flex justify-center items-center">
          <p className="text-sm 4xl:text-lg opacity-90 flex items-center gap-x-2 mx-auto capitalize">
            <FiMapPin /> {location}
          </p>
        </div>


        <h2 className="mt-2 text-2xl 4xl:text-4xl font-playfair-display font-medium">
          {name}
        </h2>

        {/* ONLY Sri Lanka shows nights */}
        {country === "sri-lanka" && (
          <p className="text-sm 4xl:text-lg opacity-90 mx-auto capitalize pt-3">
            {nights}
          </p>
        )}

        <Link
          href={`/${country}/${slug}`}
          className="mt-6 inline-block border shadow-md border-sea-green rounded-4xl bg-transparent text-sea-green px-6 py-3 
                     text-sm font-medium hover:bg-sea-green hover:text-white hover:scale-105  
                     transition-all duration-300"
        >
          More Info
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default PackageCard;
