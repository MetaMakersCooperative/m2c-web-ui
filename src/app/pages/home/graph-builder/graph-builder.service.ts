import { Injectable } from '@angular/core';
import { HomeData, Event, Category, Member, Make, Facility } from 'src/app/client/home/api.home.model';
import { LinkedHomeData, LinkedEvent, LinkedCategory, LinkedMember, LinkedMake, LinkedFacility } from './graph-builder.model';
import { Dictionary } from 'lodash';

@Injectable({
    providedIn: 'root'
})
export class GraphBuilderService {
    
    getGraph(data: HomeData) : LinkedHomeData {
        var pastEvents = new Dictionary<LinkedEvent>();
        var upcomingEvents = new Dictionary<LinkedEvent>();
        var categories = new Dictionary<LinkedCategory>();
        var members= new Dictionary<LinkedMember>();
        var makes = new Dictionary<LinkedMake>();
        var facilities = new Dictionary<LinkedFacility>();

        data.pastEvents.array.forEach((x:Event) => {
            var i: LinkedEvent = {
                ...x,
                getSimilarUpcomingEvents: () => x.similarUpcomingEvents.map(y => upcomingEvents[y]),
                getSimilarPastEvents: () => x.similarPastEvents.map(y => pastEvents[y]),
                getCategory: () => categories[x.category],
                getHost: () => members[x.host] 
            };
            pastEvents[x.id] = i; 
        });
        data.upcomingEvents.array.forEach((x:Event) => {
            var i: LinkedEvent = {
                ...x,
                getSimilarUpcomingEvents: () => x.similarUpcomingEvents.map(y => upcomingEvents[y]),
                getSimilarPastEvents: () => x.similarPastEvents.map(y => pastEvents[y]),
                getCategory: () => categories[x.category],
                getHost: () => members[x.host] 
            };
            upcomingEvents[x.id] = i; 
        });
        data.categories.array.forEach((x:Category) => {
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
        data.members.array.forEach((x:Member) => {
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
        data.makes.array.forEach((x:Make) => {
            var i: LinkedMake = {
                ...x,
                getCategory: () => categories[x.category],
                getMaker: () => members[x.maker],
                getSimilarMakes: () => x.similarMakes.map(y => makes[y])
            };
            makes[x.id] = i; 
        });
        data.facilities.array.forEach((x:Facility) => {
            var i: LinkedFacility = {
                ...x,
                getCategory: () => categories[x.category]
            };
            facilities[x.id] = i; 
        });

        var result = {
            header: data.header,
            getPastEvents: ()=> pastEvents.array,
            getUpcomingEvents: ()=> upcomingEvents.array,
            getCategories: ()=> categories.array,
            getMembers: ()=> members.array,
            getMakes: ()=> makes.array,
            getFacilities: ()=> facilities.array,
        }

        return result;
    }
}