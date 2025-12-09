import { StaticImageData } from "next/image";

// --------- Hero -----------
// export interface HeroType {
//     id: number;
//     image: StaticImageData;
//     country: string;
//     text: string;
//     link: string;
// }
// export interface HeroType {
//   id: number;
//   video: string; // path to mp4
// }

export interface HeroTypeImage {
  id: number;
  image: string;
  country: string;
  title: string;
}

export interface HeroType {
  id: number;
  image?: string; // optional
  video?: string; // optional
  country?: string;
  text?: string;
  link?: string;
}

export type ImageSliderType = {
  id: number;
  image: string;
};
