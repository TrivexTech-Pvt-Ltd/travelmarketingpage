import { MaldivesTourPackage } from "@/types/hotel.package.type";
import { MaldivesData, srilankanData } from "./data";

export const getMaldivesHotelBySlug = (
  slug: string
): MaldivesTourPackage | null => {
  return MaldivesData.find((hotel) => hotel.slug === slug) || null;
};

export const getSriLankanBySlug = (slug: string) => {
  return srilankanData.find((hotel) => hotel.slug === slug) || null;
};
