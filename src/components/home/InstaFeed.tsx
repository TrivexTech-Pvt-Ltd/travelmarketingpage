'use client';

import { instaFeedImages } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function InstaFeed() {


  return (
    <div className="max-w-7xl mx-auto px-4">

      <motion.p
        className="text-base lg:text-lg text-gray-500 leading-7 uppercase font-semibold text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        instagram feed
      </motion.p>


      <motion.h3
        className="text-sea-green text-3xl sm:text-4xl md:text-5xl uppercase font-normal font-playfair-display text-center py-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Stories in motion
      </motion.h3>


      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {instaFeedImages.map((post) => (
          <Link key={post.id} href={post.link} target="_blank">
            <div className="relative h-80 overflow-hidden rounded-md">
              <Image
                fill
                src={post.image}
                alt="instagram"
                className="object-cover transition duration-300 hover:scale-105 hover:opacity-95"
              />
            </div>
          </Link>
        ))}
      </motion.div>


      <motion.div
        className="flex justify-center py-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Link
          href="https://www.instagram.com/travelnationvip/"
          target="_blank"
          className="underline font-medium transition-all duration-300 hover:scale-105"
        >
          @TravelNation
        </Link>
      </motion.div>
    </div>
  );
}