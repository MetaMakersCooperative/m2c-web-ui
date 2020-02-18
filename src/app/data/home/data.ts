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
    },
    supporters: {
        name: "Our Supporters",
        overview: "Special thanks to all of the businesses and people who have supported us:",
        partners: [],
        supporters: [{
            name: "Sho Studios",
            url: "https://shoartstudios.com/",
            image: {
                url: "https://metamakers.org/assets/images/logos/sho_logo.png",
                caption: ""
            }
        },
        {
            name: "Fusion Fiber Arts",
            url: "https://www.facebook.com/Fusion-Fiber-Arts-264559844042799/",
            image: {
                url: "https://metamakers.org/assets/images/logos/fusion_fiber_arts_logo.png",
                caption: ""
            }
        },
        {
            name: "Bike Windsor",
            url: "https://bikewindsoressex.com/",
            image: {
                url: "https://metamakers.org/assets/images/logos/bike_windsor_logo.png",
                caption: ""
            }
        },
        {
            name: "Stiemar Bakery",
            url: "http://www.stiemar.com/",
            image: {
                url: "https://metamakers.org/assets/images/logos/stiemar_logo.png",
                caption: ""
            }
        },
        {
            name: "ReNu Kitchen",
            url: "http://renukitchenwindsor.com/",
            image: {
                url: "https://metamakers.org/assets/images/logos/renu_kitchen_logo.gif",
                caption: ""
            }
        },
        {
            name: "Levigator Press",
            url: "http://levigatorpress.ca/",
            image: {
                url: "https://metamakers.org/assets/images/logos/levigator_press_logo.gif",
                caption: ""
            }
        },
        {
            name: "D&R Vacuum",
            url: "https://www.drvacuum.ca/",
            image: {
                url: "https://metamakers.org/assets/images/logos/d_and_r_logo.jpg",
                caption: ""
            }
        },
        {
            name: "Guardian Glass",
            url: "https://www.guardianglass.ca/",
            image: {
                url: "https://metamakers.org/assets/images/logos/guardian_glass_logo.png",
                caption: ""
            }
        },
        {
            name: "WE Tech Alliance",
            url: "https://www.wetech-alliance.com/",
            image: {
                url: "https://metamakers.org/assets/images/logos/wetech_logo.png",
                caption: ""
            }
        },
        {
            name: "Empire Communications",
            url: "https://www.empire-team.com/",
            image: {
                url: "https://metamakers.org/assets/images/logos/empire-logo.png",
                caption: ""
            }
        },
        {
            name: "Filaments.ca",
            url: "https://filaments.ca/",
            image: {
                url: "https://metamakers.org/assets/images/logos/filaments-logo.png",
                caption: ""
            }
        },
    ],
        people: ["Jodi", "Andy"],
        howToHelpTitle: "How to Help",
        howToHelp: "Here's how to help"
    }
};