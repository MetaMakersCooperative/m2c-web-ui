import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HomeData } from './api.home.model';
import { Observable, of } from 'rxjs';
import { fallbackHomeData } from 'src/app/data/home/data';


@Injectable({
    providedIn: 'root'
})
export class HomeService {

    constructor(http: HttpClient){

    }

    getData() : Observable<HomeData> {
        //todo: impelement api client
        return of(fallbackHomeData);
    }

}