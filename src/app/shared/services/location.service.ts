import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFilter } from '../interface/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
    baseUrl: string = 'https://rickandmortyapi.com/api/location'
    public filters: IFilter[] = [];

    constructor(private http: HttpClient) { }

    getLocations(): Observable<any> {
        let requestURL = this.baseUrl;
        let request: Observable<any> = this.http.get<any>(requestURL);
        return request
    }

}
