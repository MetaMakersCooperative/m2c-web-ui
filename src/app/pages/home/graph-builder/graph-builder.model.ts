import { Image, HeaderSection } from 'src/app/client/home/api.home.model';


export interface LinkedHomeData {
    header: HeaderSection;
    getPastEvents: ()=>LinkedEvent[];
    getUpcomingEvents: ()=>LinkedEvent[];
    getCategories: ()=>LinkedCategory[];
    getMembers: ()=>LinkedMember[];
    getMakes: ()=>LinkedMake[];
    getFacilities: ()=>LinkedFacility[];
}

export interface LinkedFacility {
    name: string;
    description: string;
    image: Image;
    gallery: Image[];
    getCategory: ()=>LinkedCategory;
}

export interface LinkedCategory {
    name: string;
    image: Image;
    getUpcomingEvents: ()=>LinkedEvent[];
    getPastEvents: ()=>LinkedEvent[];
    getMembers: ()=>LinkedMember[];
    getMakes: ()=>LinkedMake[];
    getFacilities:()=>LinkedFacility[];
}

export interface LinkedMake {
    name: string;
    description: string;
    image: Image;
    gallery: Image[];
    getCategory: ()=>LinkedCategory;
    getMaker: ()=>LinkedMember;
    getSimilarMakes: ()=>LinkedMake[];
}

export interface LinkedEvent {
    name: string;
    shortDescription: string;
    longDescription: string;
    image: Image;
    gallery: Image[];
    memberPrice?: number;
    nonMemberPrice?: number;
    date: Date;
    dateFormatted: string;
    getSimilarUpcomingEvents: ()=>LinkedEvent[];
    getSimilarPastEvents: ()=>LinkedEvent[];
    getCategory: ()=>LinkedCategory;
    getHost: ()=>LinkedMember;
}

export interface LinkedMember {
    name: string;
    bio: string;
    image: Image;
    getCategories: ()=>LinkedCategory[];
    getMakes: ()=>LinkedMake[];
    getHostedEvents: ()=>LinkedEvent[];
    getAttendedEvents: ()=>LinkedEvent[];
    getHostingEvents: ()=>LinkedEvent[];
    getAttendingEvents: ()=>LinkedEvent[];
}