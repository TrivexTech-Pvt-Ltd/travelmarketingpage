
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
export type roomHighligts = {
    title: string;
    description: string
}

// ---------- Accommodation ----------
export type ResortAccommodation = {
    name: string;
    slug: string;
    area: string;
    paxAdult: number;
    paxChild: number;
    features: string[];
    images: ResortImage[];
    floorPlan: resortMap;
    roomDetails: highlightContent
}

// ---------- Dining ----------
export type ResortDining = {
    name: string;
    description: string[];
    images: ResortImage[];
}

// ---------- Wellness & Spa ----------
export type ResortWellnessSpa = {
    title: string;
    description: string;
    images: ResortImage[];
}

// ---------- Activities ----------
export type ResortActivity = {
    title: string;
    description: string[];
    images: ResortImage[];
    activityList?: string[]

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

// ---------- Room Categories SL ----------
export type RoomCategory = {
    images: ResortImage[],
    pricings: Pricing[]

}

// ---------- Resort Map Maldives ----------
export type resortMap = {
    path: string;
}


// ---------- Highlights ----------
export type highlightContent = {
    title: string;
    highlights: string[]
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
    featuredHotels: string[];
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
    accommodation: ResortAccommodation[];
    dinings: ResortDining[];
    wellnessSpa: ResortWellnessSpa[];
    activities: ResortActivity[];
    direction: ResortDirection;
    resortMap: resortMap;
    highlightContent: highlightContent;
}

// ---------- Sri Lanka Package ----------
export interface SriLankaTourPackage extends BaseTourPackage {
    days: number;
    itinerary: Itinerary;
    roomCategories: RoomCategory;
};

// ----------Tour Union Type ----------
export type TourPackage = MaldivesTourPackage | SriLankaTourPackage;


