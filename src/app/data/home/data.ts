import { HomeData } from 'src/app/client/home/api.home.model';

export const fallbackHomeData: HomeData = {
    header: {
        gallery: [
            {
                url: "/assets/images/Facilities.jpg",
                caption: "makerspace"
            }
        ],
        logo: {
            url: "/assets/images/logo.png",
            caption: "Meta Makers Cooperative (M2C)"
        },
        name: "Meta Makers Cooperative",
        motto: "Explore. Collaborate. Make.",
        headline: "Meta Makers Cooperative (M2C) is a non-profit, member-run makerspace in Windsor, On where you can explore new interests, meet other makers, and have fun making things."
    }
};