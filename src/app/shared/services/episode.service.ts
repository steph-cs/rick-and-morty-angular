import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEpisodes, IFilter } from '../interface/interfaces';
import { UtilService } from './util.service';

@Injectable({
    providedIn: 'root'
})
export class EpisodeService {
    baseUrl: string = 'https://rickandmortyapi.com/api/episode'
    public filters: IFilter[] = [];

    constructor(private http: HttpClient) { }

    getEpisodes(page?: number): Observable<IEpisodes> {
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
        let request: Observable<IEpisodes> = this.http.get<IEpisodes>(requestURL);
        return request
    }

    setFilter(filter: IFilter): void {
        this.filters = UtilService.setFilter(filter, this.filters)
    }
}
