import { StaticImageData } from "next/image";

// ---------- Base Image Type ----------
export type ResortImage = StaticImageData;

// ---------- Stay ----------
export type ResortStay = {
    name: string;
    threeNightPrice: number;
    fourNightPrice: number;
    image: ResortImage;
}

// ---------- Inclusions ----------
export type InclusionDetails = {
    description?: string;
    list: string[];
}

// ---------- Accommodation ----------
export type ResortAccommodation = {
    name: string;
    area: string;
    pax: number;
    features: string[];
    images: ResortImage[];
}

// ---------- Dining ----------
export type ResortDining = {
    name: string;
    description: string;
    images: ResortImage[];
}

// ---------- Wellness & Spa ----------
export type ResortWellnessSpa = {
    title: string;
    description: string;
    image: ResortImage;
}

// ---------- Activities ----------
export type ResortActivity = {
    title: string;
    description: string;
    image: ResortImage;
}

// ---------- Direction ----------
export type ResortDirection = {
    description: string;
    mapEmbed: string;
}

// ---------- Pricing ----------
export type Pricing = {
    type: string;
    price: number;
};

// ---------- Itinerary ----------
export type Itinerary = {
    title: string;
    description: string;
    list: string[];
};

export type RoomCategory = {
    images: ResortImage[],
    pricings: Pricing[]

}

// ---------- Base Package ----------
export interface BaseTourPackage {
    id: string;
    name: string;
    title: string;
    slug: string;
    description: string;
    location: string;
    nights: number;
    price: number;
    image: ResortImage;
    heroImages?: ResortImage[];
}

// ---------- Maldives Package ----------
export interface MaldivesTourPackage extends BaseTourPackage {
    descriptionLong: string;
    transfer: string;
    logo: ResortImage;
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

// ---------- Sri Lanka Package ----------
export interface SriLankaTourPackage extends BaseTourPackage {
    days: number;
    itinerary: Itinerary;
    roomCategories: RoomCategory;
};

// ---------- Union Type ----------
export type TourPackage = MaldivesTourPackage | SriLankaTourPackage;