
export interface HomeData {
    header: HeaderSection;

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