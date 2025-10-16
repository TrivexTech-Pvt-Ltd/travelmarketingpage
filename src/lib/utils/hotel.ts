import { MaldivesData } from "./data"

export const getMaldivesHotelBySlug = (slug: string) => {
    return MaldivesData.find((hotel) => hotel.slug === slug) || null
}

const hotels = [
    {
        id:1,
        name:"Siyam World",
        featuredHotels: [
            2,4
        ]
        
    },
     {
        id:2,
        name:"Alila Kothaifaru",
        featuredHotels: [
            1,3
        ]
        
    },
     {
        id:3,
        name:"NH Maldives",
        featuredHotels: [
            2,4
        ]
        
    },
     {
        id:4,
        name:"Kudha Rah",
        featuredHotels: [
            2,3
        ]
        
    }
]