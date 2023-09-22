import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFilter } from '../interface/interfaces';

@Injectable({
    providedIn: 'root'
})
export class EpisodeService {
    baseUrl: string = 'https://rickandmortyapi.com/api/episode'
    public filters: IFilter[] = [];

    constructor(private http: HttpClient) { }

    getEpisodes(): Observable<any> {
        let requestURL = this.baseUrl;
        let request: Observable<any> = this.http.get<any>(requestURL);
        return request
    }
}
