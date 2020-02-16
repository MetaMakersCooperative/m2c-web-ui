import { Dictionary } from 'lodash';

export interface HomeData {
    header: HeaderSection;
    pastEvents?: Dictionary<Event>;
    upcomingEvents?: Dictionary<Event>;
    categories?: Dictionary<Category>;
    members?: Dictionary<Member>;
    makes?: Dictionary<Make>;
    facilities?: Dictionary<Facility>;
}

export interface HeaderSection {
    gallery: Image[];
    logo: Image;
    name: string;
    motto: string;
    headline: string;
}

export interface Image {
    url: string;
    caption: string;
}

export interface Facility {
    id: number;
    name: string;
    description: string;
    image: Image;
    gallery: Image[];
    category: number;
}

export interface Category {
    id: number;
    name: string;
    image: Image;
    upcomingEvents: number[];
    pastEvents: number[];
    members: number[];
    makes: number[];
    facilities: number[];
}

export interface Make {
    id: number;
    name: string;
    description: string;
    image: Image;
    gallery: Image[];
    category: number;
    maker: number;
    similarMakes: number[];
}

export interface Event {
    id: number;
    name: string;
    shortDescription: string;
    longDescription: string;
    image: Image;
    gallery: Image[];
    memberPrice?: number;
    nonMemberPrice?: number;
    date: Date;
    dateFormatted: string;
    similarUpcomingEvents: number[];
    similarPastEvents: number[];
    category: number;
    host: number;
}

export interface Member {
    id: number;
    name: string;
    bio: string;
    image: Image;
    categories: number[];
    makes: number[];
    hostedEvents: number[];
    attendedEvents: number[];
    hostingEvents: number[];
    attendingEvents: number[];
}