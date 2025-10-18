import { StaticImageData } from "next/image";

// ---------- Base Image Type ----------
export type ResortImage = StaticImageData;

// ---------- Stay ----------
export interface ResortStay {
    name: string;
    threeNightPrice: number;
    fourNightPrice: number;
    image: ResortImage;
}

// ---------- Inclusions ----------
export interface InclusionDetails {
    description?: string;
    list: string[];
}

// ---------- Accommodation ----------
export interface ResortAccommodation {
    name: string;
    area: string;
    pax: number;
    features: string[];
    images: ResortImage[];
}

// ---------- Dining ----------
export interface ResortDining {
    name: string;
    description: string;
    images: ResortImage[];
}

// ---------- Wellness & Spa ----------
export interface ResortWellnessSpa {
    title: string;
    description: string;
    image: ResortImage;
}

// ---------- Activities ----------
export interface ResortActivity {
    title: string;
    description: string;
    image: ResortImage;
}

// ---------- Direction ----------
export interface ResortDirection {
    description: string;
    mapEmbed: string;
}

// ---------- Main Resort Package ----------
export interface TourPackage {
    id: string;
    name: string;
    title: string;
    price: number;
    slug: string;
    description: string;
    descriptionLong: string;
    location: string;
    nights: number;
    transfer: string;
    image: ResortImage;
    logo: ResortImage;
    heroImages: ResortImage[];
    stays: ResortStay[];
    inclusions: InclusionDetails;
    honeymoonInclusions?: InclusionDetails;
    bdayAnvInclusions?: InclusionDetails;
    resortHighlights: string[];
    accommodation: ResortAccommodation;
    dinings: ResortDining[];
    wellnessSpa: ResortWellnessSpa;
    activities: ResortActivity;
    direction: ResortDirection;
    featuredHotels: string[];
}