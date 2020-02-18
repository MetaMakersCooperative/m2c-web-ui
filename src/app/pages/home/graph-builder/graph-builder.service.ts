import { Injectable } from '@angular/core';
import { HomeData, Event, Category, Member, Make, Facility } from 'src/app/client/home/api.home.model';
import { LinkedHomeData, LinkedEvent, LinkedCategory, LinkedMember, LinkedMake, LinkedFacility } from './graph-builder.model';
import { Dictionary } from 'lodash';

@Injectable({
    providedIn: 'root'
})
export class GraphBuilderService {
    
    getGraph(data: HomeData) : LinkedHomeData {
        var pastEvents: Dictionary<LinkedEvent> = new Object();
        var upcomingEvents: Dictionary<LinkedEvent> = new Object();
        var categories: Dictionary<LinkedCategory> = new Object();
        var members: Dictionary<LinkedMember> = new Object();
        var makes: Dictionary<LinkedMake> = new Object();
        var facilities: Dictionary<LinkedFacility> = new Object();

        Object.values(data.pastEvents).forEach((x:Event) => {
            var i: LinkedEvent = {
                ...x,
                getSimilarUpcomingEvents: () => x.similarUpcomingEvents.map(y => upcomingEvents[y]),
                getSimilarPastEvents: () => x.similarPastEvents.map(y => pastEvents[y]),
                getCategory: () => categories[x.category],
                getHost: () => members[x.host] 
            };
            pastEvents[x.id] = i; 
        });
        Object.values(data.upcomingEvents).forEach((x:Event) => {
            var i: LinkedEvent = {
                ...x,
                getSimilarUpcomingEvents: () => x.similarUpcomingEvents.map(y => upcomingEvents[y]),
                getSimilarPastEvents: () => x.similarPastEvents.map(y => pastEvents[y]),
                getCategory: () => categories[x.category],
                getHost: () => members[x.host] 
            };
            upcomingEvents[x.id] = i; 
        });
        Object.values(data.categories).forEach((x:Category) => {
            var i: LinkedCategory = {
                ...x,
                getUpcomingEvents: () => x.upcomingEvents.map(y => upcomingEvents[y]),
                getPastEvents: () => x.pastEvents.map(y => pastEvents[y]),
                getMembers: () => x.members.map(y => members[y]),
                getMakes: () => x.makes.map(y => makes[y]),
                getFacilities: () => x.facilities.map(y => facilities[y])
            };
            categories[x.id] = i; 
        });
        Object.values(data.members).forEach((x:Member) => {
            var i: LinkedMember = {
                ...x,
                getCategories: () => x.categories.map(y => categories[y]),
                getMakes: () => x.makes.map(y => makes[y]),
                getHostedEvents: () => x.hostedEvents.map(y => pastEvents[y]),
                getAttendedEvents: () => x.attendedEvents.map(y => pastEvents[y]),
                getHostingEvents: () => x.hostingEvents.map(y => upcomingEvents[y]),
                getAttendingEvents: () => x.attendingEvents.map(y => upcomingEvents[y])
            };
            members[x.id] = i; 
        });
        Object.values(data.makes).forEach((x:Make) => {
            var i: LinkedMake = {
                ...x,
                getCategory: () => categories[x.category],
                getMaker: () => members[x.maker],
                getSimilarMakes: () => x.similarMakes.map(y => makes[y])
            };
            makes[x.id] = i; 
        });
        Object.values(data.facilities).forEach((x:Facility) => {
            var i: LinkedFacility = {
                ...x,
                getCategory: () => categories[x.category]
            };
            facilities[x.id] = i; 
        });

        var result = {
            header: data.header,
            getPastEvents: ()=> Object.values(pastEvents) as LinkedEvent[],
            getUpcomingEvents: ()=> Object.values(upcomingEvents) as LinkedEvent[],
            getCategories: ()=> Object.values(categories) as LinkedCategory[],
            getMembers: ()=> Object.values(members) as LinkedMember[],
            getMakes: ()=> Object.values(makes) as LinkedMake[],
            getFacilities: ()=> Object.values(facilities) as LinkedFacility[],
            helpUs: data.helpUs,
            supporters: data.supporters
        };

        return result;
    }
}