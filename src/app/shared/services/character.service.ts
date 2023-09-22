import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICharacters, IFilter } from '../interface/interfaces';
import { UtilService } from './util.service';

@Injectable({
    providedIn: 'root'
})
export class CharacterService {

    baseUrl: string = 'https://rickandmortyapi.com/api/character'
    public filters: IFilter[] = [];

    constructor(private http: HttpClient) { }

    getCharacters(page?: number): Observable<ICharacters> {
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
        let request: Observable<ICharacters> = this.http.get<ICharacters>(requestURL);
        return request
    }

    setFilter(filter: IFilter): void{
        this.filters = UtilService.setFilter(filter, this.filters)
    }
}
