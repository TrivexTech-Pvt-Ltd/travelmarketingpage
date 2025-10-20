import { StaticImageData } from "next/image";
import { Accommodation1, Accommodation2, Accommodation3, Accommodation4, AdventureActivities, CustomPackage, DestinationMastery, Dining1, Dining2, Dining3, HandpickedStays, Hero1, Hero2, Hero3, Hero4, Hero5, Hero6, Hero7, Hero8, IconicExperiences, LuxuryHotel, PackageM1, PackageM2, PackageM3, PackageM4, PackageM5, PackageM6, PackageSL1, PackageSL2, PackageSL3, ResortActivities, SafeTravelling, TailoredPerfection, UnparalleledService, WellnessSpa, SiyamWorldsLogo, NooeMaldivesLogo, SWStay1, SWStay2, SWStay3, NHKudaRahLogo, SLBeach, ColomboSL, TempleOfTooth, Galle, NuwaraEliya, SoLogo, SoMaldives3, SoMaldives1, SoMaldives2, SOStay1, SWHero2, SWHero3, SWHero4, NooeStay1, NooeStay2, NooeStay3, NooeHero3, NooeHero2 } from "./staticImages";

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
        nights: 3,
        transfer: "Seaplane Transfers",
        image: PackageM1,
        logo: SiyamWorldsLogo,
        heroImages: [
            Hero1, SWHero2, SWHero3, SWHero4
        ],
        stays: [
            {
                name: "Water Villa with\nPool + Slide",
                threeNightPrice: 3499,
                fourNightPrice: 3869,
                image: SWStay1
            },
            {
                name: "Sunset Pool\nBeach Villa",
                threeNightPrice: 3499,
                fourNightPrice: 3869,
                image: SWStay2
            },
            {
                name: "Lagoon Villa\nwith Pool + Slide",
                threeNightPrice: 3799,
                fourNightPrice: 4269,
                image: SWStay3
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
            list: [
                "1 bottle of sparkling wine & a fruit basket on arrival",
                "Romantic honeymoon dinner with a decorated table at an à la carte restaurant",
                "Special evening turn-down service with bed decoration on arrival night",
                "1 celebratory honeymoon cake"
            ],
        },
        bdayAnvInclusions: {
            description: "A minimum 3-night stay is required. A marriage certificate/registration dated within the last 12 months must be presented at the time of booking.",
            list: [
                "1 bottle of sparkling wine & a fruit basket on arrival",
                "Fruit basket on arrival day"
            ]
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
        accommodation:
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
        },
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
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.879609110734!2d73.35665487581474!3d5.730475231868851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b6b49000000070d%3A0x78a59fe2dd50922!2sSiyam%20World%20Maldives!5e0!3m2!1sen!2slk!4v1760547149905!5m2!1sen!2slk"
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
        slug: "nooe-maldives-kunaavashi",
        description: "NOOE Maldives Kunaavashi is a luxury island retreat in the Vaavu Atoll, offering overwater and beachfront villas, world-class dining, and stunning marine adventures.",
        descriptionLong: "NOOE Maldives Kunaavashi is a luxury island retreat in the Vaavu Atoll, offering overwater and beachfront villas, world-class dining, and stunning marine adventures. With crystal-clear waters, vibrant coral reefs, and a serene ambiance, it’s the perfect escape for relaxation and adventure.",
        location: "Vaavu Atoll, Maldives",
        nights: 3,
        price: 1999,
        transfer: "Seaplane Transfers",
        image: PackageM2,
        logo: NooeMaldivesLogo,
        heroImages: [
            Hero2, PackageM2, NooeHero3, NooeHero2
        ],
        stays: [
            {
                name: "Beach Villa",
                threeNightPrice: 1999,
                fourNightPrice: 2499,
                image: NooeStay1
            },
            {
                name: "Sunset Beach\nVilla",
                threeNightPrice: 2199,
                fourNightPrice: 2729,
                image: NooeStay2
            },
            {
                name: "Duplex\nOverwater Villa\nwith Private Pool",
                threeNightPrice: 2499,
                fourNightPrice: 3099,
                image: NooeStay3
            }
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
            description: "A minimum 3-night stay is required. A marriage certificate/registration dated within the last 12 months must be presented at the time of booking.",
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
            "Malé Velana International Airport"
        ],
        accommodation:
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
        ,
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
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.78387728504!2d73.36210477581298!3d3.636736749960175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b40ab277acbc16b%3A0x4969a487361598b4!2sNOOE%20Maldives%20Kunaavashi!5e0!3m2!1sen!2slk!4v1760574930140!5m2!1sen!2slk"
        },
        featuredHotels: [
            "f2f02ff2-1dd2-405a-a140-726ae84fa8a3",
            "f540cbb7-0314-4aae-923d-dc9e518998de",
            "ec37735e-8b69-451c-871d-e5da508c5f9e"
        ]
    },
    {
        id: "ec37735e-8b69-451c-871d-e5da508c5f9e",
        name: "NH Maldives Kuda Rah",
        title: "A perfect blend of relaxation & Adventure",
        slug: "nh-maldives-kuda-rah",
        description: "NH Maldives Kuda Rah is a luxurious island retreat in the South Ari Atoll, offering elegant overwater and beachfront villas, world-class dining, and breathtaking ocean views.",
        descriptionLong: "NH Maldives Kuda Rah Resort offers the perfect blend of relaxation and adventure. Stay at the best resort in Maldives to enjoy the lounge by the pool in your overwater villa, swim in our crystal-clear lagoon and enjoy signature treatments at our spa. Discover world-class dive sites, then unwind with delicious dining and chilled cocktails as the stars light up the night sky. Welcome to your island paradise.",
        location: "South Ari Atoll, Maldives",
        nights: 3,
        price: 2329,
        transfer: "Seaplane Transfers",
        image: PackageM3,
        logo: NHKudaRahLogo,
        heroImages: [
            Hero4, Hero2, Hero3, Hero4
        ],
        stays: [
            {
                name: "Beach Villa",
                threeNightPrice: 1999,
                fourNightPrice: 2499,
                image: NooeStay1
            },
            {
                name: "Sunset Beach\nVilla",
                threeNightPrice: 2199,
                fourNightPrice: 2729,
                image: NooeStay2
            },
            {
                name: "Duplex\nOverwater Villa\nwith Private Pool",
                threeNightPrice: 2499,
                fourNightPrice: 3099,
                image: NooeStay3
            }
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
                "20% discount on the À la Carte menu at the Ocean Restaurant (food only)"
            ],

        },
        honeymoonInclusions: {
            description: "A minimum 3-night stay is required. A marriage certificate/registration dated within the last 12 months must be presented at the time of booking.",
            list: [
                "1 bottle of sparkling wine & a fruit basket on arrival",
            ],
        },
        resortHighlights: [
            "Where castaway meets runway, the stylish collection of 80 villas with private pool",
            "15-minute speedboat ride from Malé International Airport",
            "Overlooking the Emboodhoo Lagoon home to diverse marine life",
            "Few minutes’ boat ride from CROSSROADS Maldives",
            "Diverse dining, a sophisticated playful beach club and serene spa",
            "Island Couture",
            "Malé Velana International Airport"
        ],
        accommodation:
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
        ,
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
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.059294959741!2d72.90826057581309!3d3.5738396503934795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b4732b1ff44b6b3%3A0xda216f72d2752680!2sNH%20Maldives%20Kuda%20Rah%20Resort!5e0!3m2!1sen!2slk!4v1760929104859!5m2!1sen!2slk"
        },
        featuredHotels: [
            "eb8801d0-d377-4721-8ae5-c09f8ec4c45c",
            "f2f02ff2-1dd2-405a-a140-726ae84fa8a3",
            "f540cbb7-0314-4aae-923d-dc9e518998de"
        ]
    },
    {
        id: "9345f679-21be-4067-a1f7-c00b67d2d4e3",
        name: "SO/ Maldives",
        title: "A Luxurious escape to exclusive beachfront villas",
        slug: "so-maldives",
        description: "SO/ Maldives is a stunning 5-star resort located on the private island of Hinnavaru in the Noonu Atoll, offering guests an exclusive retreat surrounded by crystal-clear waters and pristine white-sand beaches.",
        descriptionLong: "SO/ Maldives is a stunning 5-star resort located on the private island of Hinnavaru in the Noonu Atoll, offering guests an exclusive retreat surrounded by crystal-clear waters and pristine white-sand beaches. The resort features contemporary design with vibrant, stylish accommodations, ranging from overwater villas to beachfront suites. Guests can enjoy world-class dining, a luxurious spa, and a range of water activities including diving, snorkeling, and sailing.",
        location: "Noonu Atoll, Maldives",
        nights: 3,
        price: 4459,
        transfer: "Speedboat Transfers",
        image: PackageM4,
        logo: SoLogo,
        heroImages: [
            Hero5, SoMaldives3, SoMaldives1, SoMaldives2
        ],
        stays: [
            {
                name: "Lagoon Water\nPool Villa\nCollection",
                threeNightPrice: 4459,
                fourNightPrice: 5719,
                image: SoMaldives3
            },
            {
                name: "Ocean Water\nPool Villa\nCollection",
                threeNightPrice: 4669,
                fourNightPrice: 5999,
                image: SOStay1
            },
            {
                name: "Lagoon Beach\nPool Villa\nCollection",
                threeNightPrice: 4999,
                fourNightPrice: 6439,
                image: SoMaldives1
            }
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
                "Complimentary daily wellness activities, subject to the resort schedule."
            ],

        },
        resortHighlights: [
            "A stylish collection of 80 villas with private pools.",
            "15-minute speedboat ride from Malé International Airport.",
            "Overlooking the Emboodhoo Lagoon, home to diverse marine life.",
            "A few minutes’ boat ride from CROSSROADS Maldives.",
            "Diverse dining, a sophisticated playful beach club, and a serene spa.",
            "Male’ Velana International Airport."
        ],
        accommodation:
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
        ,
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
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.491708085454!2d73.4784780758131!3d4.123193546391573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b3f7ff34cb1ed39%3A0x5842714e59c7357f!2sSO%2F%20Maldives!5e0!3m2!1sen!2slk!4v1760923151802!5m2!1sen!2slk"
        },
        featuredHotels: [
            "d0e3f36a-e4bb-4312-aba6-aa5292f7b026",
            "f540cbb7-0314-4aae-923d-dc9e518998de",
            "f2f02ff2-1dd2-405a-a140-726ae84fa8a3"
        ]
    },
    {
        id: "f2f02ff2-1dd2-405a-a140-726ae84fa8a3",
        name: "MÖVENPICK Resort Kuredhivaru Maldives",
        title: "Luxurious overwater villas, crystal-clear waters, and world-class amenities",
        slug: "siyam-world-maldives",
        description: "Mövenpick Resort Kuredhivaru Maldives is a luxurious resort located in the pristine Noonu Atoll, offering stunning overwater villas and beachfront bungalows with breathtaking views of turquoise waters.",
        descriptionLong: "NOOE Maldives Kunaavashi is a luxury island retreat in the Vaavu Atoll, offering overwater and beachfront villas, world-class dining, and stunning marine adventures. With crystal-clear waters, vibrant coral reefs, and a serene ambiance, it’s the perfect escape for relaxation and adventure.",
        location: "Noonu Atoll, Maldives",
        nights: 3,
        price: 4459,
        transfer: "Seaplane Transfers",
        image: PackageM5,
        logo: NooeMaldivesLogo,
        heroImages: [
            Hero1, Hero2, Hero3, Hero4
        ],
        stays: [
            {
                name: "Water Villa with Pool + Slide",
                threeNightPrice: 3499,
                fourNightPrice: 3869,
                image: SWStay1
            },
            {
                name: "Sunset Pool Beach Villa",
                threeNightPrice: 3499,
                fourNightPrice: 3869,
                image: SWStay1
            },
            {
                name: "Lagoon Villa with Pool + Slide",
                threeNightPrice: 3799,
                fourNightPrice: 4269,
                image: SWStay1
            }
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
        accommodation:
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
        ,
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
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.78387728504!2d73.36210477581298!3d3.636736749960175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b40ab277acbc16b%3A0x4969a487361598b4!2sNOOE%20Maldives%20Kunaavashi!5e0!3m2!1sen!2slk!4v1760574930140!5m2!1sen!2slk"
        },
        featuredHotels: [
            "f540cbb7-0314-4aae-923d-dc9e518998de",
            "ec37735e-8b69-451c-871d-e5da508c5f9e",
            "9345f679-21be-4067-a1f7-c00b67d2d4e3"
        ]
    },
    {
        id: "f540cbb7-0314-4aae-923d-dc9e518998de",
        name: "Alila Kothaifaru Maldives",
        title: "Ultimate Relaxation in Crystal-clear waters",
        slug: "siyam-world-maldives",
        description: "Alila Kothaifaru Maldives is a luxurious resort nestled in the heart of the Maldives, offering an idyllic escape surrounded by pristine white-sand beaches and crystal-clear waters.",
        descriptionLong: "NOOE Maldives Kunaavashi is a luxury island retreat in the Vaavu Atoll, offering overwater and beachfront villas, world-class dining, and stunning marine adventures. With crystal-clear waters, vibrant coral reefs, and a serene ambiance, it’s the perfect escape for relaxation and adventure.",
        location: "North Raa Atoll, Maldives",
        nights: 3,
        price: 5599,
        transfer: "Seaplane Transfers",
        image: PackageM6,
        logo: NooeMaldivesLogo,
        heroImages: [
            Hero1, Hero2, Hero3, Hero4
        ],
        stays: [
            {
                name: "Water Villa with Pool + Slide",
                threeNightPrice: 3499,
                fourNightPrice: 3869,
                image: SWStay1
            },
            {
                name: "Sunset Pool Beach Villa",
                threeNightPrice: 3499,
                fourNightPrice: 3869,
                image: SWStay1
            },
            {
                name: "Lagoon Villa with Pool + Slide",
                threeNightPrice: 3799,
                fourNightPrice: 4269,
                image: SWStay1
            }
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
        accommodation:
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
        ,
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
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.78387728504!2d73.36210477581298!3d3.636736749960175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b40ab277acbc16b%3A0x4969a487361598b4!2sNOOE%20Maldives%20Kunaavashi!5e0!3m2!1sen!2slk!4v1760574930140!5m2!1sen!2slk"
        },
        featuredHotels: [
            "f2f02ff2-1dd2-405a-a140-726ae84fa8a3",
            "eb8801d0-d377-4721-8ae5-c09f8ec4c45c",
            "d0e3f36a-e4bb-4312-aba6-aa5292f7b026"
        ]
    },
];

//Sri Lankan tour packages
export const srilankanData = [
    {
        id: "ff41ffd5-d723-4be9-9bab-e465e12671e1",
        name: "Sri Lanka Experience",
        title: "Sri Lanka Journeys",
        slug: "sri-lanka-experience-tour-itinerary",
        description: "Experience the highlights of this emerald island nation on a luxury 10-day Classic Sri Lanka journey.",
        location: "Sri Lanka",
        nights: 9,
        days: 10,
        price: 1299,
        image: PackageSL1,
        heroImages: [
            Hero6, SLBeach, ColomboSL, TempleOfTooth
        ],
        itinerary: {
            title: "Sri Lanka Experience Tour Itinerary",
            description: "A Deeper Discovery of Sri Lanka’s Cultural Soul, Scenic Highlands & Coastal Serenity\nEmbark on a beautifully curated 10-day journey that takes you from ancient civilizations to misty mountains and sun-drenched beaches. This immersive itinerary offers a perfect balance of adventure, culture, wildlife, and relaxation — showcasing the very best of Sri Lanka.\nAt Travel Nation, all our holidays are tailor-made to suit your individual preferences. Use the itinerary below as inspiration, then speak to our travel specialists to craft a journey that’s uniquely yours.",
            list: [
                "Start your journey in Negombo, unwinding by the pool and soaking in the coastal charm after your arrival.",
                "Travel to Sigiriya, where you will climb the iconic Lion Rock Fortress and enjoy a traditional village experience.",
                "Explore the ancient city of Polonnaruwa, followed by an exciting safari through Minneriya National Park, home to elephants and exotic wildlife.",
                "Head to Kandy, visiting the Golden Cave Temple in Dambulla and experiencing the sacred Temple of the Tooth Relic during the atmospheric evening pooja.",
                "Board a scenic train to Nuwara Eliya, travelling through emerald tea country into the heart of Sri Lanka’s hill country.",
                "Trek through Horton Plains National Park, discover ‘World’s End’ and enjoy sightseeing around the colonial-era town of Nuwara Eliya.",
                "Continue to the South Coast via Galle, with time to explore the historic Galle Dutch Fort and visit a turtle hatchery in Kosgoda.",
                "Unwind with two days of leisure along the palm-fringed southern beaches, enjoying poolside serenity and tropical warmth.",
                "Conclude your journey with a smooth transfer to the airport, carrying unforgettable memories of Sri Lanka’s beauty, diversity, and charm."
            ]

        },
        roomCategories: {
            images: [
                Galle, NuwaraEliya, PackageSL1, PackageSL2, PackageSL3
            ],

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
                }
            ]
        },

    },
    {
        id: "e1616998-2161-41cd-906f-fe6f24fb375c",
        name: "Sri Lanka Highlights",
        title: "Sri Lanka Journeys",
        slug: "sri-lanka-highlights-tour",
        description: "Soak up the culture, history, and landscapes of Sri Lanka as you visit Colombo, Dambulla, Kandy, Bogawantalawa Valley, Tangalle, and Galle, all while staying at some of the most luxurious hotels the country has to offer.",
        location: "Sri Lanka",
        nights: 5,
        days: 6,
        price: 999,
        image: PackageSL2,
        heroImages: [
            Hero6, SLBeach, ColomboSL, TempleOfTooth
        ],
        itinerary: {
            title: "Sri Lanka Highlights Tour",
            description: "A Popular Tour Of Sri Lanka – A Captivating Blend Of Culture, History, And Natural Beauty. Discover The Essence Of Sri Lanka With This Carefully Curated Tour That Brings Together The Island’s Rich Cultural Heritage, Fascinating Historical Sites, And Breathtaking Landscapes.At Travel Nation, All Our Holidays Are Tailor-Made To Suit Your Individual Preferences. Use The Itinerary Below As Inspiration, Then Speak To Our Travel Specialists To Craft A Journey That’s Uniquely Yours.",
            list: [
                "1 Night in Colombo to relax and settle in after your arrival.",
                "1 Night in the Cultural Triangle, exploring the iconic Golden Cave Temple and discovering ancient cities and jungle-clad ruins steeped in history.",
                "1 Night in Kandy, the picturesque former royal capital nestled amidst forested hills and rich in cultural charm.",
                "1 Night in Nuwara Eliya, the famed British-era hill station known for its cool climate, colonial charm, and scenic tea plantations.",
                "Scenic drive through the hill country, passing endless tea-carpeted hills before concluding your journey with a relaxing stay in Negombo, a coastal town known for its beaches and lagoon."
            ]

        },
        roomCategories: {
            images: [
                Galle, NuwaraEliya, PackageSL1, PackageSL2, PackageSL3
            ],

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
                }
            ]
        },
    },
    {
        id: "4be7e0f0-d1ca-4e8c-a830-d1a827319c69",
        name: "Swift Escape to Sri Lanka's Hills & Shores",
        title: "Sri Lanka Journeys",
        slug: "swift-escape-to-sri-lankas-hills-shores",
        description: "Criss-cross the island from the historically-rich central province to the verdant mountains in the heart of the island and finally to the southernmost palm-fringed shores.",
        location: "Sri Lanka",
        nights: 3,
        days: 4,
        price: 499,
        image: PackageSL3,
        heroImages: [
            Hero6, SLBeach, ColomboSL, TempleOfTooth
        ],
        itinerary: {
            title: "Swift Escape Tour of Sri Lanka Hills & Shores",
            description: "A Short Getaway through Scenic Hills, Colonial Heritage & Coastal Charm This compact yet enriching tour offers a taste of Sri Lanka’s most picturesque highlands and serene southern shores. Ideal for travellers with limited time, it blends lush hill country experiences with historic sites and coastal beauty.At Travel Nation, all our holidays are tailor-made to suit your individual preferences. Use the itinerary below as inspiration, then speak to our travel specialists to craft a journey that’s uniquely yours.",
            list: [
                "1 night in Kandy, home to the sacred Temple of the Tooth Relic and surrounded by misty hills — a cultural gem with spiritual significance.",
                "1 night in Nuwara Eliya, the charming hill station also known as ‘Little England’, with its cool climate, tea plantations, and colonial elegance.",
                "1 night along the South Coast via Galle, where you can explore the iconic Galle Dutch Fort before unwinding by the ocean.",
                "A scenic journey through Sri Lanka’s vibrant landscapes, from elephant encounters to tea trails and coastal sunsets — all in just four unforgettable days."
            ]

        },
        roomCategories: {
            images: [
                Galle, NuwaraEliya, PackageSL1, PackageSL2, PackageSL3
            ],

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
                }
            ]
        },
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

