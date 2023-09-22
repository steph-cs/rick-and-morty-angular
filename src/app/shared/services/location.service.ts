import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFilter, ILocations } from '../interface/interfaces';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
    baseUrl: string = 'https://rickandmortyapi.com/api/location'
    public filters: IFilter[] = [];

    constructor(private http: HttpClient) { }

    getLocations(page?: number): Observable<any> {
        let requestURL = this.baseUrl;
        if (page) {
            page++
            if (page && this.filters.length > 0) {
                requestURL = requestURL.concat('/?page=' + page + '&')
                requestURL = requestURL.concat(UtilService.buildFilter(this.filters))
            } else {
                requestURL = requestURL.concat('?page=' + page)
            }
        }
        else if (this.filters.length > 0) {
            requestURL = requestURL.concat('/?' + UtilService.buildFilter(this.filters))
        }
        let request: Observable<ILocations> = this.http.get<ILocations>(requestURL);
        return request
    }

    setFilter(filter: IFilter): void{
        this.filters = UtilService.setFilter(filter, this.filters)
    }

}
