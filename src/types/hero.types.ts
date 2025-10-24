import { StaticImageData } from "next/image";

// --------- Hero -----------
export interface HeroType {
    id: number;
    image: StaticImageData;
    country: string;
    text: string;
    link: string;
}

export type ImageSliderType = {
    id: number;
    image: StaticImageData;
}