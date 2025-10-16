import { StaticImageData } from "next/image";
import { Accommodation1, Accommodation2, Accommodation3, Accommodation4, AdventureActivities, CustomPackage, DestinationMastery, Dining1, Dining2, Dining3, HandpickedStays, Hero1, Hero2, Hero3, Hero4, Hero5, Hero6, Hero7, Hero8, IconicExperiences, LuxuryHotel, PackageM1, PackageM2, PackageM3, PackageM4, PackageM5, PackageM6, PackageSL1, PackageSL2, PackageSL3, ResortActivities, SafeTravelling, TailoredPerfection, UnparalleledService, WellnessSpa, SiyamWorldsLogo, NooeMaldivesLogo } from "./staticImages";

//Home Page Hero
export const slideData = [
    {
        id: 1,
        image: Hero1,
        country: "Maldives",
        text: "Siyam Worlds"

    },
    {
        id: 2,
        image: Hero2,
        country: "Maldives",
        text: "NOOE Maldives\nKunaavashi"

    },

    {
        id: 3,
        image: Hero3,
        country: "Sri Lanka",
        text: " Sri Lanka Experience"

    },
    {
        id: 4,
        image: Hero4,
        country: "Maldives",
        text: "NH Maldives Kuda Rah"

    },
    {
        id: 5,
        image: Hero5,
        country: "Maldives",
        text: "SO/ Maldives"

    },
    {
        id: 6,
        image: Hero6,
        country: "Sri Lanka",
        text: "Sri Lanka Highlights\nJourney"

    },
    {
        id: 7,
        image: Hero7,
        country: "Maldives",
        text: "Movenpick Resort\nKurendhivaru"

    },
    {
        id: 8,
        image: Hero8,
        country: "Maldives",
        text: "Alila Kothaifaru\nMaldives"

    },



]

export interface PackageType {
    name: string;
    description: string;
    title: string;
    location: string;
    nights: string;
    price: string;
    transfer?: string;
    image: StaticImageData;
}

//Maldives tour packages
export const MaldivesData = [
    {
        id: "eb8801d0-d377-4721-8ae5-c09f8ec4c45c",
        name: "Siyam World Maldives",
        title: "A Luxurious all-Inclusive getaway",
        price: 3499,
        slug: "siyam-world-maldives",
        description: "Siyam World Maldives Siyam World Maldives is a breathtaking 5-star luxury island resort offering an unparalleled all-inclusive experience.",
        descriptionLong: "Siyam World Maldives is a breathtaking 5-star luxury island resort offering an unparalleled all-inclusive experience. Spanning across 54 hectares in the Noonu Atoll, this resort offers an unlimited WOW! experience with endless dining, adventure, and entertainment. Whether you seek relaxation, thrilling water sports, or vibrant nightlife, Siyam World delivers an unparalleled Maldives escape.",
        location: "Noonu Atoll, Maldives",
        nights: "3 NIGHTS",
        transfer: "Seaplane Transfers",
        image: PackageM1,
        logo: SiyamWorldsLogo,
        stays: [
            {
                name: "Water Villa with Pool + Slide",
                threeNightPrice: 3499,
                fourNightPrice: 3869
            },
            {
                name: "Sunset Pool Beach Villa",
                threeNightPrice: 3499,
                fourNightPrice: 3869
            },
            {
                name: "Lagoon Villa with Pool + Slide",
                threeNightPrice: 3799,
                fourNightPrice: 4269
            }
        ],
        inclusions: {
            description: "Additional Inclusions (Minimum 3-Night Stay)",
            list: [
                "Premium 24-hour WOW! All-Inclusive Plan",
                "Unlimited dining at multiple specialty restaurants",
                "Unlimited alcoholic & non-alcoholic beverages",
                "Round-trip seaplane transfers",
                "Complimentary 60-minute massage for 2 adults",
                "Access to the Maldives' largest floating water park",
                "Non-motorized water sports & activities",
                "Live DJ, beach parties & entertainment",
                "Fitness & wellness activities, yoga, and kids’ programs"
            ],

        },
        honeymoonInclusions: {
            description: "A minimum 3-night stay is required. A marriage certificate/registration dated within the last 12 months must be presented at the time of booking.",
            list: [
                "1 bottle of sparkling wine & a fruit basket on arrival",
                "Romantic honeymoon dinner with a decorated table at an à la carte restaurant",
                "Special evening turn-down service with bed decoration on arrival night",
                "1 celebratory honeymoon cake"
            ],
        },
        bdayAnvInclusions: [
            "1 bottle of sparkling wine & a fruit basket on arrival",
            "Fruit basket on arrival day"
        ],
        resortHighlights: [
            "The stylish collection of 80 villas with private pool",
            "15-minute speedboat ride from Malé International Airport",
            "Overlooking the Emboodhoo Lagoon home to diverse marine life",
            "Few minutes’ boat ride from CROSSROADS Maldives",
            "Diverse dining, a sophisticated playful beach club and serene spa",
            "Island Couture",
            "Malé Velana International Airport"
        ],
        accommodation: [
            {
                name: "Lagoon water pool villa",
                area: "120 sqm",
                pax: 2,
                features: [
                    "Located over water in the lagoon",
                    "Short swim to the reef",
                    "Glass facade villa",
                    "Infinity pool and private deck"
                ],
                images: [
                    Accommodation1,
                    Accommodation2,
                    Accommodation3,
                    Accommodation4
                ]
            }
        ],
        dinings: [
            {
                name: "Andalucia Resturant",
                description: "The Citronelle Club is a welcoming restaurant inspired by the flavours of Asia, the guest profile here being foodies that love full-flavoured dishes to share in large parties. The kitchens are the main event and the finishes used are to be rustic Asian-inspired bricks, tiles and timber panelling.",
                images: [
                    Dining1,
                    Dining2,
                    Dining3

                ]
            },
            {
                name: "The Citronelle Club",
                description: "The Citronelle Club is a welcoming restaurant inspired by the flavours of Asia, the guest profile here being foodies that love full-flavoured dishes to share in large parties. The kitchens are the main event and the finishes used are to be rustic Asian-inspired bricks, tiles and timber panelling.",
                images: [
                    Dining1,
                    Dining2,
                    Dining3

                ]
            },
            {
                name: "Barrrique Resturant",
                description: "The Citronelle Club is a welcoming restaurant inspired by the flavours of Asia, the guest profile here being foodies that love full-flavoured dishes to share in large parties. The kitchens are the main event and the finishes used are to be rustic Asian-inspired bricks, tiles and timber panelling.",
                images: [
                    Dining1,
                    Dining2,
                    Dining3

                ]
            }
        ],
        wellnessSpa: {
            title: "Lagoon Water Pool Villa",
            description: "The Citronelle Club is a welcoming restaurant inspired by the flavours of Asia, the guest profile here being foodies that love full-flavoured dishes to share in large parties. The kitchens are the main event and the finishes used are to be rustic Asian-inspired bricks, tiles and timber panelling.",
            image: WellnessSpa
        },
        activities: {
            title: "Water Adventures & Excursions",
            description: "An array of paid and complimentary water-based adventures including kayaking, parasailing, snorkeling, jet ski, stand-up paddleboarding, and offsite excursions are available to further enhance travelers’ experience of the island.\nGuests can learn how to scuba dive, or for experienced divers, there is a wide selection of curated dives that can be arranged daily including turtle expeditions, outer reef explorations and traditional Maldivian fishing excursions.",
            image: ResortActivities

        },
        direction: {
            description: "A 15-minute speedboat ride from Malé International Airport whisks you away to a private island in this idyllic archipelago overlooking the Emboodhoo Lagoon. Introducing a new generation of luxury for modern adventurers.",
            mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.879609110734!2d73.35665487581474!3d5.730475231868851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b6b49000000070d%3A0x78a59fe2dd50922!2sSiyam%20World%20Maldives!5e0!3m2!1sen!2slk!4v1760547149905!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        },
        featuredHotels: [
            "d0e3f36a-e4bb-4312-aba6-aa5292f7b026",
            "f2f02ff2-1dd2-405a-a140-726ae84fa8a3",
            "f540cbb7-0314-4aae-923d-dc9e518998de"
        ]
    },
    {
        id: "d0e3f36a-e4bb-4312-aba6-aa5292f7b026",
        name: "NOOE Maldives Kunaavashi",
        title: "Pure Luxury & Serenity",
        slug: "siyam-world-maldives",
        description: "NOOE Maldives Kunaavashi is a luxury island retreat in the Vaavu Atoll, offering overwater and beachfront villas, world-class dining, and stunning marine adventures.",
        descriptionLong: "NOOE Maldives Kunaavashi is a luxury island retreat in the Vaavu Atoll, offering overwater and beachfront villas, world-class dining, and stunning marine adventures. With crystal-clear waters, vibrant coral reefs, and a serene ambiance, it’s the perfect escape for relaxation and adventure.",
        location: "Vaavu Atoll, Maldives",
        nights: "3 NIGHTS",
        price: 1999,
        transfer: "Seaplane Transfers",
        image: PackageM2,
        logo: NooeMaldivesLogo,
        inclusions: {
            description: "Additional Inclusions (Minimum 3-Night Stay)",
            list: [
                "Daily Breakfast & Dinner at the main restaurant",
                "Access to resort facilities, including the infinity pool & fitness center",
                "Complimentary snorkeling gear & selected non-motorized water sports",
                "Round-trip speedboat transfers",
                "30% discount on spa treatments (excludes retail products)",
                "Floating breakfast for 2 adults (once per stay, pool villas only)",
                "Non-motorized water sports activities (Kayak & Paddleboard)",
                "In-villa espresso machine, tea & coffee facilities",
            ],

        },
        honeymoonInclusions: {
            description: "A minimum 3-night stay is required. A marriage certificate/registration dated within the last 12 months must be presented at the time of booking.",
            list: [
                "Welcome amenity & romantic bed decoration",
                "Spa & souvenir shop discount voucher",
                "Bottle of wine/sparkling juice + dessert selection",
            ],
        },
        resortHighlights: [
            "The stylish collection of 80 villas with private pool",
            "15-minute speedboat ride from Malé International Airport",
            "Overlooking the Emboodhoo Lagoon home to diverse marine life",
            "Few minutes’ boat ride from CROSSROADS Maldives",
            "Diverse dining, a sophisticated playful beach club and serene spa",
            "Island Couture",
            "Malé Velana International Airport"
        ],
        accommodation: [
            {
                name: "Lagoon water pool villa",
                area: "120 sqm",
                pax: 2,
                features: [
                    "Located over water in the lagoon",
                    "Short swim to the reef",
                    "Glass facade villa",
                    "Infinity pool and private deck"
                ],
                images: [
                    Accommodation1,
                    Accommodation2,
                    Accommodation3,
                    Accommodation4
                ]
            }
        ],
        dinings: [
            {
                name: "Andalucia Resturant",
                description: "The Citronelle Club is a welcoming restaurant inspired by the flavours of Asia, the guest profile here being foodies that love full-flavoured dishes to share in large parties. The kitchens are the main event and the finishes used are to be rustic Asian-inspired bricks, tiles and timber panelling.",
                images: [
                    Dining1,
                    Dining2,
                    Dining3

                ]
            },
            {
                name: "The Citronelle Club",
                description: "The Citronelle Club is a welcoming restaurant inspired by the flavours of Asia, the guest profile here being foodies that love full-flavoured dishes to share in large parties. The kitchens are the main event and the finishes used are to be rustic Asian-inspired bricks, tiles and timber panelling.",
                images: [
                    Dining1,
                    Dining2,
                    Dining3

                ]
            },
            {
                name: "Barrrique Resturant",
                description: "The Citronelle Club is a welcoming restaurant inspired by the flavours of Asia, the guest profile here being foodies that love full-flavoured dishes to share in large parties. The kitchens are the main event and the finishes used are to be rustic Asian-inspired bricks, tiles and timber panelling.",
                images: [
                    Dining1,
                    Dining2,
                    Dining3

                ]
            }
        ],
        wellnessSpa: {
            title: "Lagoon Water Pool Villa",
            description: "The Citronelle Club is a welcoming restaurant inspired by the flavours of Asia, the guest profile here being foodies that love full-flavoured dishes to share in large parties. The kitchens are the main event and the finishes used are to be rustic Asian-inspired bricks, tiles and timber panelling.",
            image: WellnessSpa
        },
        activities: {
            title: "Water Adventures & Excursions",
            description: "An array of paid and complimentary water-based adventures including kayaking, parasailing, snorkeling, jet ski, stand-up paddleboarding, and offsite excursions are available to further enhance travelers’ experience of the island.\nGuests can learn how to scuba dive, or for experienced divers, there is a wide selection of curated dives that can be arranged daily including turtle expeditions, outer reef explorations and traditional Maldivian fishing excursions.",
            image: ResortActivities

        },
        direction: {
            description: "A 15-minute speedboat ride from Malé International Airport whisks you away to a private island in this idyllic archipelago overlooking the Emboodhoo Lagoon. Introducing a new generation of luxury for modern adventurers.",
            mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.78387728504!2d73.36210477581298!3d3.636736749960175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b40ab277acbc16b%3A0x4969a487361598b4!2sNOOE%20Maldives%20Kunaavashi!5e0!3m2!1sen!2slk!4v1760574930140!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        },
        featuredHotels: [
            "eb8801d0-d377-4721-8ae5-c09f8ec4c45c",
            "9345f679-21be-4067-a1f7-c00b67d2d4e3",
            "ec37735e-8b69-451c-871d-e5da508c5f9e"
        ]
    },
    {
        id: "ec37735e-8b69-451c-871d-e5da508c5f9e",
        name: "NH Maldives Kuda Rah",
        title: "A perfect blend of relaxation & Adventure",
        slug: "siyam-world-maldives",
        description: "NH Maldives Kuda Rah is a luxurious island retreat in the South Ari Atoll, offering elegant overwater and beachfront villas, world-class dining, and breathtaking ocean views.",
        descriptionLong: "NH Maldives Kuda Rah Resort offers the perfect blend of relaxation and adventure. Stay at the best resort in Maldives to enjoy the lounge by the pool in your overwater villa, swim in our crystal-clear lagoon and enjoy signature treatments at our spa. Discover world-class dive sites, then unwind with delicious dining and chilled cocktails as the stars light up the night sky. Welcome to your island paradise.",
        location: "South Ari Atoll, Maldives",
        nights: "3 NIGHTS",
        price: 2329,
        transfer: "Seaplane Transfers",
        image: PackageM3,
    },
    {
        id: "9345f679-21be-4067-a1f7-c00b67d2d4e3",
        name: "SO/ Maldives",
        title: "A Luxurious escape to exclusive beachfront villas",
        slug: "siyam-world-maldives",
        description: "SO/ Maldives is a stunning 5-star resort located on the private island of Hinnavaru in the Noonu Atoll, offering guests an exclusive retreat surrounded by crystal-clear waters and pristine white-sand beaches.",
        location: "Noonu Atoll, Maldives",
        nights: "3 NIGHTS",
        price: "$4,459.00",
        transfer: "Speedboat Transfers",
        image: PackageM4,
    },
    {
        id: "f2f02ff2-1dd2-405a-a140-726ae84fa8a3",
        name: "MÖVENPICK Resort Kuredhivaru Maldives",
        title: "Luxurious overwater villas, crystal-clear waters, and world-class amenities",
        slug: "siyam-world-maldives",
        description: "Mövenpick Resort Kuredhivaru Maldives is a luxurious resort located in the pristine Noonu Atoll, offering stunning overwater villas and beachfront bungalows with breathtaking views of turquoise waters.",
        location: "Noonu Atoll, Maldives",
        nights: "3 NIGHTS",
        price: "$4,459.00",
        transfer: "Seaplane Transfers",
        image: PackageM5,
    },
    {
        id: "f540cbb7-0314-4aae-923d-dc9e518998de",
        name: "Alila Kothaifaru Maldives",
        title: "Ultimate Relaxation in Crystal-clear waters",
        slug: "siyam-world-maldives",
        description: "Alila Kothaifaru Maldives is a luxurious resort nestled in the heart of the Maldives, offering an idyllic escape surrounded by pristine white-sand beaches and crystal-clear waters.",
        location: "North Raa Atoll, Maldives",
        nights: "3 NIGHTS",
        price: "$5,599.00",
        transfer: "Seaplane Transfers",
        image: PackageM6,
    },
];

//Sri Lankan tour packages
export const srilankanData = [
    {
        name: "Sri Lanka Experience",
        title: "Sri Lanka Journeys",
        slug: "siyam-world-maldives",
        description: "Experience the highlights of this emerald island nation on a luxury 10-day Classic Sri Lanka journey.",
        location: "Sri Lanka",
        nights: "9 NIGHTS / 10 Days",
        price: "$1,299.00",
        image: PackageSL1,
    },
    {
        name: "Sri Lanka Highlights",
        title: "Sri Lanka Journeys",
        slug: "siyam-world-maldives",
        description: "Soak up the culture, history, and landscapes of Sri Lanka as you visit Colombo, Dambulla, Kandy, Bogawantalawa Valley, Tangalle, and Galle, all while staying at some of the most luxurious hotels the country has to offer.",
        location: "Sri Lanka",
        nights: "5 NIGHTS / 6 Days",
        price: "$999.00",
        image: PackageSL2,
    },
    {
        name: "Swift Escape to Sri Lanka's Hills & Shores",
        title: "Sri Lanka Journeys",
        slug: "siyam-world-maldives",
        description: "Criss-cross the island from the historically-rich central province to the verdant mountains in the heart of the island and finally to the southernmost palm-fringed shores.",
        location: "Sri Lanka",
        nights: "3 NIGHTS / 4 Days",
        price: "$499.00",
        image: PackageSL3,
    },
]

//intro
export const servicesData = [
    {
        id: 1,
        image: CustomPackage,
        description: "We design personalized itineraries that match your preferences, budget, and travel style."
    },
    {
        id: 2,
        image: LuxuryHotel,
        description: "Stay at carefully selected hotels and resorts that offer comfort and authentic experiences."
    },
    {
        id: 3,
        image: AdventureActivities,
        description: "From hiking to water sports, we arrange thrilling activities for adventure enthusiasts."
    },
    {
        id: 4,
        image: SafeTravelling,
        description: "Travel with confidence and peace of mind. Our Safe Travelling service ensures secure, comfortable, and well-organized journeys"
    },
]

export const dedicatedServices = [
    {
        id: 1,
        image: TailoredPerfection,
        title: "Tailored Perfection"
    },
    {
        id: 2,
        image: DestinationMastery,
        title: "Destination Mastery"
    },
    {
        id: 3,
        image: UnparalleledService,
        title: "Unparalled Services"
    },
    {
        id: 4,
        image: HandpickedStays,
        title: "Handpicked Stays"
    },
    {
        id: 5,
        image: IconicExperiences,
        title: "Iconic Experiences"
    }
]

