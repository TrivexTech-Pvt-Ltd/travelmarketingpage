import { StaticImageData } from "next/image";
import { Hero1, Hero2, Hero3, Hero4, PackageM1, PackageM2, PackageM3, PackageM4, PackageM5, PackageM6 } from "./staticImages";

export const slideData = [
    {
        id: 1,
        image: Hero1,
        country: "Sri Lanka",
        text: " Sri Lanka Highlights\nJourney"

    },
    {
        id: 2,
        image: Hero2,
        country: "Maldives",
        text: "SO/ Maldives"

    },
    {
        id: 3,
        image: Hero3,
        country: "Maldives",
        text: "Siyam Worlds"

    },

    {
        id: 4,
        image: Hero4,
        country: "Maldives",
        text: "NOOE Maldives\nKunaavashi"

    },


]

export interface PackageType {
    name: string;
    description: string;
    title: string;
    location: string;
    nights: string;
    price: string;
    transfer: string;
    image: StaticImageData;
}

export const MaldivesData: PackageType[] = [
    {
        name: "Siyam World Maldives",
        title: "A Luxurious all-Inclusive getaway",
        description: "Siyam World Maldives Siyam World Maldives is a breathtaking 5-star luxury island resort offering an unparalleled all-inclusive experience.",
        location: "Noonu Atoll, Maldives",
        nights: "3 NIGHTS",
        price: "$3,499.00",
        transfer: "Seaplane Transfers",
        image: PackageM1,
    },
    {
        name: "NOOE Maldives Kunaavashi",
        title: "Pure Luxury & Serenity",
        description: "NOOE Maldives Kunaavashi is a luxury island retreat in the Vaavu Atoll, offering overwater and beachfront villas, world-class dining, and stunning marine adventures.",
        location: "Vaavu Atoll, Maldives",
        nights: "3 NIGHTS",
        price: "$1,999.00",
        transfer: "Seaplane Transfers",
        image: PackageM2,
    },
    {
        name: "NH Maldives Kuda Rah",
        title: "A perfect blend of relaxation & Adventure",
        description: "NH Maldives Kuda Rah is a luxurious island retreat in the South Ari Atoll, offering elegant overwater and beachfront villas, world-class dining, and breathtaking ocean views.",
        location: "South Ari Atoll, Maldives",
        nights: "3 NIGHTS",
        price: "$2,329.00",
        transfer: "Seaplane Transfers",
        image: PackageM3,
    },
    {
        name: "SO/ Maldives",
        title: "A Luxurious escape to exclusive beachfront villas",
        description: "SO/ Maldives is a stunning 5-star resort located on the private island of Hinnavaru in the Noonu Atoll, offering guests an exclusive retreat surrounded by crystal-clear waters and pristine white-sand beaches.",
        location: "Noonu Atoll, Maldives",
        nights: "3 NIGHTS",
        price: "$4,459.00",
        transfer: "Speedboat Transfers",
        image: PackageM4,
    },
    {
        name: "MÖVENPICK Resort Kuredhivaru Maldives",
        title: "Luxurious overwater villas, crystal-clear waters, and world-class amenities",
        description: "Mövenpick Resort Kuredhivaru Maldives is a luxurious resort located in the pristine Noonu Atoll, offering stunning overwater villas and beachfront bungalows with breathtaking views of turquoise waters.",
        location: "Noonu Atoll, Maldives",
        nights: "3 NIGHTS",
        price: "$4,459.00",
        transfer: "Seaplane Transfers",
        image: PackageM5,
    },
    {
        name: "Alila Kothaifaru Maldives",
        title: "Ultimate Relaxation in Crystal-clear waters",
        description: "Alila Kothaifaru Maldives is a luxurious resort nestled in the heart of the Maldives, offering an idyllic escape surrounded by pristine white-sand beaches and crystal-clear waters.",
        location: "North Raa Atoll, Maldives",
        nights: "3 NIGHTS",
        price: "$5,599.00",
        transfer: "Seaplane Transfers",
        image: PackageM6,
    },
];
