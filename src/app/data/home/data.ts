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
    },
    pastEvents: {
        "1": {
            id: 1,
            name: "Pottery Class",
            shortDescription: "Make a bowl",
            longDescription: "Make a bowl out of clay.",
            image: {
                url: "/assets/images/Facilities.jpg",
                caption: "makerspace"
            },
            gallery: [{
                url: "/assets/images/Facilities.jpg",
                caption: "makerspace"
            }],
            memberPrice: null,
            nonMemberPrice: 10,
            date: "2020-02-11",
            dateFormatted: "Feb. 11, 2020",
            similarUpcomingEvents: [1, 2],
            similarPastEvents: [1, 2],
            category: 1,
            host: 1
        }, "2": {
            id: 2,
            name: "Wood Class",
            shortDescription: "Make a bowl",
            longDescription: "Make a bowl out of wood.",
            image: {
                url: "/assets/images/Facilities.jpg",
                caption: "makerspace"
            },
            gallery: [{
                url: "/assets/images/Facilities.jpg",
                caption: "makerspace"
            }],
            memberPrice: null,
            nonMemberPrice: 10,
            date: "2020-02-13",
            dateFormatted: "Feb. 13, 2020",
            similarUpcomingEvents: [1, 2],
            similarPastEvents: [1, 2],
            category: 1,
            host: 1
        }
    },
    upcomingEvents: {
        "1": {
            id: 1,
            name: "Pottery Class",
            shortDescription: "Make a bowl",
            longDescription: "Make a bowl out of clay.",
            image: {
                url: "/assets/images/Facilities.jpg",
                caption: "makerspace"
            },
            gallery: [{
                url: "/assets/images/Facilities.jpg",
                caption: "makerspace"
            }],
            memberPrice: null,
            nonMemberPrice: 10,
            date: "2020-02-20",
            dateFormatted: "Feb. 20, 2020",
            similarUpcomingEvents: [1, 2],
            similarPastEvents: [1, 2],
            category: 1,
            host: 1
        }, "2": {
            id: 2,
            name: "Wood Class",
            shortDescription: "Make a bowl",
            longDescription: "Make a bowl out of wood.",
            image: {
                url: "/assets/images/Facilities.jpg",
                caption: "makerspace"
            },
            gallery: [{
                url: "/assets/images/Facilities.jpg",
                caption: "makerspace"
            }],
            memberPrice: null,
            nonMemberPrice: 10,
            date: "2020-02-27",
            dateFormatted: "Feb. 27, 2020",
            similarUpcomingEvents: [1, 2],
            similarPastEvents: [1, 2],
            category: 1,
            host: 1
        }
    },
    categories: {
        "1": {
            id: 1,
            name: "Pottery",
            image: {
                url: "/assets/images/Facilities.jpg",
                caption: "makerspace"
            },
            upcomingEvents: [1],
            pastEvents: [1],
            members: [1],
            makes: [1],
            facilities: [1],
        },
        "2": {
            id: 2,
            name: "Woodworking",
            image: {
                url: "/assets/images/Facilities.jpg",
                caption: "makerspace"
            },
            upcomingEvents: [2],
            pastEvents: [2],
            members: [2],
            makes: [2],
            facilities: [2],
        }
    },
    members: {
        "1": {
            id: 1,
            name: "Nik",
            bio: "Nik is cool",
            image: {
                url: "/assets/images/Facilities.jpg",
                caption: "makerspace"
            },
            categories: [],
            makes: [],
            hostedEvents: [],
            attendedEvents: [],
            hostingEvents: [],
            attendingEvents: []
        },
        "2": {
            id: 2,
            name: "Shawn",
            bio: "Shawn is cool",
            image: {
                url: "/assets/images/Facilities.jpg",
                caption: "makerspace"
            },
            categories: [],
            makes: [],
            hostedEvents: [],
            attendedEvents: [],
            hostingEvents: [],
            attendingEvents: []
        }
    },
    makes: {
        "1": {
            id: 1,
            name: "Loom",
            description: "It's a loom",
            image: {
                url: "/assets/images/Facilities.jpg",
                caption: "makerspace"
            },
            gallery: [{
                url: "/assets/images/Facilities.jpg",
                caption: "makerspace"
            }],
            category: 1,
            maker: 1,
            similarMakes: []
        },
        "2": {
            id: 2,
            name: "Pot",
            description: "It's a pot",
            image: {
                url: "/assets/images/Facilities.jpg",
                caption: "makerspace"
            },
            gallery: [{
                url: "/assets/images/Facilities.jpg",
                caption: "makerspace"
            }],
            category: 1,
            maker: 1,
            similarMakes: []
        }
    },
    facilities: {
        "1": {
            id: 1,
            name: "Wheel",
            description: "for pottery",
            image: {
                url: "/assets/images/Facilities.jpg",
                caption: "makerspace"
            },
            gallery: [{
                url: "/assets/images/Facilities.jpg",
                caption: "makerspace"
            }],
            category: 1,
            tools: []
        },
        "2": {
            id: 2,
            name: "Shop",
            description: "for wood",
            image: {
                url: "/assets/images/Facilities.jpg",
                caption: "makerspace"
            },
            gallery: [{
                url: "/assets/images/Facilities.jpg",
                caption: "makerspace"
            }],
            category: 2,
            tools: []
        }
    },
    helpUs: {
        text: "We hope to offer the following in the future.  Click below to learn more about how you can help us.",
        needs: [
            {
                category: "metalworking",
                overview: "we need tools and volunteers",
                wishlist: [{
                    name: "Horizontal bandsaw",
                    description: "for cutting metal",
                    image: {
                        url: "/assets/images/Facilities.jpg",
                        caption: "makerspace"
                    }
                }]
            }
        ]
    }
};