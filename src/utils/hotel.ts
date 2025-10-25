import { MaldivesData, srilankanData } from "./data"

export const getMaldivesHotelBySlug = (slug: string) => {
    return MaldivesData.find((hotel) => hotel.slug === slug) || null
}

export const getSriLankanBySlug = (slug: string) => {
    return srilankanData.find((hotel) => hotel.slug === slug) || null
}
