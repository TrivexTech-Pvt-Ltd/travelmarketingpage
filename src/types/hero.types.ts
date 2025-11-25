import { StaticImageData } from "next/image";

// --------- Hero -----------
// export interface HeroType {
//     id: number;
//     image: StaticImageData;
//     country: string;
//     text: string;
//     link: string;
// }
export interface HeroType {
  id: number;
  video: string; // path to mp4
}

export type ImageSliderType = {
  id: number;
  image: StaticImageData;
};
