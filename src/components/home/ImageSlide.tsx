import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react'
import { motion } from "framer-motion";

interface SliderProps {
    image: StaticImageData;
    country: string;
    title: string;
    activeSlide: number;
    height?: string;
}

const ImageSlide = ({ image, country, title, activeSlide, height }: SliderProps) => {
    return (
        <div className={`relative min-h-[60vh] sm:min-h-[60vh] md:min-h-[70vh] ${height} flex justify-center items-center`}>
            <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />
            <Image src={image} alt='hero' fill priority />
            <motion.div
                className="absolute z-20 text-white text-center space-y-6 px-4"
                initial={{ y: 170, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 1.6, ease: "easeOut" }}
                key={activeSlide}
            >
                <h4 className="text-2xl tracking-wide uppercase">{country}</h4>

                <h1 className="text-4xl sm:text-5xl md:text-7xl font-playfair-display font-medium leading-tight">
                    {title.split("\n").map((line: string, i: number) => (
                        <span key={i} className="block">
                            {line}
                        </span>
                    ))}
                </h1>
            </motion.div>
        </div>
    )
}

export default ImageSlide