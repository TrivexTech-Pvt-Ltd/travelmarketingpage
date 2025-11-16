import { StaticImageData } from "next/image";
import {
    Accommodation1,
    Accommodation2,
    Accommodation3,
    Accommodation4,
    AdventureActivities,
    CustomPackage,
    DestinationMastery,
    Dining1,
    Dining2,
    Dining3,
    HandpickedStays,
    Hero1,
    Hero2,
    Hero3,
    Hero4,
    Hero5,
    Hero6,
    Hero7,
    Hero8,
    IconicExperiences,
    LuxuryHotel,
    PackageM1,
    PackageM2,
    PackageM3,
    PackageM4,
    PackageM5,
    PackageM6,
    PackageSL1,
    PackageSL2,
    PackageSL3,
    ResortActivities,
    SafeTravelling,
    TailoredPerfection,
    UnparalleledService,
    WellnessSpa,
    SiyamWorldsLogo,
    NooeMaldivesLogo,
    SWStay1,
    SWStay2,
    SWStay3,
    NHKudaRahLogo,
    SLBeach,
    ColomboSL,
    TempleOfTooth,
    Galle,
    NuwaraEliya,
    SoLogo,
    SoMaldives3,
    SoMaldives1,
    SoMaldives2,
    SOStay1,
    SWHero2,
    SWHero3,
    SWHero4,
    NooeStay1,
    NooeStay2,
    NooeStay3,
    NooeHero3,
    NooeHero2,
    NHHero2,
    NHHero3,
    NHHero4,
    MovenpickLogo,
    MVPHero2,
    MVPHero3,
    MVPHero4,
    MVPStay1,
    MVPStay2,
    MVPStay3,
    AlilaLogo,
    AlilaHero2,
    AlilaHero3,
    AlilaHero4,
    AlilaStay1,
    AlilaStay2,
    AlilaStay3,
    MVPHero5,
    LhAtollHero,
    SunBedIcon,
    FloatIcon,
    DinnerIcon,
    HotelBedIcon,
    NooeHero4,
    AlilaHero5,
    AlilaHero6,
    MVPHero6,
    MVPHero7,
    SoMaldives4,
    SoMaldives5,
    BaaAtoll,
    LhaviyaniAtoll,
    AtollLocation4,
    AtollLocation2,
    AtollLocation1,
    AtollLocation3,
    NorthMaleAtoll,
    SouthMaleAtoll,
    AriAtoll,
    VaavuAtoll,
    SoMaldives6,
    NooeHero5,
    NineArch,
    SLCulture,
    SLWaterSport,
    SigiriyaRock,
    UpcountryDance,
    DambullaTemple,
    FireDance,
    CulturalDance,
    SlWildLife1,
    SlWildLife2,
    SlWildLife3,
    SlWildLife4,
    CinnamonBay,
    Personalized,
    Autheticity,
    EcoLight,
    Excellence,
    Explore,
    Honesty,
    Quality,
    CustomerCentric,
    GoldiSandsHotel,
    LyndenHotel,
    BlueWaterHotel,
    CinnamonLakeside,
    CinnamonLodge,
    TheGrandHotel,
    AraliyaHotel,
    CinnamonBey,
    CinnamonCitadel,
    AKAccom1,
    AKAccom2,
    AKAccom4,
    AKAccom3,
    AKAccom5,
    AKAccom6,
    AKAccom7,
    AKAccom8,
    AKAccom9,
    AKAccom10,
    AKAccom11,
    AKAccom12,
    AKSlt1,
    AKSlt2,
    AKSlt3,
    AKSlt4,
    AKSlt5,
    AKMB1,
    AKMB2,
    AKMB3,
    AKUM1,
    AKUM2,
    AKUM3,
    AKYKB2,
    AKYKB3,
    AKYKB1,
    AKPSM1,
    AKPSM2,
    AKPSM3,
    AKTS1,
    AKTS2,
    AKTS3,
    AKTS4,
    AKTS5,
    AKSPAL1,
    AKSPAL2,
    AKSPAL3,
    AKSPAL4,
    AKSPAL5,
    AKFC1,
    AKFC2,
    AKFC3,
    AKWSDA1,
    AKWSDA2,
    AKWSDA3,
    AKWSDA4,
    AKWSDA5,
    AKAOC1,
    AKAOC2,
    AKAOC3,
    AKDE5,
    AKDE4,
    AKDE3,
    AKDE2,
    AKDE1,
    AKWE1,
    AKWE2,
    AKWE3,
    AKGA4,
    AKGA3,
    AKGA2,
    AKGA1,
    AKSPG,
    SMAccom1,
    SMAccom2,
    SMAccom3,
    SMAccom4,
    SMAccom5,
    SMAccom6,
    SMAccom7,
    SMAccom8,
    SMAccom9,
    SMAccom10,
    SMAccom11,
    SMAccom12,
    SMAccom13,
    SMAccom14,
    SMAccom15,
    SMAccom16,
    SMAccom17,
    SMAccom18,
    SMAccom19,
    SMAccom20,
    SMAccom21,
    SMAccom22,
    SMAccom23,
    SMAccom24,
    SMAccom25,
    SMAccom26,
    SMAccom27,
    SMAccom28,
    SMAccom29,
    SMAccom30,
    SMAccom31,
    SMAccom32,
    SMAccom33,
    SMAccom34,
    SMAccom35,
    SMAccom36,
    SMAccom37,
    SMAccom38,
    SMAccom39,
    SMAccom40,
    SMAccom41,
    SMAccom42,
    SMAccom43,
    SMAccom44,
    SMTCC1,
    SMTCC2,
    SMTCC3,
    SMLB3,
    SMLB2,
    SMLB1,
    SMHB4,
    SMHB3,
    SMHB2,
    SMHB1,
    SMSpa1,
    SMSpa2,
    SMSpa3,
    SMSpa4,
    SMSpa5,
    SMSpa6,
    SMACT1,
    SMACT2,
    SMACT3,
    SMACT4,
} from "./staticImages";
import { MaldivesTourPackage } from "@/types/hotel.package.type";

//Home Page Hero
export const slideData = [
    {
        id: 1,
        image: Hero1,
        country: "Maldives",
        text: "Siyam Worlds",
        link: "/maldives/siyam-world-maldives"
    },
    {
        id: 2,
        image: Hero2,
        country: "Maldives",
        text: "NOOE Maldives\nKunaavashi",
        link: "/maldives/nooe-maldives-kunaavashi"
    },

    {
        id: 3,
        image: Hero3,
        country: "Sri Lanka",
        text: "Sri Lanka Experience",
        link: "/srilanka/sri-lanka-experience-tour-itinerary"
    },
    {
        id: 4,
        image: Hero4,
        country: "Maldives",
        text: "NH Maldives Kuda Rah",
        link: "/maldives/nh-maldives-kuda-rah"
    },
    {
        id: 5,
        image: Hero5,
        country: "Maldives",
        text: "SO/ Maldives",
        link: "/maldives/so-maldives"
    },
    {
        id: 6,
        image: Hero6,
        country: "Sri Lanka",
        text: "Sri Lanka Highlights\nJourney",
        link: "/srilanka/sri-lanka-highlights-tour"
    },
    {
        id: 7,
        image: Hero7,
        country: "Maldives",
        text: "Movenpick Resort\nKurendhivaru",
        link: "/maldives/movenpick-resort-kuredhivaru-maldives"
    },
    {
        id: 8,
        image: Hero8,
        country: "Maldives",
        text: "Alila Kothaifaru\nMaldives",
        link: "/maldives/alila-kothaifaru-maldives"
    },
];

export const maldivesHeroData = [
    {
        id: 1,
        image: Hero1,
        country: "Maldives",
        text: "Siyam Worlds",
        link: "/maldives/siyam-world-maldives"
    },
    {
        id: 2,
        image: Hero2,
        country: "Maldives",
        text: "NOOE Maldives\nKunaavashi",
        link: "/maldives/nooe-maldives-kunaavashi"
    },

    {
        id: 3,
        image: Hero4,
        country: "Maldives",
        text: "NH Maldives Kuda Rah",
        link: "/maldives/nh-maldives-kuda-rah"
    },
    {
        id: 4,
        image: Hero5,
        country: "Maldives",
        text: "SO/ Maldives",
        link: "/maldives/so-maldives"
    },

    {
        id: 5,
        image: Hero7,
        country: "Maldives",
        text: "Movenpick Resort\nKurendhivaru",
        link: "/maldives/movenpick-resort-kuredhivaru-maldives"
    },
    {
        id: 6,
        image: Hero8,
        country: "Maldives",
        text: "Alila Kothaifaru\nMaldives",
        link: "/maldives/alila-kothaifaru-maldives"
    },
]

export const srilankaHeroData = [
    {
        id: 1,
        image: Hero6,
        country: "Sri Lanka",
        text: "Sri Lanka Experience journey",
        link: "/srilanka/sri-lanka-experience-tour-itinerary"
    },
    {
        id: 2,
        image: NineArch,
        country: "Sri Lanka",
        text: "Sri Lanka Highlights Journey",
        link: "/srilanka/sri-lanka-highlights-tour"
    },
    {
        id: 3,
        image: Hero3,
        country: "Sri Lanka",
        text: "Swift Escape to Sri Lanka's Hills & Shores",
        link: "/srilanka/swift-escape-to-sri-lankas-hills-shores"
    }
]

//Maldives tour packages
export const MaldivesData = [
    {
        id: "eb8801d0-d377-4721-8ae5-c09f8ec4c45c",
        name: "Siyam World Maldives",
        title: "A Luxurious all-Inclusive getaway",
        price: 3499,
        slug: "siyam-world-maldives",
        description:
            "Siyam World Maldives Siyam World Maldives is a breathtaking 5-star luxury island resort offering an unparalleled all-inclusive experience.",
        descriptionLong:
            "Siyam World Maldives is a breathtaking 5-star luxury island resort offering an unparalleled all-inclusive experience. Spanning across 54 hectares in the Noonu Atoll, this resort offers an unlimited WOW! experience with endless dining, adventure, and entertainment. Whether you seek relaxation, thrilling water sports, or vibrant nightlife, Siyam World delivers an unparalleled Maldives escape.",
        location: "Noonu Atoll, Maldives",
        nights: 3,
        transfer: "Seaplane Transfers",
        image: PackageM1,
        logo: SiyamWorldsLogo,
        heroImages: [Hero1, SWHero2, SWHero3, SWHero4],
        stays: [
            {
                name: "Water Villa with\nPool + Slide",
                threeNightPrice: 3499,
                fourNightPrice: 3869,
                image: SWStay1,
            },
            {
                name: "Sunset Pool\nBeach Villa",
                threeNightPrice: 3499,
                fourNightPrice: 3869,
                image: SWStay2,
            },
            {
                name: "Lagoon Villa\nwith Pool + Slide",
                threeNightPrice: 3799,
                fourNightPrice: 4269,
                image: SWStay3,
            },
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
                "Fitness & wellness activities, yoga, and kids’ programs",
            ],
        },
        honeymoonInclusions: {
            list: [
                "1 bottle of sparkling wine & a fruit basket on arrival",
                "Romantic honeymoon dinner with a decorated table at an à la carte restaurant",
                "Special evening turn-down service with bed decoration on arrival night",
                "1 celebratory honeymoon cake",
            ],
        },
        bdayAnvInclusions: {
            description:
                "A minimum 3-night stay is required. A marriage certificate/registration dated within the last 12 months must be presented at the time of booking.",
            list: [
                "1 bottle of sparkling wine & a fruit basket on arrival",
                "Fruit basket on arrival day",
            ],
        },
        resortHighlights: [
            "The stylish collection of 80 villas with private pool",
            "15-minute speedboat ride from Malé International Airport",
            "Overlooking the Emboodhoo Lagoon home to diverse marine life",
            "Few minutes’ boat ride from CROSSROADS Maldives",
            "Diverse dining, a sophisticated playful beach club and serene spa",
            "Island Couture",
            "Malé Velana International Airport",
        ],
        resortMap: {
            path: "/images/maldives/resort-maps/alila-kothaifaru-maldives-resort-map.webp"
        },
        highlightContent: {
            title: "A new way to experience the Maldives",
            highlights: [
                "Surrounded by a stunning house reef in the scenic Raa Atoll, Alila Kothaifaru Maldives is a private island retreat set in an awe-inspiring destination embraced by nature’s wonders.",
                "Home to a few inhabited islands, the peaceful and unspoiled Raa Atoll is a hidden gem offering a large variety and abundance of marine life with wonders to discover throughout the year.",
                "Alila Kothaifaru Maldives is also close to Vaadhoo Island, one of the best spots to witness the spectacular “Sea of Stars” phenomenon, an extraordinary sight to behold."
            ]
        },
        accommodation: [
            {
                name: "Lagoon Water Pool Villa",
                slug: "lagoon-water-pool-villa",
                area: "120 sqm",
                roomDetails: {
                    title: "Perfect for snorkelling",
                    highlights: ["Suspended over water in the turquoise waters of our lagoon, you are a short swim to the reef that is perfect for snorkelling. Here the water is your garden, accessible from your striped-design infinity pool and private deck. Inside the glass façade, a freestanding cocoon tub will be the highlight of your laidback luxury – relaxed and elegant with neutral tones punctuated with artisanal pops of colour"]
                },
                paxAdult: 2,
                paxChild: 0,
                features: [
                    "Located over water in the lagoon",
                    "Short swim to the reef",
                    "Glass facade Villa",
                    "Infinity pool and private deck",
                ],
                images: [SMAccom1, SMAccom2, SMAccom3],
                floorPlan: {
                    path: "/images/maldives/resort-maps/so_maldives_floorplans_water-pool-villa-collection.pdf"
                },
            },
            {
                name: "Ocean Water Pool Villa",
                slug: "ocean-water-pool-villa",
                area: "120 sqm",
                roomDetails: {
                    title: "Your own private ocean sanctuary",
                    highlights: ["Your own private ocean sanctuary, our Pool Water Villas offer uninterrupted sea views and elegant open-plan living. Step directly into the turquoise waters from your striped-design private pool or enjoy the tranquility from your soothing light-flooded space featuring freestanding cocoon tub, wraparound windows and nature-inspired palette with colourful design touches."]
                },
                paxAdult: 2,
                paxChild: 0,
                features: [
                    "Uninterrupted sea views",
                    "Open-planned living",
                    "Glass facade Villa",
                    "infinity pool and private deck",
                ],
                images: [SMAccom4, SMAccom5, SMAccom1, SMAccom3, SMAccom6],
                floorPlan: {
                    path: "/images/maldives/resort-maps/so_maldives_floorplans_water-pool-villa-collection.pdf"
                },
            },
            {
                name: "Lagoon Beach Pool Villa",
                slug: "lagoon-beach-pool-villa",
                area: "228 sqm",
                roomDetails: {
                    title: "You are steps away from the turquoise reef",
                    highlights: ["On the pristine white sands of the lagoon, you are steps away from the turquoise reef that is perfect for snorkelling. You may prefer to chill in the lush private garden next to the striped pool and contemplate the blue landscape. Inside the glass façade, it’s all about laidback luxury – think curved lines, a soothing open-plan space with plush, elegant décor and a neutral palette punctuated with artisanal pops of colour."]
                },
                paxAdult: 2,
                paxChild: 0,
                features: [
                    "On the white sands of the lagoon",
                    "Steps away from the reef",
                    "Glass facade Villa",
                    "Private garden and pool",
                ],
                images: [SMAccom7, SMAccom8, SMAccom9, SMAccom10],
                floorPlan: {
                    path: "/images/maldives/accommodation/so-maldives/so_maldives_lagoon-beach-pool-villa.pdf"
                },
            },
            {
                name: "Ocean Beach Pool Villa",
                slug: "ocean-beach-pool-villa",
                area: "228 sqm",
                roomDetails: {
                    title: "Lush tropical foliage",
                    highlights: ["With lush tropical foliage and a private terrace on the white sandy beach, you are moments from the ocean. You may prefer to chill in your striped design private pool and take in the idyllic view of the ocean and beyond. Inside the glass façade, it’s all about laidback luxury – think curved lines, a calming open-plan space with a natural palette punctuated with artisanal pops of colour."]
                },
                paxAdult: 2,
                paxChild: 0,
                features: [
                    "On the white sands of the lagoon",
                    "Steps away from the reef",
                    "Glass facade Villa",
                    "Private pool and terrace",
                ],
                images: [SMAccom11, SMAccom12, SMAccom13, SMAccom14, SMAccom15, SMAccom16],
                floorPlan: {
                    path: "/images/maldives/accommodation/so-maldives/so_maldives_lagoon-beach-pool-villa.pdf"
                },
            },
            {
                name: "Family Beach Pool Villa with Capsule",
                slug: "family-beach-pool-villa-with-capsule",
                area: "238 sqm",
                roomDetails: {
                    title: "Ultimate private escape imbued with relaxed luxury",
                    highlights: ["Castaway in this dream Family Villa for the ultimate private escape imbued with relaxed luxury. Secluded in a lush tropical beach enclave, this modern organic-style villa has everything a family needs to escape – space to play, relax and entertain in an elegantly-styled bedroom with an attached hip bunk capsule for the kids to add to the sense of adventure. Indulge in a private pool, tropical garden and access to your own private beach. It’s also just a few steps away from The Nest and The Zone."]
                },
                paxAdult: 4,
                paxChild: 0,
                features: [
                    "Two bedrooms, including a hip bunk capsule for the kids",
                    "Secluded in a lush tropical beach enclave",
                    "Access to your own private beach",
                    "Private pool",
                ],
                images: [SMAccom17, SMAccom18, SMAccom19, SMAccom20, SMAccom21],
                floorPlan: {
                    path: "/images/maldives/accommodation/so-maldives/so_maldives_floorplans_family-beach-pool-villa-with-capsule.pdf"
                },
            },
            {
                name: "Two-Bedroom Ocean Water Pool Atelier",
                slug: "two-bedroom-ocean-water-pool-atelier",
                area: "240 sqm",
                roomDetails: {
                    title: "Luxury residence in paradise with private pool",
                    highlights: ["Set over two spacious levels, escape to your luxury residence in paradise with private pool, wraparound decks and endless ocean views. With an indoor-outdoor feel, this relaxed yet elegant space features a spacious master bedroom on the first floor along with separate living and dining space with plush furnishings, sculptural detailing and artisanal touches. With expansive terraces on both floors, step directly into the turquoise waters from the sleek glass villa or perhaps you’d prefer to enjoy the view from the sanctuary of your statement bathroom with freestanding cocoon tub."]
                },
                paxAdult: 4,
                paxChild: 0,
                features: [
                    "Two separate bedrooms",
                    "Living & dining spaces",
                    "Private pool and deck",
                    "Expansive terraces on both floors",
                ],
                images: [SMAccom22, SMAccom23, SMAccom24, SMAccom25, SMAccom26, SMAccom27, SMAccom28, SMAccom29],
                floorPlan: {
                    path: "/images/maldives/accommodation/so-maldives/so_maldives_floorplans_two-bedroom-ocean-water-pool-atelier.pdf"
                },
            },
            {
                name: "Two-Bedroom Lagoon Beach Pool Loft",
                slug: "two-bedroom-lagoon-beach-pool-loft",
                area: "322 sqm",
                roomDetails: {
                    title: "Set over two breathtaking levels",
                    highlights: ["Set over two breathtaking levels, castaway in this spacious two-bedroom Beach Loft to step directly onto the white powdery sand of the turquoise lagoon. Enjoy indoor-outdoor living with your own private pool, lush tropical terrace and stunning views to the lagoon and beyond. The vibe is laidback luxury – plush, elegant and relaxed with a separate living and dining space to host, cocoon tub-with-a-view and sculptural design touches."]
                },
                paxAdult: 4,
                paxChild: 0,
                features: [
                    "Two levels",
                    "Two bedrooms, separate living & dining spaces",
                    "Direct beach access",
                    "Private pool & lush tropical terrace",
                ],
                images: [SMAccom30, SMAccom31, SMAccom32, SMAccom33, SMAccom34, SMAccom35, SMAccom36, SMAccom37, SMAccom38],
                floorPlan: {
                    path: "/images/maldives/accommodation/so-maldives/so_maldives_floorplans_two-bedroom-lagoon-beach-pool-loft.pdf"
                },
            },
            {
                name: "Three-Bedroom Ocean Water Pool Atelier",
                slug: "three-bedroom-ocean-water-pool-atelier",
                area: "410 sqm",
                roomDetails: {
                    title: "Your ultimate ocean escape",
                    highlights: ["Your ultimate ocean escape, our vast two-storey Water Atelier is designed for maximum luxury and privacy with three bedrooms and spacious living and dining area with wraparound deck on both floors. With an indoor-outdoor feel, this modernist villa features the statement-making master bedroom and panoramic deck. On the first floor, there are two further bedrooms along with the stylish living and dining space to relax or entertain. Plush, elegant décor in neutral tones gives way to endless blue from all directions with artisanal design touches to elevate the space. Step from the giant curved tub onto your private deck, swim in the turquoise waters from your private pool or simply contemplate that endless blue landscape."]
                },
                paxAdult: 6,
                paxChild: 0,
                features: [
                    "Three bedrooms",
                    "Two-storey water atelier",
                    "Living and dining area",
                    "Private pool",
                ],
                images: [SMAccom39, SMAccom40, SMAccom41, SMAccom42, SMAccom43, SMAccom44],
                floorPlan: {
                    path: "/images/maldives/accommodation/so-maldives/so_maldives_floorplans_three-bedroom-ocean-water-pool-atelier.pdf"
                },
            }
        ],
        dinings: [
            {
                name: "THE CITRONELLE CLUB",
                description: [
                    "The Citronelle Club is a welcoming restaurant inspired by the flavours of Asia, the guest profile here being foodies that love full-flavoured dishes to share in large parties. The kitchens are the main event and the finishes used are to be rustic Asian-inspired bricks, tiles and timber panelling.",
                ],
                images: [SMTCC1, SMTCC2, SMTCC3],
            },
            {
                name: "LAZULI BEACH CLUB",
                description: [
                    "Lazuli is a versitile space oozing Cote D’Azur charm and elegance. A centralised bar connects the areas and, as the guests journey away from the Bar and Lounge, the experience becomes more informal, more lively and more interactive. Lazuli has multiple terraces, decks and bars as well sun beds both in and out of water.",
                ],
                images: [SMLB1, SMLB2, SMLB3],
            },
            {
                name: "HADABA",
                description: [
                    "A feast of the Middle East unlike any other. Where old and new friends can come together to break bread, share a drink, and trade stories; where the familiarity of the cuisine is elevated by the unexpected. Hadaba takes its name from the Egyptian neighborhood – Hadaba, one of the regions across the Levant the restaurant draws its flavour and inspiration.",
                ],
                images: [SMHB1, SMHB2, SMHB3, SMHB4],
            },
        ],
        wellnessSpa: [
            {
                title: "WELLNESS CAMP",
                description:
                    "Whether your preferred mode is active or relaxed, retreat to our serene wellness camp, featuring a Bespoke Vichy rainforest shower, steam and sauna, modern organic treatment rooms and state-of-the-art fitness sphere with ocean views.",
                images: [SMSpa1, SMSpa2, SMSpa3, SMSpa4, SMSpa5, SMSpa6],
            },
        ],
        activities: [
            {
                title: "WATER ADVENTURES & EXCURSIONS",
                description: [
                    "An array of paid and complimentary water-based adventures including kayaking, parasailing, snorkeling, jet ski, stand-up paddleboarding, and offsite excursions are available to further enhance travelers’ experience of the island.",
                    "Guests can learn how to scuba dive, or for experienced divers, there is a wide selection of curated dives that can be arranged daily including turtle expeditions, outer reef explorations and traditional Maldivian fishing excursions."
                ],

                images: [SMACT1, SMACT2, SMACT3, SMACT4],
            },
        ],
        direction: {
            description:
                "A 15-minute speedboat ride from Malé International Airport whisks you away to a private island in this idyllic archipelago overlooking the Emboodhoo Lagoon. Introducing a new generation of luxury for modern adventurers.",
            mapEmbed:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.879609110734!2d73.35665487581474!3d5.730475231868851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b6b49000000070d%3A0x78a59fe2dd50922!2sSiyam%20World%20Maldives!5e0!3m2!1sen!2slk!4v1760547149905!5m2!1sen!2slk",
        },
        featuredHotels: [
            "d0e3f36a-e4bb-4312-aba6-aa5292f7b026",
            "f2f02ff2-1dd2-405a-a140-726ae84fa8a3",
            "f540cbb7-0314-4aae-923d-dc9e518998de",
        ],
    },
    {
        id: "d0e3f36a-e4bb-4312-aba6-aa5292f7b026",
        name: "NOOE Maldives Kunaavashi",
        title: "Pure Luxury & Serenity",
        slug: "nooe-maldives-kunaavashi",
        description:
            "NOOE Maldives Kunaavashi is a luxury island retreat in the Vaavu Atoll, offering overwater and beachfront villas, world-class dining, and stunning marine adventures.",
        descriptionLong:
            "NOOE Maldives Kunaavashi is a luxury island retreat in the Vaavu Atoll, offering overwater and beachfront villas, world-class dining, and stunning marine adventures. With crystal-clear waters, vibrant coral reefs, and a serene ambiance, it’s the perfect escape for relaxation and adventure.",
        location: "Vaavu Atoll, Maldives",
        nights: 3,
        price: 1999,
        transfer: "Seaplane Transfers",
        image: PackageM2,
        logo: NooeMaldivesLogo,
        heroImages: [Hero2, PackageM2, NooeHero3, NooeHero2],
        stays: [
            {
                name: "Beach Villa",
                threeNightPrice: 1999,
                fourNightPrice: 2499,
                image: NooeStay1,
            },
            {
                name: "Sunset Beach\nVilla",
                threeNightPrice: 2199,
                fourNightPrice: 2729,
                image: NooeStay2,
            },
            {
                name: "Duplex\nOverwater Villa\nwith Private Pool",
                threeNightPrice: 2499,
                fourNightPrice: 3099,
                image: NooeStay3,
            },
        ],
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
            description:
                "A minimum 3-night stay is required. A marriage certificate/registration dated within the last 12 months must be presented at the time of booking.",
            list: [
                "Welcome amenity & romantic bed decoration",
                "Spa & souvenir shop discount voucher",
                "Bottle of wine/sparkling juice + dessert selection",
            ],
        },
        resortHighlights: [
            "Where castaway meets runway, the stylish collection of 80 villas with private pool",
            "15-minute speedboat ride from Malé International Airport",
            "Overlooking the Emboodhoo Lagoon home to diverse marine life",
            "Few minutes’ boat ride from CROSSROADS Maldives",
            "Diverse dining, a sophisticated playful beach club and serene spa",
            "Island Couture",
            "Malé Velana International Airport",
        ],
        resortMap: {
            path: "/images/maldives/resort-maps/alila-kothaifaru-maldives-resort-map.webp"
        },
        highlightContent: {
            title: "A new way to experience the Maldives",
            highlights: [
                "Surrounded by a stunning house reef in the scenic Raa Atoll, Alila Kothaifaru Maldives is a private island retreat set in an awe-inspiring destination embraced by nature’s wonders.",
                "Home to a few inhabited islands, the peaceful and unspoiled Raa Atoll is a hidden gem offering a large variety and abundance of marine life with wonders to discover throughout the year.",
                "Alila Kothaifaru Maldives is also close to Vaadhoo Island, one of the best spots to witness the spectacular “Sea of Stars” phenomenon, an extraordinary sight to behold."
            ]
        },
        accommodation: [
            {
                name: "Lagoon Water Pool Villa",
                slug: "lagoon-water-pool-villa",
                area: "120 sqm",
                roomDetails: {
                    title: "Perfect for snorkelling",
                    highlights: ["Suspended over water in the turquoise waters of our lagoon, you are a short swim to the reef that is perfect for snorkelling. Here the water is your garden, accessible from your striped-design infinity pool and private deck. Inside the glass façade, a freestanding cocoon tub will be the highlight of your laidback luxury – relaxed and elegant with neutral tones punctuated with artisanal pops of colour"]
                },
                paxAdult: 2,
                paxChild: 0,
                features: [
                    "Located over water in the lagoon",
                    "Short swim to the reef",
                    "Glass facade Villa",
                    "Infinity pool and private deck",
                ],
                images: [SMAccom1, SMAccom2, SMAccom3],
                floorPlan: {
                    path: "/images/maldives/resort-maps/so_maldives_floorplans_water-pool-villa-collection.pdf"
                },
            },
            {
                name: "Ocean Water Pool Villa",
                slug: "ocean-water-pool-villa",
                area: "120 sqm",
                roomDetails: {
                    title: "Your own private ocean sanctuary",
                    highlights: ["Your own private ocean sanctuary, our Pool Water Villas offer uninterrupted sea views and elegant open-plan living. Step directly into the turquoise waters from your striped-design private pool or enjoy the tranquility from your soothing light-flooded space featuring freestanding cocoon tub, wraparound windows and nature-inspired palette with colourful design touches."]
                },
                paxAdult: 2,
                paxChild: 0,
                features: [
                    "Uninterrupted sea views",
                    "Open-planned living",
                    "Glass facade Villa",
                    "infinity pool and private deck",
                ],
                images: [SMAccom4, SMAccom5, SMAccom1, SMAccom3, SMAccom6],
                floorPlan: {
                    path: "/images/maldives/resort-maps/so_maldives_floorplans_water-pool-villa-collection.pdf"
                },
            },
            {
                name: "Lagoon Beach Pool Villa",
                slug: "lagoon-beach-pool-villa",
                area: "228 sqm",
                roomDetails: {
                    title: "You are steps away from the turquoise reef",
                    highlights: ["On the pristine white sands of the lagoon, you are steps away from the turquoise reef that is perfect for snorkelling. You may prefer to chill in the lush private garden next to the striped pool and contemplate the blue landscape. Inside the glass façade, it’s all about laidback luxury – think curved lines, a soothing open-plan space with plush, elegant décor and a neutral palette punctuated with artisanal pops of colour."]
                },
                paxAdult: 2,
                paxChild: 0,
                features: [
                    "On the white sands of the lagoon",
                    "Steps away from the reef",
                    "Glass facade Villa",
                    "Private garden and pool",
                ],
                images: [SMAccom7, SMAccom8, SMAccom9, SMAccom10],
                floorPlan: {
                    path: "/images/maldives/accommodation/so-maldives/so_maldives_lagoon-beach-pool-villa.pdf"
                },
            },
            {
                name: "Ocean Beach Pool Villa",
                slug: "ocean-beach-pool-villa",
                area: "228 sqm",
                roomDetails: {
                    title: "Lush tropical foliage",
                    highlights: ["With lush tropical foliage and a private terrace on the white sandy beach, you are moments from the ocean. You may prefer to chill in your striped design private pool and take in the idyllic view of the ocean and beyond. Inside the glass façade, it’s all about laidback luxury – think curved lines, a calming open-plan space with a natural palette punctuated with artisanal pops of colour."]
                },
                paxAdult: 2,
                paxChild: 0,
                features: [
                    "On the white sands of the lagoon",
                    "Steps away from the reef",
                    "Glass facade Villa",
                    "Private pool and terrace",
                ],
                images: [SMAccom11, SMAccom12, SMAccom13, SMAccom14, SMAccom15, SMAccom16],
                floorPlan: {
                    path: "/images/maldives/accommodation/so-maldives/so_maldives_lagoon-beach-pool-villa.pdf"
                },
            },
            {
                name: "Family Beach Pool Villa with Capsule",
                slug: "family-beach-pool-villa-with-capsule",
                area: "238 sqm",
                roomDetails: {
                    title: "Ultimate private escape imbued with relaxed luxury",
                    highlights: ["Castaway in this dream Family Villa for the ultimate private escape imbued with relaxed luxury. Secluded in a lush tropical beach enclave, this modern organic-style villa has everything a family needs to escape – space to play, relax and entertain in an elegantly-styled bedroom with an attached hip bunk capsule for the kids to add to the sense of adventure. Indulge in a private pool, tropical garden and access to your own private beach. It’s also just a few steps away from The Nest and The Zone."]
                },
                paxAdult: 4,
                paxChild: 0,
                features: [
                    "Two bedrooms, including a hip bunk capsule for the kids",
                    "Secluded in a lush tropical beach enclave",
                    "Access to your own private beach",
                    "Private pool",
                ],
                images: [SMAccom17, SMAccom18, SMAccom19, SMAccom20, SMAccom21],
                floorPlan: {
                    path: "/images/maldives/accommodation/so-maldives/so_maldives_floorplans_family-beach-pool-villa-with-capsule.pdf"
                },
            },
            {
                name: "Two-Bedroom Ocean Water Pool Atelier",
                slug: "two-bedroom-ocean-water-pool-atelier",
                area: "240 sqm",
                roomDetails: {
                    title: "Luxury residence in paradise with private pool",
                    highlights: ["Set over two spacious levels, escape to your luxury residence in paradise with private pool, wraparound decks and endless ocean views. With an indoor-outdoor feel, this relaxed yet elegant space features a spacious master bedroom on the first floor along with separate living and dining space with plush furnishings, sculptural detailing and artisanal touches. With expansive terraces on both floors, step directly into the turquoise waters from the sleek glass villa or perhaps you’d prefer to enjoy the view from the sanctuary of your statement bathroom with freestanding cocoon tub."]
                },
                paxAdult: 4,
                paxChild: 0,
                features: [
                    "Two separate bedrooms",
                    "Living & dining spaces",
                    "Private pool and deck",
                    "Expansive terraces on both floors",
                ],
                images: [SMAccom22, SMAccom23, SMAccom24, SMAccom25, SMAccom26, SMAccom27, SMAccom28, SMAccom29],
                floorPlan: {
                    path: "/images/maldives/accommodation/so-maldives/so_maldives_floorplans_two-bedroom-ocean-water-pool-atelier.pdf"
                },
            },
            {
                name: "Two-Bedroom Lagoon Beach Pool Loft",
                slug: "two-bedroom-lagoon-beach-pool-loft",
                area: "322 sqm",
                roomDetails: {
                    title: "Set over two breathtaking levels",
                    highlights: ["Set over two breathtaking levels, castaway in this spacious two-bedroom Beach Loft to step directly onto the white powdery sand of the turquoise lagoon. Enjoy indoor-outdoor living with your own private pool, lush tropical terrace and stunning views to the lagoon and beyond. The vibe is laidback luxury – plush, elegant and relaxed with a separate living and dining space to host, cocoon tub-with-a-view and sculptural design touches."]
                },
                paxAdult: 4,
                paxChild: 0,
                features: [
                    "Two levels",
                    "Two bedrooms, separate living & dining spaces",
                    "Direct beach access",
                    "Private pool & lush tropical terrace",
                ],
                images: [SMAccom30, SMAccom31, SMAccom32, SMAccom33, SMAccom34, SMAccom35, SMAccom36, SMAccom37, SMAccom38],
                floorPlan: {
                    path: "/images/maldives/accommodation/so-maldives/so_maldives_floorplans_two-bedroom-lagoon-beach-pool-loft.pdf"
                },
            },
            {
                name: "Three-Bedroom Ocean Water Pool Atelier",
                slug: "three-bedroom-ocean-water-pool-atelier",
                area: "410 sqm",
                roomDetails: {
                    title: "Your ultimate ocean escape",
                    highlights: ["Your ultimate ocean escape, our vast two-storey Water Atelier is designed for maximum luxury and privacy with three bedrooms and spacious living and dining area with wraparound deck on both floors. With an indoor-outdoor feel, this modernist villa features the statement-making master bedroom and panoramic deck. On the first floor, there are two further bedrooms along with the stylish living and dining space to relax or entertain. Plush, elegant décor in neutral tones gives way to endless blue from all directions with artisanal design touches to elevate the space. Step from the giant curved tub onto your private deck, swim in the turquoise waters from your private pool or simply contemplate that endless blue landscape."]
                },
                paxAdult: 6,
                paxChild: 0,
                features: [
                    "Three bedrooms",
                    "Two-storey water atelier",
                    "Living and dining area",
                    "Private pool",
                ],
                images: [SMAccom39, SMAccom40, SMAccom41, SMAccom42, SMAccom43, SMAccom44],
                floorPlan: {
                    path: "/images/maldives/accommodation/so-maldives/so_maldives_floorplans_three-bedroom-ocean-water-pool-atelier.pdf"
                },
            }
        ],
        dinings: [
            {
                name: "THE CITRONELLE CLUB",
                description: [
                    "The Citronelle Club is a welcoming restaurant inspired by the flavours of Asia, the guest profile here being foodies that love full-flavoured dishes to share in large parties. The kitchens are the main event and the finishes used are to be rustic Asian-inspired bricks, tiles and timber panelling.",
                ],
                images: [SMTCC1, SMTCC2, SMTCC3],
            },
            {
                name: "LAZULI BEACH CLUB",
                description: [
                    "Lazuli is a versitile space oozing Cote D’Azur charm and elegance. A centralised bar connects the areas and, as the guests journey away from the Bar and Lounge, the experience becomes more informal, more lively and more interactive. Lazuli has multiple terraces, decks and bars as well sun beds both in and out of water.",
                ],
                images: [SMLB1, SMLB2, SMLB3],
            },
            {
                name: "HADABA",
                description: [
                    "A feast of the Middle East unlike any other. Where old and new friends can come together to break bread, share a drink, and trade stories; where the familiarity of the cuisine is elevated by the unexpected. Hadaba takes its name from the Egyptian neighborhood – Hadaba, one of the regions across the Levant the restaurant draws its flavour and inspiration.",
                ],
                images: [SMHB1, SMHB2, SMHB3, SMHB4],
            },
        ],
        wellnessSpa: [
            {
                title: "WELLNESS CAMP",
                description:
                    "Whether your preferred mode is active or relaxed, retreat to our serene wellness camp, featuring a Bespoke Vichy rainforest shower, steam and sauna, modern organic treatment rooms and state-of-the-art fitness sphere with ocean views.",
                images: [SMSpa1, SMSpa2, SMSpa3, SMSpa4, SMSpa5, SMSpa6],
            },
        ],
        activities: [
            {
                title: "WATER ADVENTURES & EXCURSIONS",
                description: [
                    "An array of paid and complimentary water-based adventures including kayaking, parasailing, snorkeling, jet ski, stand-up paddleboarding, and offsite excursions are available to further enhance travelers’ experience of the island.",
                    "Guests can learn how to scuba dive, or for experienced divers, there is a wide selection of curated dives that can be arranged daily including turtle expeditions, outer reef explorations and traditional Maldivian fishing excursions."
                ],

                images: [SMACT1, SMACT2, SMACT3, SMACT4],
            },
        ],
        direction: {
            description:
                "A 15-minute speedboat ride from Malé International Airport whisks you away to a private island in this idyllic archipelago overlooking the Emboodhoo Lagoon. Introducing a new generation of luxury for modern adventurers.",
            mapEmbed:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.78387728504!2d73.36210477581298!3d3.636736749960175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b40ab277acbc16b%3A0x4969a487361598b4!2sNOOE%20Maldives%20Kunaavashi!5e0!3m2!1sen!2slk!4v1760574930140!5m2!1sen!2slk",
        },
        featuredHotels: [
            "f2f02ff2-1dd2-405a-a140-726ae84fa8a3",
            "f540cbb7-0314-4aae-923d-dc9e518998de",
            "ec37735e-8b69-451c-871d-e5da508c5f9e",
        ],
    },
    {
        id: "ec37735e-8b69-451c-871d-e5da508c5f9e",
        name: "NH Maldives Kuda Rah",
        title: "A perfect blend of relaxation & Adventure",
        slug: "nh-maldives-kuda-rah",
        description:
            "NH Maldives Kuda Rah is a luxurious island retreat in the South Ari Atoll, offering elegant overwater and beachfront villas, world-class dining, and breathtaking ocean views.",
        descriptionLong:
            "NH Maldives Kuda Rah Resort offers the perfect blend of relaxation and adventure. Stay at the best resort in Maldives to enjoy the lounge by the pool in your overwater villa, swim in our crystal-clear lagoon and enjoy signature treatments at our spa. Discover world-class dive sites, then unwind with delicious dining and chilled cocktails as the stars light up the night sky. Welcome to your island paradise.",
        location: "South Ari Atoll, Maldives",
        nights: 3,
        price: 2329,
        transfer: "Seaplane Transfers",
        image: PackageM3,
        logo: NHKudaRahLogo,
        heroImages: [Hero4, NHHero2, NHHero3, NHHero4],
        stays: [
            {
                name: "Beach Villa",
                threeNightPrice: 1999,
                fourNightPrice: 2499,
                image: NooeStay1,
            },
            {
                name: "Sunset Beach\nVilla",
                threeNightPrice: 2199,
                fourNightPrice: 2729,
                image: NooeStay2,
            },
            {
                name: "Duplex\nOverwater Villa\nwith Private Pool",
                threeNightPrice: 2499,
                fourNightPrice: 3099,
                image: NooeStay3,
            },
        ],
        inclusions: {
            description: "Additional Inclusions (Minimum 3-Night Stay)",
            list: [
                "Breakfast & Dinner at the All-Day Dining Restaurant",
                "Round-trip seaplane transfers",
                "One-time Sunset Cruise for two persons, once per stay (weather permitting)",
                "One-time 30-minute massage for two persons",
                "10% discount on Shisha",
                "In-villa espresso machine, tea & coffee facilities, and bottled water",
                "Complimentary Wi-Fi, bicycles, mask, snorkel, fins, and non-motorized watersports like kayaking & paddleboarding",
                "Scheduled group yoga sessions, kids' club, fitness center, and 24-hour guest services",
                "Fitness & wellness activities, yoga, and kids’ programs",
                "20% discount on the À la Carte menu at the Ocean Restaurant (food only)",
            ],
        },
        honeymoonInclusions: {
            description:
                "A minimum 3-night stay is required. A marriage certificate/registration dated within the last 12 months must be presented at the time of booking.",
            list: ["1 bottle of sparkling wine & a fruit basket on arrival"],
        },
        resortHighlights: [
            "Where castaway meets runway, the stylish collection of 80 villas with private pool",
            "15-minute speedboat ride from Malé International Airport",
            "Overlooking the Emboodhoo Lagoon home to diverse marine life",
            "Few minutes’ boat ride from CROSSROADS Maldives",
            "Diverse dining, a sophisticated playful beach club and serene spa",
            "Island Couture",
            "Malé Velana International Airport",
        ],
        resortMap: {
            path: "/images/maldives/resort-maps/alila-kothaifaru-maldives-resort-map.webp"
        },

        highlightContent: {
            title: "A new way to experience the Maldives",
            highlights: [
                "Surrounded by a stunning house reef in the scenic Raa Atoll, Alila Kothaifaru Maldives is a private island retreat set in an awe-inspiring destination embraced by nature’s wonders.",
                "Home to a few inhabited islands, the peaceful and unspoiled Raa Atoll is a hidden gem offering a large variety and abundance of marine life with wonders to discover throughout the year.",
                "Alila Kothaifaru Maldives is also close to Vaadhoo Island, one of the best spots to witness the spectacular “Sea of Stars” phenomenon, an extraordinary sight to behold."
            ]
        },
        accommodation: [
            {
                name: "Lagoon Water Pool Villa",
                slug: "lagoon-water-pool-villa",
                area: "120 sqm",
                roomDetails: {
                    title: "Perfect for snorkelling",
                    highlights: ["Suspended over water in the turquoise waters of our lagoon, you are a short swim to the reef that is perfect for snorkelling. Here the water is your garden, accessible from your striped-design infinity pool and private deck. Inside the glass façade, a freestanding cocoon tub will be the highlight of your laidback luxury – relaxed and elegant with neutral tones punctuated with artisanal pops of colour"]
                },
                paxAdult: 2,
                paxChild: 0,
                features: [
                    "Located over water in the lagoon",
                    "Short swim to the reef",
                    "Glass facade Villa",
                    "Infinity pool and private deck",
                ],
                images: [SMAccom1, SMAccom2, SMAccom3],
                floorPlan: {
                    path: "/images/maldives/resort-maps/so_maldives_floorplans_water-pool-villa-collection.pdf"
                },
            },
            {
                name: "Ocean Water Pool Villa",
                slug: "ocean-water-pool-villa",
                area: "120 sqm",
                roomDetails: {
                    title: "Your own private ocean sanctuary",
                    highlights: ["Your own private ocean sanctuary, our Pool Water Villas offer uninterrupted sea views and elegant open-plan living. Step directly into the turquoise waters from your striped-design private pool or enjoy the tranquility from your soothing light-flooded space featuring freestanding cocoon tub, wraparound windows and nature-inspired palette with colourful design touches."]
                },
                paxAdult: 2,
                paxChild: 0,
                features: [
                    "Uninterrupted sea views",
                    "Open-planned living",
                    "Glass facade Villa",
                    "infinity pool and private deck",
                ],
                images: [SMAccom4, SMAccom5, SMAccom1, SMAccom3, SMAccom6],
                floorPlan: {
                    path: "/images/maldives/resort-maps/so_maldives_floorplans_water-pool-villa-collection.pdf"
                },
            },
            {
                name: "Lagoon Beach Pool Villa",
                slug: "lagoon-beach-pool-villa",
                area: "228 sqm",
                roomDetails: {
                    title: "You are steps away from the turquoise reef",
                    highlights: ["On the pristine white sands of the lagoon, you are steps away from the turquoise reef that is perfect for snorkelling. You may prefer to chill in the lush private garden next to the striped pool and contemplate the blue landscape. Inside the glass façade, it’s all about laidback luxury – think curved lines, a soothing open-plan space with plush, elegant décor and a neutral palette punctuated with artisanal pops of colour."]
                },
                paxAdult: 2,
                paxChild: 0,
                features: [
                    "On the white sands of the lagoon",
                    "Steps away from the reef",
                    "Glass facade Villa",
                    "Private garden and pool",
                ],
                images: [SMAccom7, SMAccom8, SMAccom9, SMAccom10],
                floorPlan: {
                    path: "/images/maldives/accommodation/so-maldives/so_maldives_lagoon-beach-pool-villa.pdf"
                },
            },
            {
                name: "Ocean Beach Pool Villa",
                slug: "ocean-beach-pool-villa",
                area: "228 sqm",
                roomDetails: {
                    title: "Lush tropical foliage",
                    highlights: ["With lush tropical foliage and a private terrace on the white sandy beach, you are moments from the ocean. You may prefer to chill in your striped design private pool and take in the idyllic view of the ocean and beyond. Inside the glass façade, it’s all about laidback luxury – think curved lines, a calming open-plan space with a natural palette punctuated with artisanal pops of colour."]
                },
                paxAdult: 2,
                paxChild: 0,
                features: [
                    "On the white sands of the lagoon",
                    "Steps away from the reef",
                    "Glass facade Villa",
                    "Private pool and terrace",
                ],
                images: [SMAccom11, SMAccom12, SMAccom13, SMAccom14, SMAccom15, SMAccom16],
                floorPlan: {
                    path: "/images/maldives/accommodation/so-maldives/so_maldives_lagoon-beach-pool-villa.pdf"
                },
            },
            {
                name: "Family Beach Pool Villa with Capsule",
                slug: "family-beach-pool-villa-with-capsule",
                area: "238 sqm",
                roomDetails: {
                    title: "Ultimate private escape imbued with relaxed luxury",
                    highlights: ["Castaway in this dream Family Villa for the ultimate private escape imbued with relaxed luxury. Secluded in a lush tropical beach enclave, this modern organic-style villa has everything a family needs to escape – space to play, relax and entertain in an elegantly-styled bedroom with an attached hip bunk capsule for the kids to add to the sense of adventure. Indulge in a private pool, tropical garden and access to your own private beach. It’s also just a few steps away from The Nest and The Zone."]
                },
                paxAdult: 4,
                paxChild: 0,
                features: [
                    "Two bedrooms, including a hip bunk capsule for the kids",
                    "Secluded in a lush tropical beach enclave",
                    "Access to your own private beach",
                    "Private pool",
                ],
                images: [SMAccom17, SMAccom18, SMAccom19, SMAccom20, SMAccom21],
                floorPlan: {
                    path: "/images/maldives/accommodation/so-maldives/so_maldives_floorplans_family-beach-pool-villa-with-capsule.pdf"
                },
            },
            {
                name: "Two-Bedroom Ocean Water Pool Atelier",
                slug: "two-bedroom-ocean-water-pool-atelier",
                area: "240 sqm",
                roomDetails: {
                    title: "Luxury residence in paradise with private pool",
                    highlights: ["Set over two spacious levels, escape to your luxury residence in paradise with private pool, wraparound decks and endless ocean views. With an indoor-outdoor feel, this relaxed yet elegant space features a spacious master bedroom on the first floor along with separate living and dining space with plush furnishings, sculptural detailing and artisanal touches. With expansive terraces on both floors, step directly into the turquoise waters from the sleek glass villa or perhaps you’d prefer to enjoy the view from the sanctuary of your statement bathroom with freestanding cocoon tub."]
                },
                paxAdult: 4,
                paxChild: 0,
                features: [
                    "Two separate bedrooms",
                    "Living & dining spaces",
                    "Private pool and deck",
                    "Expansive terraces on both floors",
                ],
                images: [SMAccom22, SMAccom23, SMAccom24, SMAccom25, SMAccom26, SMAccom27, SMAccom28, SMAccom29],
                floorPlan: {
                    path: "/images/maldives/accommodation/so-maldives/so_maldives_floorplans_two-bedroom-ocean-water-pool-atelier.pdf"
                },
            },
            {
                name: "Two-Bedroom Lagoon Beach Pool Loft",
                slug: "two-bedroom-lagoon-beach-pool-loft",
                area: "322 sqm",
                roomDetails: {
                    title: "Set over two breathtaking levels",
                    highlights: ["Set over two breathtaking levels, castaway in this spacious two-bedroom Beach Loft to step directly onto the white powdery sand of the turquoise lagoon. Enjoy indoor-outdoor living with your own private pool, lush tropical terrace and stunning views to the lagoon and beyond. The vibe is laidback luxury – plush, elegant and relaxed with a separate living and dining space to host, cocoon tub-with-a-view and sculptural design touches."]
                },
                paxAdult: 4,
                paxChild: 0,
                features: [
                    "Two levels",
                    "Two bedrooms, separate living & dining spaces",
                    "Direct beach access",
                    "Private pool & lush tropical terrace",
                ],
                images: [SMAccom30, SMAccom31, SMAccom32, SMAccom33, SMAccom34, SMAccom35, SMAccom36, SMAccom37, SMAccom38],
                floorPlan: {
                    path: "/images/maldives/accommodation/so-maldives/so_maldives_floorplans_two-bedroom-lagoon-beach-pool-loft.pdf"
                },
            },
            {
                name: "Three-Bedroom Ocean Water Pool Atelier",
                slug: "three-bedroom-ocean-water-pool-atelier",
                area: "410 sqm",
                roomDetails: {
                    title: "Your ultimate ocean escape",
                    highlights: ["Your ultimate ocean escape, our vast two-storey Water Atelier is designed for maximum luxury and privacy with three bedrooms and spacious living and dining area with wraparound deck on both floors. With an indoor-outdoor feel, this modernist villa features the statement-making master bedroom and panoramic deck. On the first floor, there are two further bedrooms along with the stylish living and dining space to relax or entertain. Plush, elegant décor in neutral tones gives way to endless blue from all directions with artisanal design touches to elevate the space. Step from the giant curved tub onto your private deck, swim in the turquoise waters from your private pool or simply contemplate that endless blue landscape."]
                },
                paxAdult: 6,
                paxChild: 0,
                features: [
                    "Three bedrooms",
                    "Two-storey water atelier",
                    "Living and dining area",
                    "Private pool",
                ],
                images: [SMAccom39, SMAccom40, SMAccom41, SMAccom42, SMAccom43, SMAccom44],
                floorPlan: {
                    path: "/images/maldives/accommodation/so-maldives/so_maldives_floorplans_three-bedroom-ocean-water-pool-atelier.pdf"
                },
            }
        ],
        dinings: [
            {
                name: "THE CITRONELLE CLUB",
                description: [
                    "The Citronelle Club is a welcoming restaurant inspired by the flavours of Asia, the guest profile here being foodies that love full-flavoured dishes to share in large parties. The kitchens are the main event and the finishes used are to be rustic Asian-inspired bricks, tiles and timber panelling.",
                ],
                images: [SMTCC1, SMTCC2, SMTCC3],
            },
            {
                name: "LAZULI BEACH CLUB",
                description: [
                    "Lazuli is a versitile space oozing Cote D’Azur charm and elegance. A centralised bar connects the areas and, as the guests journey away from the Bar and Lounge, the experience becomes more informal, more lively and more interactive. Lazuli has multiple terraces, decks and bars as well sun beds both in and out of water.",
                ],
                images: [SMLB1, SMLB2, SMLB3],
            },
            {
                name: "HADABA",
                description: [
                    "A feast of the Middle East unlike any other. Where old and new friends can come together to break bread, share a drink, and trade stories; where the familiarity of the cuisine is elevated by the unexpected. Hadaba takes its name from the Egyptian neighborhood – Hadaba, one of the regions across the Levant the restaurant draws its flavour and inspiration.",
                ],
                images: [SMHB1, SMHB2, SMHB3, SMHB4],
            },
        ],
        wellnessSpa: [
            {
                title: "WELLNESS CAMP",
                description:
                    "Whether your preferred mode is active or relaxed, retreat to our serene wellness camp, featuring a Bespoke Vichy rainforest shower, steam and sauna, modern organic treatment rooms and state-of-the-art fitness sphere with ocean views.",
                images: [SMSpa1, SMSpa2, SMSpa3, SMSpa4, SMSpa5, SMSpa6],
            },
        ],
        activities: [
            {
                title: "WATER ADVENTURES & EXCURSIONS",
                description: [
                    "An array of paid and complimentary water-based adventures including kayaking, parasailing, snorkeling, jet ski, stand-up paddleboarding, and offsite excursions are available to further enhance travelers’ experience of the island.",
                    "Guests can learn how to scuba dive, or for experienced divers, there is a wide selection of curated dives that can be arranged daily including turtle expeditions, outer reef explorations and traditional Maldivian fishing excursions."
                ],

                images: [SMACT1, SMACT2, SMACT3, SMACT4],
            },
        ],
        direction: {
            description:
                "A 15-minute speedboat ride from Malé International Airport whisks you away to a private island in this idyllic archipelago overlooking the Emboodhoo Lagoon. Introducing a new generation of luxury for modern adventurers.",
            mapEmbed:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.059294959741!2d72.90826057581309!3d3.5738396503934795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b4732b1ff44b6b3%3A0xda216f72d2752680!2sNH%20Maldives%20Kuda%20Rah%20Resort!5e0!3m2!1sen!2slk!4v1760929104859!5m2!1sen!2slk",
        },
        featuredHotels: [
            "eb8801d0-d377-4721-8ae5-c09f8ec4c45c",
            "f2f02ff2-1dd2-405a-a140-726ae84fa8a3",
            "f540cbb7-0314-4aae-923d-dc9e518998de",
        ],
    },
    {
        id: "9345f679-21be-4067-a1f7-c00b67d2d4e3",
        name: "SO/ Maldives",
        title: "A Luxurious escape to exclusive beachfront villas",
        slug: "so-maldives",
        description:
            "SO/ Maldives is a stunning 5-star resort located on the private island of Hinnavaru in the Noonu Atoll, offering guests an exclusive retreat surrounded by crystal-clear waters and pristine white-sand beaches.",
        descriptionLong:
            "SO/ Maldives is a stunning 5-star resort located on the private island of Hinnavaru in the Noonu Atoll, offering guests an exclusive retreat surrounded by crystal-clear waters and pristine white-sand beaches. The resort features contemporary design with vibrant, stylish accommodations, ranging from overwater villas to beachfront suites. Guests can enjoy world-class dining, a luxurious spa, and a range of water activities including diving, snorkeling, and sailing.",
        location: "Noonu Atoll, Maldives",
        nights: 3,
        price: 4459,
        transfer: "Speedboat Transfers",
        image: PackageM4,
        logo: SoLogo,
        heroImages: [Hero5, SoMaldives3, SoMaldives1, SoMaldives2],
        stays: [
            {
                name: "Lagoon Water\nPool Villa\nCollection",
                threeNightPrice: 4459,
                fourNightPrice: 5719,
                image: SoMaldives3,
            },
            {
                name: "Ocean Water\nPool Villa\nCollection",
                threeNightPrice: 4669,
                fourNightPrice: 5999,
                image: SOStay1,
            },
            {
                name: "Lagoon Beach\nPool Villa\nCollection",
                threeNightPrice: 4999,
                fourNightPrice: 6439,
                image: SoMaldives1,
            },
        ],
        inclusions: {
            list: [
                "Enjoy breakfast at The Citronelle Club and dinner at your choice of three restaurants: The Citronelle Club,Lazuli Beach Club,Hadaba (Premium items excluded)",
                "Aerated drinks, canned juices, tea/coffee, and house water during meals.",
                "Round-trip shared speedboat transfers",
                "$100 spa credit for one-bedroom villas.",
                "Choose between Coral Garden Snorkeling or a Sunset Cruise once during your stay.",
                "Special welcome gifts and a bottle of non-alcoholic sparkling wine.",
                "Non-alcoholic beverages stocked once during your stay.",
                "Access to The Nest Kids Space and The Zone teen club.",
                "Complimentary bicycles available on the island.",
                "Complimentary snorkeling equipment, kayak, and paddle boat at the water sports center.",
                "Complimentary daily wellness activities, subject to the resort schedule.",
            ],
        },
        resortHighlights: [
            "Where castaway meets runway, the stylish collection of 80 villas with private pool",
            "15-minute speedboat ride from Malé International Airport",
            "Fashion-forward design , Glass-fronted villas with infinity pools",
            "Few minutes’ boat ride from CROSSROADS Maldives",
            "Diverse dining, a sophisticated playful beach club and serene spa",
            "Roster of weekly events and activities, from live music nights and pool parties to cooking classes and stargazing experiences",
        ],
        resortMap: {
            path: "/images/maldives/resort-maps/so_maldives_floorplans_water-pool-villa-collection.pdf"
        },
        highlightContent: {
            title: "Where castaway meets runway",
            highlights: [
                "SO/ Maldives is reinventing the luxury island getaway experience with bespoke beach-front and over-water villas and sensorial experiences rooted in fashion and art",
                "With diverse dining, a sophisticated playful beach club and serene spa all set in a private lagoon enclave, it’s time to escape, explore and play. Where castaway meets runway, the stylish collection of 80 villa collections are designed for open plan living with panoramic ocean views.",
            ]
        },
        accommodation: [
            {
                name: "Lagoon Water Pool Villa",
                slug: "lagoon-water-pool-villa",
                area: "120 sqm",
                roomDetails: {
                    title: "Perfect for snorkelling",
                    highlights: ["Suspended over water in the turquoise waters of our lagoon, you are a short swim to the reef that is perfect for snorkelling. Here the water is your garden, accessible from your striped-design infinity pool and private deck. Inside the glass façade, a freestanding cocoon tub will be the highlight of your laidback luxury – relaxed and elegant with neutral tones punctuated with artisanal pops of colour"]
                },
                paxAdult: 2,
                paxChild: 0,
                features: [
                    "Located over water in the lagoon",
                    "Short swim to the reef",
                    "Glass facade Villa",
                    "Infinity pool and private deck",
                ],
                images: [SMAccom1, SMAccom2, SMAccom3],
                floorPlan: {
                    path: "/images/maldives/resort-maps/so_maldives_floorplans_water-pool-villa-collection.pdf"
                },
            },
            {
                name: "Ocean Water Pool Villa",
                slug: "ocean-water-pool-villa",
                area: "120 sqm",
                roomDetails: {
                    title: "Your own private ocean sanctuary",
                    highlights: ["Your own private ocean sanctuary, our Pool Water Villas offer uninterrupted sea views and elegant open-plan living. Step directly into the turquoise waters from your striped-design private pool or enjoy the tranquility from your soothing light-flooded space featuring freestanding cocoon tub, wraparound windows and nature-inspired palette with colourful design touches."]
                },
                paxAdult: 2,
                paxChild: 0,
                features: [
                    "Uninterrupted sea views",
                    "Open-planned living",
                    "Glass facade Villa",
                    "infinity pool and private deck",
                ],
                images: [SMAccom4, SMAccom5, SMAccom1, SMAccom3, SMAccom6],
                floorPlan: {
                    path: "/images/maldives/resort-maps/so_maldives_floorplans_water-pool-villa-collection.pdf"
                },
            },
            {
                name: "Lagoon Beach Pool Villa",
                slug: "lagoon-beach-pool-villa",
                area: "228 sqm",
                roomDetails: {
                    title: "You are steps away from the turquoise reef",
                    highlights: ["On the pristine white sands of the lagoon, you are steps away from the turquoise reef that is perfect for snorkelling. You may prefer to chill in the lush private garden next to the striped pool and contemplate the blue landscape. Inside the glass façade, it’s all about laidback luxury – think curved lines, a soothing open-plan space with plush, elegant décor and a neutral palette punctuated with artisanal pops of colour."]
                },
                paxAdult: 2,
                paxChild: 0,
                features: [
                    "On the white sands of the lagoon",
                    "Steps away from the reef",
                    "Glass facade Villa",
                    "Private garden and pool",
                ],
                images: [SMAccom7, SMAccom8, SMAccom9, SMAccom10],
                floorPlan: {
                    path: "/images/maldives/accommodation/so-maldives/so_maldives_lagoon-beach-pool-villa.pdf"
                },
            },
            {
                name: "Ocean Beach Pool Villa",
                slug: "ocean-beach-pool-villa",
                area: "228 sqm",
                roomDetails: {
                    title: "Lush tropical foliage",
                    highlights: ["With lush tropical foliage and a private terrace on the white sandy beach, you are moments from the ocean. You may prefer to chill in your striped design private pool and take in the idyllic view of the ocean and beyond. Inside the glass façade, it’s all about laidback luxury – think curved lines, a calming open-plan space with a natural palette punctuated with artisanal pops of colour."]
                },
                paxAdult: 2,
                paxChild: 0,
                features: [
                    "On the white sands of the lagoon",
                    "Steps away from the reef",
                    "Glass facade Villa",
                    "Private pool and terrace",
                ],
                images: [SMAccom11, SMAccom12, SMAccom13, SMAccom14, SMAccom15, SMAccom16],
                floorPlan: {
                    path: "/images/maldives/accommodation/so-maldives/so_maldives_lagoon-beach-pool-villa.pdf"
                },
            },
            {
                name: "Family Beach Pool Villa with Capsule",
                slug: "family-beach-pool-villa-with-capsule",
                area: "238 sqm",
                roomDetails: {
                    title: "Ultimate private escape imbued with relaxed luxury",
                    highlights: ["Castaway in this dream Family Villa for the ultimate private escape imbued with relaxed luxury. Secluded in a lush tropical beach enclave, this modern organic-style villa has everything a family needs to escape – space to play, relax and entertain in an elegantly-styled bedroom with an attached hip bunk capsule for the kids to add to the sense of adventure. Indulge in a private pool, tropical garden and access to your own private beach. It’s also just a few steps away from The Nest and The Zone."]
                },
                paxAdult: 4,
                paxChild: 0,
                features: [
                    "Two bedrooms, including a hip bunk capsule for the kids",
                    "Secluded in a lush tropical beach enclave",
                    "Access to your own private beach",
                    "Private pool",
                ],
                images: [SMAccom17, SMAccom18, SMAccom19, SMAccom20, SMAccom21],
                floorPlan: {
                    path: "/images/maldives/accommodation/so-maldives/so_maldives_floorplans_family-beach-pool-villa-with-capsule.pdf"
                },
            },
            {
                name: "Two-Bedroom Ocean Water Pool Atelier",
                slug: "two-bedroom-ocean-water-pool-atelier",
                area: "240 sqm",
                roomDetails: {
                    title: "Luxury residence in paradise with private pool",
                    highlights: ["Set over two spacious levels, escape to your luxury residence in paradise with private pool, wraparound decks and endless ocean views. With an indoor-outdoor feel, this relaxed yet elegant space features a spacious master bedroom on the first floor along with separate living and dining space with plush furnishings, sculptural detailing and artisanal touches. With expansive terraces on both floors, step directly into the turquoise waters from the sleek glass villa or perhaps you’d prefer to enjoy the view from the sanctuary of your statement bathroom with freestanding cocoon tub."]
                },
                paxAdult: 4,
                paxChild: 0,
                features: [
                    "Two separate bedrooms",
                    "Living & dining spaces",
                    "Private pool and deck",
                    "Expansive terraces on both floors",
                ],
                images: [SMAccom22, SMAccom23, SMAccom24, SMAccom25, SMAccom26, SMAccom27, SMAccom28, SMAccom29],
                floorPlan: {
                    path: "/images/maldives/accommodation/so-maldives/so_maldives_floorplans_two-bedroom-ocean-water-pool-atelier.pdf"
                },
            },
            {
                name: "Two-Bedroom Lagoon Beach Pool Loft",
                slug: "two-bedroom-lagoon-beach-pool-loft",
                area: "322 sqm",
                roomDetails: {
                    title: "Set over two breathtaking levels",
                    highlights: ["Set over two breathtaking levels, castaway in this spacious two-bedroom Beach Loft to step directly onto the white powdery sand of the turquoise lagoon. Enjoy indoor-outdoor living with your own private pool, lush tropical terrace and stunning views to the lagoon and beyond. The vibe is laidback luxury – plush, elegant and relaxed with a separate living and dining space to host, cocoon tub-with-a-view and sculptural design touches."]
                },
                paxAdult: 4,
                paxChild: 0,
                features: [
                    "Two levels",
                    "Two bedrooms, separate living & dining spaces",
                    "Direct beach access",
                    "Private pool & lush tropical terrace",
                ],
                images: [SMAccom30, SMAccom31, SMAccom32, SMAccom33, SMAccom34, SMAccom35, SMAccom36, SMAccom37, SMAccom38],
                floorPlan: {
                    path: "/images/maldives/accommodation/so-maldives/so_maldives_floorplans_two-bedroom-lagoon-beach-pool-loft.pdf"
                },
            },
            {
                name: "Three-Bedroom Ocean Water Pool Atelier",
                slug: "three-bedroom-ocean-water-pool-atelier",
                area: "410 sqm",
                roomDetails: {
                    title: "Your ultimate ocean escape",
                    highlights: ["Your ultimate ocean escape, our vast two-storey Water Atelier is designed for maximum luxury and privacy with three bedrooms and spacious living and dining area with wraparound deck on both floors. With an indoor-outdoor feel, this modernist villa features the statement-making master bedroom and panoramic deck. On the first floor, there are two further bedrooms along with the stylish living and dining space to relax or entertain. Plush, elegant décor in neutral tones gives way to endless blue from all directions with artisanal design touches to elevate the space. Step from the giant curved tub onto your private deck, swim in the turquoise waters from your private pool or simply contemplate that endless blue landscape."]
                },
                paxAdult: 6,
                paxChild: 0,
                features: [
                    "Three bedrooms",
                    "Two-storey water atelier",
                    "Living and dining area",
                    "Private pool",
                ],
                images: [SMAccom39, SMAccom40, SMAccom41, SMAccom42, SMAccom43, SMAccom44],
                floorPlan: {
                    path: "/images/maldives/accommodation/so-maldives/so_maldives_floorplans_three-bedroom-ocean-water-pool-atelier.pdf"
                },
            }
        ],
        dinings: [
            {
                name: "THE CITRONELLE CLUB",
                description: [
                    "The Citronelle Club is a welcoming restaurant inspired by the flavours of Asia, the guest profile here being foodies that love full-flavoured dishes to share in large parties. The kitchens are the main event and the finishes used are to be rustic Asian-inspired bricks, tiles and timber panelling.",
                ],
                images: [SMTCC1, SMTCC2, SMTCC3],
            },
            {
                name: "LAZULI BEACH CLUB",
                description: [
                    "Lazuli is a versitile space oozing Cote D’Azur charm and elegance. A centralised bar connects the areas and, as the guests journey away from the Bar and Lounge, the experience becomes more informal, more lively and more interactive. Lazuli has multiple terraces, decks and bars as well sun beds both in and out of water.",
                ],
                images: [SMLB1, SMLB2, SMLB3],
            },
            {
                name: "HADABA",
                description: [
                    "A feast of the Middle East unlike any other. Where old and new friends can come together to break bread, share a drink, and trade stories; where the familiarity of the cuisine is elevated by the unexpected. Hadaba takes its name from the Egyptian neighborhood – Hadaba, one of the regions across the Levant the restaurant draws its flavour and inspiration.",
                ],
                images: [SMHB1, SMHB2, SMHB3, SMHB4],
            },
        ],
        wellnessSpa: [
            {
                title: "WELLNESS CAMP",
                description:
                    "Whether your preferred mode is active or relaxed, retreat to our serene wellness camp, featuring a Bespoke Vichy rainforest shower, steam and sauna, modern organic treatment rooms and state-of-the-art fitness sphere with ocean views.",
                images: [SMSpa1, SMSpa2, SMSpa3, SMSpa4, SMSpa5, SMSpa6],
            },
        ],
        activities: [
            {
                title: "WATER ADVENTURES & EXCURSIONS",
                description: [
                    "An array of paid and complimentary water-based adventures including kayaking, parasailing, snorkeling, jet ski, stand-up paddleboarding, and offsite excursions are available to further enhance travelers’ experience of the island.",
                    "Guests can learn how to scuba dive, or for experienced divers, there is a wide selection of curated dives that can be arranged daily including turtle expeditions, outer reef explorations and traditional Maldivian fishing excursions."
                ],

                images: [SMACT1, SMACT2, SMACT3, SMACT4],
            },
        ],
        direction: {
            description:
                "A 15-minute speedboat ride from Malé International Airport whisks you away to a private island in this idyllic archipelago overlooking the Emboodhoo Lagoon. Introducing a new generation of luxury for modern adventurers.",
            mapEmbed:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.491708085454!2d73.4784780758131!3d4.123193546391573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b3f7ff34cb1ed39%3A0x5842714e59c7357f!2sSO%2F%20Maldives!5e0!3m2!1sen!2slk!4v1760923151802!5m2!1sen!2slk",
        },
        featuredHotels: [
            "d0e3f36a-e4bb-4312-aba6-aa5292f7b026",
            "f540cbb7-0314-4aae-923d-dc9e518998de",
            "f2f02ff2-1dd2-405a-a140-726ae84fa8a3",
        ],
    },
    {
        id: "f2f02ff2-1dd2-405a-a140-726ae84fa8a3",
        name: "MÖVENPICK Resort Kuredhivaru Maldives",
        title:
            "Luxurious overwater villas, crystal-clear waters, and world-class amenities",
        slug: "movenpick-resort-kuredhivaru-maldives",
        description:
            "Mövenpick Resort Kuredhivaru Maldives is a luxurious resort located in the pristine Noonu Atoll, offering stunning overwater villas and beachfront bungalows with breathtaking views of turquoise waters.",
        descriptionLong:
            "Mövenpick Resort Kuredhivaru Maldives is a luxurious resort located in the pristine Noonu Atoll, offering stunning overwater villas and beachfront bungalows with breathtaking views of turquoise waters. This exclusive tropical haven is perfect for a relaxing getaway, featuring world-class dining, spa treatments, and exciting water sports.",
        location: "Noonu Atoll, Maldives",
        nights: 3,
        price: 4459,
        transfer: "Seaplane Transfers",
        image: PackageM5,
        logo: MovenpickLogo,
        heroImages: [Hero7, MVPHero2, MVPHero3, MVPHero4],
        stays: [
            {
                name: "Overwater Pool\nVilla Lagoon",
                threeNightPrice: 4459,
                fourNightPrice: 5359,
                image: MVPStay1,
            },
            {
                name: "Overwater Pool\nVilla Sunris",
                threeNightPrice: 4619,
                fourNightPrice: 5569,
                image: MVPStay2,
            },
            {
                name: "Overwater Pool\nVilla Ocean",
                threeNightPrice: 4969,
                fourNightPrice: 6029,
                image: MVPStay3,
            },
        ],
        inclusions: {
            list: [
                "Daily Half-Board (Breakfast and Dinner dine-around)",
                "Round-trip seaplane transfers",
                "Complimentary Floating Breakfast once during your stay",
                "Complimentary 30-minute massage, once per room, per stay",
                "Choose from a one-time complimentary Shisha or Mocktail during your stay",
                "Select one excursion (sunset cruise, dolphin cruise, or sunset fishing) based on availability and schedule",
                "Enjoy complimentary Chocolate and Ice Cream during the Chocolate Hour, daily from 4:00 pm to 5:00 pm",
                "Complimentary access to non-motorized watersports and snorkeling equipment",
                "Enjoy daily group Sunrise and Sunset Yoga or Body Stretching sessions",
                "Complimentary access to the fitness center, tennis court, football field, basketball court, beach volleyball, and kids club",
            ],
        },
        resortHighlights: [
            "Where castaway meets runway, the stylish collection of 80 villas with private poo",
            "15-minute speedboat ride from Malé International Airport",
            "Overlooking the Emboodhoo Lagoon home to diverse marine life",
            "Few minutes’ boat ride from CROSSROADS Maldives",
            "Diverse dining, a sophisticated playful beach club and serene spa",
            "Island Couture",
            "Malé Velana International Airport",
        ],
        highlightContent: {
            title: "A new way to experience the Maldives",
            highlights: [
                "Surrounded by a stunning house reef in the scenic Raa Atoll, Alila Kothaifaru Maldives is a private island retreat set in an awe-inspiring destination embraced by nature’s wonders.",
                "Home to a few inhabited islands, the peaceful and unspoiled Raa Atoll is a hidden gem offering a large variety and abundance of marine life with wonders to discover throughout the year.",
                "Alila Kothaifaru Maldives is also close to Vaadhoo Island, one of the best spots to witness the spectacular “Sea of Stars” phenomenon, an extraordinary sight to behold."
            ]
        },
        resortMap: {
            path: "/images/maldives/resort-maps/alila-kothaifaru-maldives-resort-map.webp"
        },
        accommodation: [
            {
                name: "Lagoon Water Pool Villa",
                slug: "lagoon-water-pool-villa",
                area: "120 sqm",
                roomDetails: {
                    title: "Perfect for snorkelling",
                    highlights: ["Suspended over water in the turquoise waters of our lagoon, you are a short swim to the reef that is perfect for snorkelling. Here the water is your garden, accessible from your striped-design infinity pool and private deck. Inside the glass façade, a freestanding cocoon tub will be the highlight of your laidback luxury – relaxed and elegant with neutral tones punctuated with artisanal pops of colour"]
                },
                paxAdult: 2,
                paxChild: 0,
                features: [
                    "Located over water in the lagoon",
                    "Short swim to the reef",
                    "Glass facade Villa",
                    "Infinity pool and private deck",
                ],
                images: [SMAccom1, SMAccom2, SMAccom3],
                floorPlan: {
                    path: "/images/maldives/resort-maps/so_maldives_floorplans_water-pool-villa-collection.pdf"
                },
            },
            {
                name: "Ocean Water Pool Villa",
                slug: "ocean-water-pool-villa",
                area: "120 sqm",
                roomDetails: {
                    title: "Your own private ocean sanctuary",
                    highlights: ["Your own private ocean sanctuary, our Pool Water Villas offer uninterrupted sea views and elegant open-plan living. Step directly into the turquoise waters from your striped-design private pool or enjoy the tranquility from your soothing light-flooded space featuring freestanding cocoon tub, wraparound windows and nature-inspired palette with colourful design touches."]
                },
                paxAdult: 2,
                paxChild: 0,
                features: [
                    "Uninterrupted sea views",
                    "Open-planned living",
                    "Glass facade Villa",
                    "infinity pool and private deck",
                ],
                images: [SMAccom4, SMAccom5, SMAccom1, SMAccom3, SMAccom6],
                floorPlan: {
                    path: "/images/maldives/resort-maps/so_maldives_floorplans_water-pool-villa-collection.pdf"
                },
            },
            {
                name: "Lagoon Beach Pool Villa",
                slug: "lagoon-beach-pool-villa",
                area: "228 sqm",
                roomDetails: {
                    title: "You are steps away from the turquoise reef",
                    highlights: ["On the pristine white sands of the lagoon, you are steps away from the turquoise reef that is perfect for snorkelling. You may prefer to chill in the lush private garden next to the striped pool and contemplate the blue landscape. Inside the glass façade, it’s all about laidback luxury – think curved lines, a soothing open-plan space with plush, elegant décor and a neutral palette punctuated with artisanal pops of colour."]
                },
                paxAdult: 2,
                paxChild: 0,
                features: [
                    "On the white sands of the lagoon",
                    "Steps away from the reef",
                    "Glass facade Villa",
                    "Private garden and pool",
                ],
                images: [SMAccom7, SMAccom8, SMAccom9, SMAccom10],
                floorPlan: {
                    path: "/images/maldives/accommodation/so-maldives/so_maldives_lagoon-beach-pool-villa.pdf"
                },
            },
            {
                name: "Ocean Beach Pool Villa",
                slug: "ocean-beach-pool-villa",
                area: "228 sqm",
                roomDetails: {
                    title: "Lush tropical foliage",
                    highlights: ["With lush tropical foliage and a private terrace on the white sandy beach, you are moments from the ocean. You may prefer to chill in your striped design private pool and take in the idyllic view of the ocean and beyond. Inside the glass façade, it’s all about laidback luxury – think curved lines, a calming open-plan space with a natural palette punctuated with artisanal pops of colour."]
                },
                paxAdult: 2,
                paxChild: 0,
                features: [
                    "On the white sands of the lagoon",
                    "Steps away from the reef",
                    "Glass facade Villa",
                    "Private pool and terrace",
                ],
                images: [SMAccom11, SMAccom12, SMAccom13, SMAccom14, SMAccom15, SMAccom16],
                floorPlan: {
                    path: "/images/maldives/accommodation/so-maldives/so_maldives_lagoon-beach-pool-villa.pdf"
                },
            },
            {
                name: "Family Beach Pool Villa with Capsule",
                slug: "family-beach-pool-villa-with-capsule",
                area: "238 sqm",
                roomDetails: {
                    title: "Ultimate private escape imbued with relaxed luxury",
                    highlights: ["Castaway in this dream Family Villa for the ultimate private escape imbued with relaxed luxury. Secluded in a lush tropical beach enclave, this modern organic-style villa has everything a family needs to escape – space to play, relax and entertain in an elegantly-styled bedroom with an attached hip bunk capsule for the kids to add to the sense of adventure. Indulge in a private pool, tropical garden and access to your own private beach. It’s also just a few steps away from The Nest and The Zone."]
                },
                paxAdult: 4,
                paxChild: 0,
                features: [
                    "Two bedrooms, including a hip bunk capsule for the kids",
                    "Secluded in a lush tropical beach enclave",
                    "Access to your own private beach",
                    "Private pool",
                ],
                images: [SMAccom17, SMAccom18, SMAccom19, SMAccom20, SMAccom21],
                floorPlan: {
                    path: "/images/maldives/accommodation/so-maldives/so_maldives_floorplans_family-beach-pool-villa-with-capsule.pdf"
                },
            },
            {
                name: "Two-Bedroom Ocean Water Pool Atelier",
                slug: "two-bedroom-ocean-water-pool-atelier",
                area: "240 sqm",
                roomDetails: {
                    title: "Luxury residence in paradise with private pool",
                    highlights: ["Set over two spacious levels, escape to your luxury residence in paradise with private pool, wraparound decks and endless ocean views. With an indoor-outdoor feel, this relaxed yet elegant space features a spacious master bedroom on the first floor along with separate living and dining space with plush furnishings, sculptural detailing and artisanal touches. With expansive terraces on both floors, step directly into the turquoise waters from the sleek glass villa or perhaps you’d prefer to enjoy the view from the sanctuary of your statement bathroom with freestanding cocoon tub."]
                },
                paxAdult: 4,
                paxChild: 0,
                features: [
                    "Two separate bedrooms",
                    "Living & dining spaces",
                    "Private pool and deck",
                    "Expansive terraces on both floors",
                ],
                images: [SMAccom22, SMAccom23, SMAccom24, SMAccom25, SMAccom26, SMAccom27, SMAccom28, SMAccom29],
                floorPlan: {
                    path: "/images/maldives/accommodation/so-maldives/so_maldives_floorplans_two-bedroom-ocean-water-pool-atelier.pdf"
                },
            },
            {
                name: "Two-Bedroom Lagoon Beach Pool Loft",
                slug: "two-bedroom-lagoon-beach-pool-loft",
                area: "322 sqm",
                roomDetails: {
                    title: "Set over two breathtaking levels",
                    highlights: ["Set over two breathtaking levels, castaway in this spacious two-bedroom Beach Loft to step directly onto the white powdery sand of the turquoise lagoon. Enjoy indoor-outdoor living with your own private pool, lush tropical terrace and stunning views to the lagoon and beyond. The vibe is laidback luxury – plush, elegant and relaxed with a separate living and dining space to host, cocoon tub-with-a-view and sculptural design touches."]
                },
                paxAdult: 4,
                paxChild: 0,
                features: [
                    "Two levels",
                    "Two bedrooms, separate living & dining spaces",
                    "Direct beach access",
                    "Private pool & lush tropical terrace",
                ],
                images: [SMAccom30, SMAccom31, SMAccom32, SMAccom33, SMAccom34, SMAccom35, SMAccom36, SMAccom37, SMAccom38],
                floorPlan: {
                    path: "/images/maldives/accommodation/so-maldives/so_maldives_floorplans_two-bedroom-lagoon-beach-pool-loft.pdf"
                },
            },
            {
                name: "Three-Bedroom Ocean Water Pool Atelier",
                slug: "three-bedroom-ocean-water-pool-atelier",
                area: "410 sqm",
                roomDetails: {
                    title: "Your ultimate ocean escape",
                    highlights: ["Your ultimate ocean escape, our vast two-storey Water Atelier is designed for maximum luxury and privacy with three bedrooms and spacious living and dining area with wraparound deck on both floors. With an indoor-outdoor feel, this modernist villa features the statement-making master bedroom and panoramic deck. On the first floor, there are two further bedrooms along with the stylish living and dining space to relax or entertain. Plush, elegant décor in neutral tones gives way to endless blue from all directions with artisanal design touches to elevate the space. Step from the giant curved tub onto your private deck, swim in the turquoise waters from your private pool or simply contemplate that endless blue landscape."]
                },
                paxAdult: 6,
                paxChild: 0,
                features: [
                    "Three bedrooms",
                    "Two-storey water atelier",
                    "Living and dining area",
                    "Private pool",
                ],
                images: [SMAccom39, SMAccom40, SMAccom41, SMAccom42, SMAccom43, SMAccom44],
                floorPlan: {
                    path: "/images/maldives/accommodation/so-maldives/so_maldives_floorplans_three-bedroom-ocean-water-pool-atelier.pdf"
                },
            }
        ],
        dinings: [
            {
                name: "THE CITRONELLE CLUB",
                description: [
                    "The Citronelle Club is a welcoming restaurant inspired by the flavours of Asia, the guest profile here being foodies that love full-flavoured dishes to share in large parties. The kitchens are the main event and the finishes used are to be rustic Asian-inspired bricks, tiles and timber panelling.",
                ],
                images: [SMTCC1, SMTCC2, SMTCC3],
            },
            {
                name: "LAZULI BEACH CLUB",
                description: [
                    "Lazuli is a versitile space oozing Cote D’Azur charm and elegance. A centralised bar connects the areas and, as the guests journey away from the Bar and Lounge, the experience becomes more informal, more lively and more interactive. Lazuli has multiple terraces, decks and bars as well sun beds both in and out of water.",
                ],
                images: [SMLB1, SMLB2, SMLB3],
            },
            {
                name: "HADABA",
                description: [
                    "A feast of the Middle East unlike any other. Where old and new friends can come together to break bread, share a drink, and trade stories; where the familiarity of the cuisine is elevated by the unexpected. Hadaba takes its name from the Egyptian neighborhood – Hadaba, one of the regions across the Levant the restaurant draws its flavour and inspiration.",
                ],
                images: [SMHB1, SMHB2, SMHB3, SMHB4],
            },
        ],
        wellnessSpa: [
            {
                title: "WELLNESS CAMP",
                description:
                    "Whether your preferred mode is active or relaxed, retreat to our serene wellness camp, featuring a Bespoke Vichy rainforest shower, steam and sauna, modern organic treatment rooms and state-of-the-art fitness sphere with ocean views.",
                images: [SMSpa1, SMSpa2, SMSpa3, SMSpa4, SMSpa5, SMSpa6],
            },
        ],
        activities: [
            {
                title: "WATER ADVENTURES & EXCURSIONS",
                description: [
                    "An array of paid and complimentary water-based adventures including kayaking, parasailing, snorkeling, jet ski, stand-up paddleboarding, and offsite excursions are available to further enhance travelers’ experience of the island.",
                    "Guests can learn how to scuba dive, or for experienced divers, there is a wide selection of curated dives that can be arranged daily including turtle expeditions, outer reef explorations and traditional Maldivian fishing excursions."
                ],

                images: [SMACT1, SMACT2, SMACT3, SMACT4],
            },
        ],
        direction: {
            description:
                "A 15-minute speedboat ride from Malé International Airport whisks you away to a private island in this idyllic archipelago overlooking the Emboodhoo Lagoon. Introducing a new generation of luxury for modern adventurers.",
            mapEmbed:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.78387728504!2d73.36210477581298!3d3.636736749960175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b40ab277acbc16b%3A0x4969a487361598b4!2sNOOE%20Maldives%20Kunaavashi!5e0!3m2!1sen!2slk!4v1760574930140!5m2!1sen!2slk",
        },
        featuredHotels: [
            "f540cbb7-0314-4aae-923d-dc9e518998de",
            "ec37735e-8b69-451c-871d-e5da508c5f9e",
            "9345f679-21be-4067-a1f7-c00b67d2d4e3",
        ],
    },
    {
        id: "f540cbb7-0314-4aae-923d-dc9e518998de",
        name: "Alila Kothaifaru Maldives",
        title: "Ultimate Relaxation in Crystal-clear waters",
        slug: "alila-kothaifaru-maldives",
        description:
            "Alila Kothaifaru Maldives is a luxurious resort nestled in the heart of the Maldives, offering an idyllic escape surrounded by pristine white-sand beaches and crystal-clear waters.",
        descriptionLong:
            "Alila Kothaifaru Maldives is a luxurious resort nestled in the heart of the Maldives, offering an idyllic escape surrounded by pristine white-sand beaches and crystal-clear waters. Located in the North Raa Atoll, the resort features stunning overwater villas and beachfront suites, all designed to blend modern elegance with natural beauty.",
        location: "North Raa Atoll, Maldives",
        nights: 3,
        price: 5599,
        transfer: "Seaplane Transfers",
        image: PackageM6,
        logo: AlilaLogo,
        heroImages: [Hero8, AlilaHero2, AlilaHero3, AlilaHero4],
        stays: [
            {
                name: "Beach Pool\nVilla",
                threeNightPrice: 5599,
                fourNightPrice: 6999,
                image: AlilaStay1,
            },
            {
                name: "Lagoon\nOverwater Pool\nVilla",
                threeNightPrice: 5849,
                fourNightPrice: 7299,
                image: AlilaStay2,
            },
            {
                name: "Ocean\nOverwater Pool\nVilla",
                threeNightPrice: 6099,
                fourNightPrice: 7639,
                image: AlilaStay3,
            },
        ],
        inclusions: {
            list: [
                "Daily Half-Board (Breakfast and Dinner)",
                "Round-trip seaplane transfers",
                "Complimentary group Dolphin cruise once per stay (subject to availability and weather conditions)",
                "Complimentary 30-minute photoshoot session with 1 printed picture during your stay",
                "Complimentary scheduled Alila wellness activities",
                "Complimentary use of snorkeling equipment",
                "Complimentary Alila Living bath amenities",
                "Complimentary access to Play Alila, 24-hour Fitness Centre, and Library",
                "Villa Host service for a personalized stay",
            ],
        },
        resortHighlights: [
            "Restorative Retreat Designed at One With Nature (tranquil treetop spa)",
            "Abundant snorkeling and diving options (one of the deepest atolls of archipelago)",
            "Stunning house reef and lush greenery",
            "Each villa comes with a private pool and a sun deck",
            "A unique resort’s private sandbank, The Shack",
        ],
        resortMap: {
            path: "/images/maldives/resort-maps/alila-kothaifaru-maldives-resort-map.webp"
        },
        highlightContent: {
            title: "A new way to experience the Maldives",
            highlights: [
                "Surrounded by a stunning house reef in the scenic Raa Atoll, Alila Kothaifaru Maldives is a private island retreat set in an awe-inspiring destination embraced by nature’s wonders.",
                "Home to a few inhabited islands, the peaceful and unspoiled Raa Atoll is a hidden gem offering a large variety and abundance of marine life with wonders to discover throughout the year.",
                "Alila Kothaifaru Maldives is also close to Vaadhoo Island, one of the best spots to witness the spectacular “Sea of Stars” phenomenon, an extraordinary sight to behold."
            ]
        },
        accommodation: [
            {
                name: "Lagoon Overwater Pool Villa",
                slug: "lagoon-overwater-pool-villa",
                area: "125 sqm",
                roomDetails: {
                    title: "Ultimate romantic escape",
                    highlights: ["Treat yourself to the ultimate romantic escape in a villa perched over the lagoon. Unwind in the comfort of an open-concept bedroom and living room seamlessly flowing to a private pool and sun deck. Feel all your worries drift away on the breeze as the gentle lap of the lagoon waters lulls you into peaceful relaxation."]
                },
                paxAdult: 2,
                paxChild: 0,
                features: [
                    "Deluxe indoor bathroom",
                    "Floor-to-ceiling windows bedroom and living room",
                    "Freshwater swimming pool in the villa",
                    "Private seating space overlooking the swimming pool and ocean",
                ],
                images: [AKAccom1, AKAccom2, AKAccom3, AKAccom4],
                floorPlan: {
                    path: "/images/maldives/accommodation/alila-kothaifaru/lagoon-overwater-pool-villa.webp"
                },
            },
            {
                name: "Ocean Overwater Pool Villa",
                slug: "ocean-overwater-pool-villa",
                area: "125 sqm",
                roomDetails: {
                    title: "Captivating Indian Ocean views",
                    highlights: ["Experience the tranquility of Ocean Overwater Pool Villas, where indoor and outdoor spaces blend harmoniously amidst captivating Indian Ocean views. Take a refreshing swim in a private pool while observing the diverse marine life gracefully navigating the waters below villa. With ample space and serenity, villas offer a peaceful retreat in the Maldives."]
                },
                paxAdult: 2,
                paxChild: 0,
                features: [
                    "Deluxe indoor bathroom",
                    "Freshwater swimming pool in the villa",
                    "Sun deck to catch the sunrise",
                    "Private seating space overlooking swimming pool and ocean",
                ],
                images: [AKAccom8, AKAccom5, AKAccom1],
                floorPlan: {
                    path: "/images/maldives/accommodation/alila-kothaifaru/Ocean-Overwater-Pool-Villa.webp"
                },
            },
            {
                name: "Sunset Overwater Pool Villa",
                slug: "sunset-overwater-pool-villa",
                area: "125 sqm",
                roomDetails: {
                    title: "Intimate overwater sanctuary",
                    highlights: ["Stretch out in the sun and dream under the stars in this intimate overwater sanctuary, designed to indulge you in elegant comfort and nature’s immaculate beauty. The villa features an open-concept bedroom and living room connected by floor-to-ceiling sliding glass doors to a private pool and sun deck."]
                },
                paxAdult: 2,
                paxChild: 0,
                features: [
                    "Deluxe indoor bathroom",
                    "Freshwater swimming pool in the villa",
                    "Sunset view sun deck",
                    "Private seating space overlooking swimming pool and ocean",
                ],
                images: [AKAccom6, AKAccom7, AKAccom8, AKAccom1, AKAccom4],
                floorPlan: {
                    path: "/images/maldives/accommodation/alila-kothaifaru/Sunset-Overwater-Pool-Villa.webp"
                },
            },
            {
                name: "Beach Pool Villa",
                slug: "beach-pool-villa",
                area: "202 sqm",
                roomDetails: {
                    title: "A slice of paradise",
                    highlights: ["Enjoy a slice of paradise embraced by nature just steps from the beach. Beach Pool Villas offer an indulgence of private space with a separate bedroom and living room, while floor-to-ceiling sliding glass doors open fully to the fresh ocean air, a private pool and sun deck."]
                },
                paxAdult: 2,
                paxChild: 1,
                features: [
                    "Open-air bathroom in the garden environment",
                    "Private space with a separate bedroom and living room",
                    "Freshwater swimming pool in the villa",
                    "Private seating space overlooking the swimming pool",
                ],
                images: [AKAccom9, AKAccom10],
                floorPlan: {
                    path: "/images/maldives/accommodation/alila-kothaifaru/Beach-Pool-Villa.png"
                },
            },
            {
                name: "Sunset Beach Pool Villa",
                slug: "sunset-beach-pool-villa",
                area: "202 sqm",
                roomDetails: {
                    title: "Havens of privacy and comfort",
                    highlights: ["Nestled within lush greenery, steps from sun-kissed sand, these spacious villas are havens of privacy and comfort with a separate bedroom and living room. Floor-to-ceiling sliding glass doors maximize views and open to a private pool and sun deck."]
                },
                paxAdult: 2,
                paxChild: 1,
                features: [
                    "Open-air bathroom in the garden environment",
                    "Private space with a separate bedroom and living room",
                    "Freshwater swimming pool in the villa",
                    "Private seating space overlooking the swimming pool",
                ],
                images: [AKAccom11, AKAccom9, AKAccom12],
                floorPlan: {
                    path: "/images/maldives/accommodation/alila-kothaifaru/Beach-Pool-Villa.png"
                },
            },
        ],


        dinings: [
            {
                name: "SEASALT",
                description: [
                    "houghtfully sourced and carefully served, local fish is the star of the show at Seasalt, caught and delivered daily by neighboring local fishermen. Enjoy the fresh taste of the sea in coastal cuisine that blends Middle Eastern and Mediterranean influences and traditions in dishes that burst with ancient flavors, spices, and colors.",
                    "Breakfast includes a daily rotation of local and international favorites alongside fresh-baked breads. Lunch includes light and sharing-style dishes complemented by daily specials, while Seasalt’s signature salt-baked fish dishes are a highlight at dinner."
                ],
                images: [AKSlt1, AKSlt2, AKSlt3, AKSlt4, AKSlt5],
            },
            {
                name: "MIRUS BAR",
                description: [
                    "Named after the local Dhivehi word for “chili”, Mirus Bar serves a refreshing selection of cocktails inspired by the region’s former Portuguese and Arabic spice trade routes and concocted with ingredients from our own herb garden.",
                    "Here, you can also enjoy an extensive range of Old and New World wines, including organic and biodynamic varieties. Pair your drink with Spanish tapas and local bites famous in the South Asian region."
                ],
                images: [AKMB1, AKMB2, AKMB3],
            },
            {
                name: "UMAMI",
                description: [
                    "Umami means “essence of deliciousness” in Japanese and is known as the fifth element of taste. It perfectly describes the variety of mouth-watering experiences that await in this relaxing open space cooled by the gentle ocean breeze.",
                    "Enjoy a wide range of traditional and modern a la carte Japanese dishes, including freshcaught fish grilled over charcoal embers and served with delicate signature sauces, as well as sushi and sashimi featuring Maldivian seafood"
                ],
                images: [AKUM1, AKUM2, AKUM3],
            },
            {
                name: "YAKITORI BAR",
                description: [
                    'Yakitori Bar is the place to be to indulge in sundowners, including Asian-inspired creative cocktails and mocktails crafted by our team of mixologists alongside fine Japanese sakes and spirits.',
                    'Delicious smoky aromas from the robata grill permeate the bar and work to whet your appetite.'
                ],
                images: [AKYKB1, AKYKB2, AKYKB3],
            },
            {
                name: "Pibati Sul Mare",
                description: [
                    'Discover Pibati Sul Mare, a beachside haven where Italy’s timeless flavors meet the beauty of the Maldives. Specializing in artisanal pizzas and handcrafted pastas, our menu showcases authentic classics made with fresh, high-quality ingredients, including herbs grown on the island.',
                    'Set against breathtaking ocean views, Pibati Sul Mare offers a relaxed, open-air dining experience with warm, natural tones and contemporary coastal charm. Whether enjoying a leisurely lunch with loved ones or a quiet moment by the sea, every visit promises delicious flavors and unforgettable memories.'
                ],
                images: [AKPSM1, AKPSM2, AKPSM3],
            },
            {
                name: "THE SHACK",
                description: [
                    'Be transported by speedboat to private sandbank, the starting point of a rare culinary journey.',
                    'A true island escape experience, The Shack is our own private sand cay (giri). Three distinct trips to The Shack are available daily – morning and afternoon trips featuring a picnic-style breakfast or lunch, and an evening trip with a private chef to cook up a sunset BBQ. In addition, curated experiences, ranging from romantic twilight dinners for two to private island rental with a personalised menu crafted just for you, offer unparalleled privacy and unforgettable moments.'
                ],
                images: [AKTS1, AKTS2, AKTS3, AKTS4, AKTS5],
            }
        ],
        wellnessSpa: [
            {
                title: "Spa Alila",
                description:
                    "Experience inner peace and be pampered in our tranquil treetop spa, cocooned amidst the leafy canopy with the lush surroundings. Spa Alila features four double treatment suites, all with a private bathroom, shower and a floor-to-ceiling window offering views. Treat yourself to rejuvenating treatments and beauty rituals that put a contemporary spin on ancient healing techniques and draw on the benefits of natural ingredients to deliver pure luxurious indulgence.",
                images: [AKSPAL1, AKSPAL2, AKSPAL3, AKSPAL4, AKSPAL5],
            },
            {
                title: "FITNESS CENTRE",
                description:
                    "Work out in our light-filled gym offering the latest Technogym equipment and floor-to-ceiling views of the lush surroundings",
                images: [AKFC1, AKFC2, AKFC3],
            },
        ],

        activities: [
            {
                title: "ALILA WATER SPORTS & DIVING ACTIVITIES",
                description: [
                    "Pepper your relaxation with the thrill of snorkelling, diving, kayaking and other water activities and excursions.",
                ],

                images: [AKWSDA1, AKWSDA2, AKWSDA3, AKWSDA4, AKWSDA5],
            },
            {
                title: "THE ART OF COCONUT",
                description: [
                    "Embark on a unique cultural journey to explore the wonders of the coconut tree, known as the Miracle Tree. The local host will share Maldivian stories, teach coconut art to kids, and demonstrate traditional tree climbing.",
                    "Learn to cook Maldivian dishes and enhance your mixology skills with coconut-based cocktails. Conclude with a tropical coconut bath and therapeutic massage for total relaxation."
                ],

                images: [AKAOC1, AKAOC2, AKAOC3],
            },
            {
                title: "DINING EXPERIENCES",
                description: [
                    "Escape to paradise at Alila Kothaifaru Maldives and indulge in a culinary journey like no other. The expert culinary team has curated a range of special dining experiences designed to pamper all of your senses.",
                    "Tailor dining experience to your tastes and preferences, and create unforgettable memories that will last a lifetime."
                ],

                images: [AKDE1, AKDE2, AKDE3, AKDE4, AKDE5],
            },
            {
                title: "WEDDINGS & EVENTS",
                description: [
                    "Experience moments to remember at Alila Kothaifaru Maldives. If you wish to exchange or renew your vows on the beachfront at sunset framed by tropical floral arrangements on our private island, the resort has a range of venues which can be tailored to accomodate your individual tastes and requirements.",
                ],

                images: [AKWE1, AKWE2, AKWE3],
            },
            {
                title: "GAME AREA",
                description: [
                    "Indulge in some fun with a wide variety of games for all ages to choose from:",
                ],
                activityList: [
                    "Beach Volley Ball",
                    "Pétanque Court",
                    "Board Games in Library",
                    "Indoor Billiard Pool Table",
                    "Outdoor Floor Chess",
                    "Outdoor Table Tennis",
                ],
                images: [AKGA1, AKGA2, AKGA3, AKGA4],
            },
            {
                title: "ALILA SPICE GARDEN",
                description: [
                    "Step into a world of culinary delight at The Spice Garden, where guests are invited to be part of the cooking experience.",
                    "Nestled amidst the pristine beauty of Alila Kothaifaru Maldives, The Spice Garden offers a perfect blend of flavors, sustainability, and wellness."
                ],
                images: [AKSPG],
            },
        ],
        direction: {
            description:
                "This 11.2 hectare private island retreat lies at the northern edge of the Maldives in the Raa Atoll, reached via a scenic 45-minute seaplane journey from Malé.",
            mapEmbed:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.280384599352!2d72.84044927581441!3d5.525353333955408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b6b03dd72d62883%3A0xa5d2a1de5fb21c85!2sAlila%20Kothaifaru%20Maldives!5e0!3m2!1sen!2slk!4v1760947768061!5m2!1sen!2slk",
        },
        featuredHotels: [
            "f2f02ff2-1dd2-405a-a140-726ae84fa8a3",
            "eb8801d0-d377-4721-8ae5-c09f8ec4c45c",
            "d0e3f36a-e4bb-4312-aba6-aa5292f7b026",
        ],
    },
];

//Sri Lankan tour packages
export const srilankanData = [
    {
        id: "ff41ffd5-d723-4be9-9bab-e465e12671e1",
        name: "Sri Lanka Experience",
        title: "Sri Lanka Journeys",
        slug: "sri-lanka-experience-tour-itinerary",
        description:
            "Experience the highlights of this emerald island nation on a luxury 10-day Classic Sri Lanka journey.",
        location: "Sri Lanka",
        nights: 9,
        days: 10,
        price: 1299,
        image: PackageSL1,
        heroImages: [Hero6, SLBeach, ColomboSL, TempleOfTooth],
        itinerary: {
            title: "Sri Lanka Experience Tour Itinerary",
            description:
                "A Deeper Discovery of Sri Lanka’s Cultural Soul, Scenic Highlands & Coastal Serenity\nEmbark on a beautifully curated 10-day journey that takes you from ancient civilizations to misty mountains and sun-drenched beaches. This immersive itinerary offers a perfect balance of adventure, culture, wildlife, and relaxation — showcasing the very best of Sri Lanka.\nAt Travel Nation, all our holidays are tailor-made to suit your individual preferences. Use the itinerary below as inspiration, then speak to our travel specialists to craft a journey that’s uniquely yours.",
            list: [
                "Start your journey in Negombo, unwinding by the pool and soaking in the coastal charm after your arrival.",
                "Travel to Sigiriya, where you will climb the iconic Lion Rock Fortress and enjoy a traditional village experience.",
                "Explore the ancient city of Polonnaruwa, followed by an exciting safari through Minneriya National Park, home to elephants and exotic wildlife.",
                "Head to Kandy, visiting the Golden Cave Temple in Dambulla and experiencing the sacred Temple of the Tooth Relic during the atmospheric evening pooja.",
                "Board a scenic train to Nuwara Eliya, travelling through emerald tea country into the heart of Sri Lanka’s hill country.",
                "Trek through Horton Plains National Park, discover ‘World’s End’ and enjoy sightseeing around the colonial-era town of Nuwara Eliya.",
                "Continue to the South Coast via Galle, with time to explore the historic Galle Dutch Fort and visit a turtle hatchery in Kosgoda.",
                "Unwind with two days of leisure along the palm-fringed southern beaches, enjoying poolside serenity and tropical warmth.",
                "Conclude your journey with a smooth transfer to the airport, carrying unforgettable memories of Sri Lanka’s beauty, diversity, and charm.",
            ],
        },
        roomCategories: {
            images: [Galle, NuwaraEliya, PackageSL1, PackageSL2, PackageSL3],

            pricings: [
                {
                    type: "Standard",
                    price: 1299,
                },
                {
                    type: "Superior",
                    price: 1299,
                },
                {
                    type: "Deluxe",
                    price: 1299,
                },
                {
                    type: "Luxury",
                    price: 1299,
                },
            ],
        },
        featuredHotels: [
            "c39e6c6a-345a-4b56-9c67-6a8a14ec0975",
            "c35c9c3f-57dd-4007-a46c-e317731c0925",
            "f73f18df-5def-4c7d-9563-20ae9b6c2658",
        ],
    },
    {
        id: "e1616998-2161-41cd-906f-fe6f24fb375c",
        name: "Sri Lanka Highlights",
        title: "Sri Lanka Journeys",
        slug: "sri-lanka-highlights-tour",
        description:
            "Soak up the culture, history, and landscapes of Sri Lanka as you visit Colombo, Dambulla, Kandy, Bogawantalawa Valley, Tangalle, and Galle, all while staying at some of the most luxurious hotels the country has to offer.",
        location: "Sri Lanka",
        nights: 5,
        days: 6,
        price: 999,
        image: PackageSL2,
        heroImages: [Hero6, SLBeach, ColomboSL, TempleOfTooth],
        itinerary: {
            title: "Sri Lanka Highlights Tour",
            description:
                "A Popular Tour Of Sri Lanka – A Captivating Blend Of Culture, History, And Natural Beauty. Discover The Essence Of Sri Lanka With This Carefully Curated Tour That Brings Together The Island’s Rich Cultural Heritage, Fascinating Historical Sites, And Breathtaking Landscapes.At Travel Nation, All Our Holidays Are Tailor-Made To Suit Your Individual Preferences. Use The Itinerary Below As Inspiration, Then Speak To Our Travel Specialists To Craft A Journey That’s Uniquely Yours.",
            list: [
                "1 Night in Colombo to relax and settle in after your arrival.",
                "1 Night in the Cultural Triangle, exploring the iconic Golden Cave Temple and discovering ancient cities and jungle-clad ruins steeped in history.",
                "1 Night in Kandy, the picturesque former royal capital nestled amidst forested hills and rich in cultural charm.",
                "1 Night in Nuwara Eliya, the famed British-era hill station known for its cool climate, colonial charm, and scenic tea plantations.",
                "Scenic drive through the hill country, passing endless tea-carpeted hills before concluding your journey with a relaxing stay in Negombo, a coastal town known for its beaches and lagoon.",
            ],
        },
        roomCategories: {
            images: [Galle, NuwaraEliya, PackageSL1, PackageSL2, PackageSL3],

            pricings: [
                {
                    type: "Standard",
                    price: 1299,
                },
                {
                    type: "Superior",
                    price: 1299,
                },
                {
                    type: "Deluxe",
                    price: 1299,
                },
                {
                    type: "Luxury",
                    price: 1299,
                },
            ],
        },
        featuredHotels: [
            "22096c0f-7610-4341-92bd-110833d796e4",
            "59e9f778-2222-41fc-910b-998dc8c82613",
            "d81e3483-5cde-42a2-8128-774fcd432e45",
        ],
    },
    {
        id: "4be7e0f0-d1ca-4e8c-a830-d1a827319c69",
        name: "Swift Escape to Sri Lanka's Hills & Shores",
        title: "Sri Lanka Journeys",
        slug: "swift-escape-to-sri-lankas-hills-shores",
        description:
            "Criss-cross the island from the historically-rich central province to the verdant mountains in the heart of the island and finally to the southernmost palm-fringed shores.",
        location: "Sri Lanka",
        nights: 3,
        days: 4,
        price: 499,
        image: PackageSL3,
        heroImages: [Hero6, SLBeach, ColomboSL, TempleOfTooth],
        itinerary: {
            title: "Swift Escape Tour of Sri Lanka Hills & Shores",
            description:
                "A Short Getaway through Scenic Hills, Colonial Heritage & Coastal Charm This compact yet enriching tour offers a taste of Sri Lanka’s most picturesque highlands and serene southern shores. Ideal for travellers with limited time, it blends lush hill country experiences with historic sites and coastal beauty.At Travel Nation, all our holidays are tailor-made to suit your individual preferences. Use the itinerary below as inspiration, then speak to our travel specialists to craft a journey that’s uniquely yours.",
            list: [
                "1 night in Kandy, home to the sacred Temple of the Tooth Relic and surrounded by misty hills — a cultural gem with spiritual significance.",
                "1 night in Nuwara Eliya, the charming hill station also known as ‘Little England’, with its cool climate, tea plantations, and colonial elegance.",
                "1 night along the South Coast via Galle, where you can explore the iconic Galle Dutch Fort before unwinding by the ocean.",
                "A scenic journey through Sri Lanka’s vibrant landscapes, from elephant encounters to tea trails and coastal sunsets — all in just four unforgettable days.",
            ],
        },
        roomCategories: {
            images: [Galle, NuwaraEliya, PackageSL1, PackageSL2, PackageSL3],

            pricings: [
                {
                    type: "Standard",
                    price: 1299,
                },
                {
                    type: "Superior",
                    price: 1299,
                },
                {
                    type: "Deluxe",
                    price: 1299,
                },
                {
                    type: "Luxury",
                    price: 1299,
                },
            ],
        },
        featuredHotels: [
            "b4d2e0a2-55d0-41f8-ba2c-b863d548425a",
            "bd5dd5e7-dd04-4101-bf67-c20ae93c53b6",
            "d707f117-6276-4c26-b25d-73eb8c2226da",
        ],
    },
];

//intro
export const servicesData = [
    {
        id: 1,
        image: CustomPackage,
        description:
            "We design personalized itineraries that match your preferences, budget, and travel style.",
    },
    {
        id: 2,
        image: LuxuryHotel,
        description:
            "Stay at carefully selected hotels and resorts that offer comfort and authentic experiences.",
    },
    {
        id: 3,
        image: AdventureActivities,
        description:
            "From hiking to water sports, we arrange thrilling activities for adventure enthusiasts.",
    },
    {
        id: 4,
        image: SafeTravelling,
        description:
            "Travel with confidence and peace of mind. Our Safe Travelling service ensures secure, comfortable, and well-organized journeys",
    },
];

export const dedicatedServices = [
    {
        id: 1,
        image: TailoredPerfection,
        title: "Tailored Perfection",
    },
    {
        id: 2,
        image: DestinationMastery,
        title: "Destination Mastery",
    },
    {
        id: 3,
        image: UnparalleledService,
        title: "Unparalled Services",
    },
    {
        id: 4,
        image: HandpickedStays,
        title: "Handpicked Stays",
    },
    {
        id: 5,
        image: IconicExperiences,
        title: "Iconic Experiences",
    },
];

//Maldives destinations
export const destination_1 = [
    {
        id: 1,
        image: SWHero2,
    },
    {
        id: 2,
        image: MVPHero3,
    },
    {
        id: 3,
        image: SoMaldives1,
    },
    {
        id: 4,
        image: MVPHero5,
    },
    {
        id: 5,
        image: LhAtollHero,
    }
]

export const destination_2 = [
    {
        id: 1,
        image: AlilaHero3,
    },
    {
        id: 2,
        image: AlilaHero4,
    },
    {
        id: 3,
        image: Accommodation1,
    },
    {
        id: 4,
        image: Accommodation2,
    },
    {
        id: 5,
        image: Dining2,
    }
]

export const destination_3 = [
    {
        id: 1,
        image: SunBedIcon,
        title: "Luxury Wellness",
        description: "Rejuvenate with holistic spa treatments in private, overwater pavilions, or join yoga sessions as the sun rises over the horizon."
    },
    {
        id: 2,
        image: HotelBedIcon,
        title: "Tailored Excursions",
        description: "From private yacht trips to sunset cruises, our resorts offer exclusive adventures designed just for you."
    },
    {
        id: 3,
        image: FloatIcon,
        title: "Overwater Villas",
        description: "Wake up to panoramic views of the Indian Ocean and step straight from your room into the warm, turquoise waters."
    },
    {
        id: 4,
        image: DinnerIcon,
        title: "Private Dining",
        description: "Enjoy gourmet meals on secluded sandbanks or under the stars, with world-class chefs preparing exquisite international and Maldivian cuisine."
    }
]

export const destinationImages_3 = [
    {
        id: 1,
        image: AlilaHero5,
    },
    {
        id: 2,
        image: NooeHero4,
    },
    {
        id: 3,
        image: MVPHero5,
    },
    {
        id: 4,
        image: AlilaHero6,
    },
]

export const destinationImages_4 = [
    {
        id: 1,
        image: MVPHero6,
    },
    {
        id: 2,
        image: MVPHero7,
    },
    {
        id: 3,
        image: MVPHero3,
    },
    {
        id: 4,
        image: Hero7,
    },
    {
        id: 5,
        image: SoMaldives5,
    },
    {
        id: 6,
        image: SoMaldives4,
    },
]

export const destinationImages_5 = [
    {
        id: 1,
        image: BaaAtoll,
    },
    {
        id: 2,
        image: LhaviyaniAtoll,
    },
    {
        id: 3,
        image: AtollLocation4,
    },
    {
        id: 4,
        image: AtollLocation2,
    },
    {
        id: 5,
        image: AtollLocation1,
    },
    {
        id: 6,
        image: AtollLocation3,
    },
]

export const atollData = [
    {
        id: 1,
        image: NorthMaleAtoll,
        title: "North Malé Atoll",
        description: "As the gateway to the Maldives, North Malé Atoll is home to the capital, Malé, and offers easy access to some of the most luxurious resorts. It’s perfect for those seeking both tranquility and excitement, with luxury resorts like Gili Lankanfushi and Baros Maldives offering world-class service and close proximity to vibrant reefs and surf breaks."
    },
    {
        id: 2,
        image: SouthMaleAtoll,
        title: "South Malé Atoll",
        description: "Known for its quieter islands, South Malé Atoll is ideal for those looking to escape the crowds and enjoy peaceful seclusion. Resorts like Anantara Veli and COMO Cocoa Island offer intimate getaways with overwater bungalows and private beaches, perfect for honeymooners. The diving here is exceptional, with thriving coral gardens and abundant marine life."
    },
    {
        id: 3,
        image: LhaviyaniAtoll,
        title: "Lhaviyani Atoll",
        description: "Known for its deep lagoons and abundant marine life, Lhaviyani Atoll offers a more remote experience. Resorts like Hurawalhi Island Resort and Kudadoo Maldives Private Island redefine luxury with their all-inclusive packages and underwater restaurants. The atoll’s peaceful setting makes it perfect for those who want to disconnect from the world and reconnect with nature."
    },
    {
        id: 4,
        image: BaaAtoll,
        title: "Baa Atoll",
        description: "A UNESCO Biosphere Reserve, Baa Atoll is famous for its biodiversity and offers some of the best eco-friendly luxury resorts, like Soneva Fushi and Amilla Maldives Resort. Beyond its stunning beaches, Baa Atoll is a haven for manta rays, with Hanifaru Bay serving as a top spot for snorkeling and diving with these gentle giants during the migration season."
    },
    {
        id: 5,
        image: AriAtoll,
        title: "Ari Atoll",
        description: "Ari Atoll is a favorite for diving enthusiasts. Its clear waters and spectacular reefs are home to whale sharks, making it a top spot for divers year-round. Resorts like Constance Moofushi and LUX South Ari Atoll* combine luxury with incredible underwater adventures. The wide, sandy beaches and lush tropical vegetation make Ari Atoll a great choice for both relaxation and exploration."
    },
    {
        id: 6,
        image: VaavuAtoll,
        title: "Vaavu Atoll",
        description: "For divers seeking adventure, Vaavu Atoll is a must-visit. Its Fotteyo Kandu dive site is considered one of the best in the Maldives, with its dramatic underwater landscapes and vibrant marine life. Vaavu Atoll’s untouched beauty and smaller, more intimate resorts offer a perfect balance of luxury and authenticity."
    },

]

export const destinationImages_6 = [
    {
        id: 1,
        image: WellnessSpa,
    },
    {
        id: 2,
        image: Hero2,
    },
    {
        id: 3,
        image: SoMaldives6,
    },
    {
        id: 4,
        image: NooeHero2,
    },
    {
        id: 5,
        image: NooeHero5,
    },
]

//Sri Lanka destinations
export const slOverview = [
    {
        id: 1,
        image: SLCulture,
    },
    {
        id: 2,
        image: SLWaterSport,
    },
    {
        id: 3,
        image: SigiriyaRock,
    },
    {
        id: 4,
        image: PackageSL2,
    },
    {
        id: 5,
        image: PackageSL3,
    },
]

export const slCulture = [
    {
        id: 1,
        image: UpcountryDance,
    },
    {
        id: 2,
        image: DambullaTemple,
    },
    {
        id: 3,
        image: FireDance,
    },
    {
        id: 4,
        image: CulturalDance,
    },
    {
        id: 5,
        image: SLCulture,
    },
]

export const slWildLife = [
    {
        id: 1,
        image: SlWildLife1,
    },
    {
        id: 2,
        image: SlWildLife2,
    },
    {
        id: 3,
        image: SlWildLife3,
    },
    {
        id: 4,
        image: SlWildLife4,
    },
]

export const slJourneys = [
    {
        id: 1,
        image: SlWildLife2,
    },
    {
        id: 2,
        image: Hero6,
    },
    {
        id: 3,
        image: NineArch,
    },
    {
        id: 4,
        image: PackageSL3,
    },
    {
        id: 5,
        image: CinnamonBay,
    },
    {
        id: 6,
        image: SLCulture,
    },
]

//about us
export const aboutUsData = [
    {
        id: 1,
        image: Hero5,
    },
    {
        id: 2,
        image: Hero6,
    },
    {
        id: 3,
        image: Hero1,
    },
    {
        id: 4,
        image: Hero4,
    },
]

export const ourMissionData = [
    {
        id: 1,
        image: Personalized,
        title: "Personalized Service",
        description: "We listen to your travel dreams and tailor each trip to suit your individual preferences, ensuring a bespoke journey like no other."
    },
    {
        id: 2,
        image: Autheticity,
        title: "Authenticity",
        description: "We’re committed to showcasing the true essence of the Maldives and Sri Lanka, from local traditions to off-the-beaten-path destinations."
    },
    {
        id: 3,
        image: EcoLight,
        title: "Sustainability",
        description: "We respect the environments we operate in and work with local communities to promote responsible tourism that preserves these destinations for future generations."
    },
    {
        id: 4,
        image: Excellence,
        title: "Excellence",
        description: "We believe in going the extra mile for our clients, delivering seamless experiences from the moment you contact us to the moment you return home."
    }
]

export const ourValuesData = [
    {
        id: 1,
        image: Explore,
        title: "Passion for Exploration",
        description: "We are travelers at heart, driven by a desire to uncover new experiences and share them with you."
    },
    {
        id: 2,
        image: Honesty,
        title: "Integrity and Trust",
        description: "We value honesty and transparency in everything we do, ensuring you can always rely on us to deliver what we promise."
    },
    {
        id: 3,
        image: Quality,
        title: "Commitment to Quality",
        description: "We carefully select our partners, from luxury resorts to local guides, ensuring every element of your journey is of the highest standard."
    },
    {
        id: 4,
        image: CustomerCentric,
        title: "Customer-Centric Approach",
        description: "Your satisfaction is our top priority. We’re here to make your dream trip a reality, with personalized attention every step of the way."
    }
]

export const slFeaturedHotels = [
    {
        id: "c39e6c6a-345a-4b56-9c67-6a8a14ec0975",
        name: "Goldi Sands Hotel",
        description: "Goldi Sands is a glamorous iconic hotel nestled on the golden beaches of Negombo. Just imagine staying in a hotel that’s right on the beach, just next to the Indian Ocean… and what a wonderful feeling knowing that the beach is all yours anytime of the day or even the night.",
        image: GoldiSandsHotel
    },
    {
        id: "c35c9c3f-57dd-4007-a46c-e317731c0925",
        name: "The Lynden Grove Hotel",
        description: "A luxury boutique hotel with old world charm in the heart of Nuwara Eliya, enjoy the warmth of Sri Lankan hospitality in the cool climes of our Island. While our stylishly designed rooms celebrate the wonder of trees, its elements are reflected in its art and amenities.",
        image: LyndenHotel
    },
    {
        id: "f73f18df-5def-4c7d-9563-20ae9b6c2658",
        name: "The Blue Water Hotel and Spa",
        description: "The Blue Water Hotel and Spa offers 5-star luxury accommodation in Sri Lanka, designed by the world-renowned architect Geoffrey Bawa, featuring breathtaking views of the Indian Ocean. Nestled among Wadduwa’s wild coconut groves, this serene, laid-back paradise boasts stunning sunsets and tranquil surroundings, making it the perfect destination for a luxurious beachfront escape.",
        image: BlueWaterHotel
    },
    {
        id: "22096c0f-7610-4341-92bd-110833d796e4",
        name: "Cinnamon Lakeside",
        description: "Cinnamon Lakeside Colombo is your quintessential resort in the city. With views of the stunning Beira Lake framed in the backdrop, connect with the likeminded over lakefront gatherings and inventive culinary delights. ",
        image: CinnamonLakeside
    },
    {
        id: "59e9f778-2222-41fc-910b-998dc8c82613",
        name: "Cinnamon Lodge",
        description: "And there's plenty of it, in this expansive 27-acre hideaway. Here, comfort cosies up with a touch of rustic charm to reconnect you with nature. Dine under a vast canopy of trees or take an exhilarating safari to watch herds of Elephants roam free. Life here, is part of nature's theatre.",
        image: CinnamonLodge
    },
    {
        id: "d81e3483-5cde-42a2-8128-774fcd432e45",
        name: "The Grand Hotel",
        description: "The Grand Hotel, a timeless masterpiece, where heritage and natural beauty converge. Nestled amid lush surroundings, this luxury hotel in Nuwara Eliya, exudes luxury and sophistication. With its rich history, exquisite architecture, and top-tier amenities, it offers an enchanting blend of old-world charm and modern opulence, making it a premier destination for discerning travelers.",
        image: TheGrandHotel
    },
    {
        id: "b4d2e0a2-55d0-41f8-ba2c-b863d548425a",
        name: "Araliya Green City",
        description: "Located at the very heart of a city that is surrounded by immaculate mountains capes, verdant tea hills and salubrious climes, Araliya Green City is a resort that offers its patrons the joy of an intimate and luxurious getaway! ",
        image: AraliyaHotel
    },
    {
        id: "bd5dd5e7-dd04-4101-bf67-c20ae93c53b6",
        name: "Cinnamon Bey Resort",
        description: "Nestled on the shores where the ocean waves at you like an old friend, Cinnamon Bey Beruwala is a world far from the hurried pace of life. Build sandcastles, let your inner child out or catch the waves; there are no rules in the tropics.",
        image: CinnamonBey
    },
    {
        id: "d707f117-6276-4c26-b25d-73eb8c2226da",
        name: "Cinnamon Citadel",
        description: "Kandy, in a new perspective Framed against the Knuckles Mountain Range and the Mahaweli River, a stay here will open your eyes to the many facets of Kandy.",
        image: CinnamonCitadel
    }
]