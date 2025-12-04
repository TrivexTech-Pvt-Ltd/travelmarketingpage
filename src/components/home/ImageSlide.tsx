import Image, { StaticImageData } from 'next/image';
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
            <Image src={image} alt='hero' fill priority className='object-fill' />
            <motion.div
                className="absolute z-20 text-white text-center space-y-6 px-4"
                initial={{ y: 170, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 1.6, ease: "easeOut" }}
                key={activeSlide}
            >
            </motion.div>
        </div>
    )
}

export default ImageSlide