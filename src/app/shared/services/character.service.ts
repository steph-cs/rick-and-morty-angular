import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICharacters, IFilter } from '../interface/interfaces';

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
                requestURL = requestURL.concat(this.buildFilterCharacter())
            } else {
                requestURL = requestURL.concat('?page=' + page)
            }
        }
        else if (this.filters.length > 0) {
            requestURL = requestURL.concat('/?' + this.buildFilterCharacter())
        }
        let request: Observable<ICharacters> = this.http.get<ICharacters>(requestURL);
        return request
    }

    buildFilterCharacter(): string {
        let filterUrl: string = ''
        this.filters.forEach(f => {
            filterUrl = filterUrl.concat(f.type + '=' + f.value)
            if (f != this.filters[this.filters.length - 1]) {
                filterUrl = filterUrl.concat('&')
            }
        });
        return filterUrl
    }

    setFilter(filter: IFilter): void {
        if ((Array.isArray(filter.value) && !(filter.value as string[]).length) || filter.value === '') {
            this.removeFilter(filter);
        } else {
            this.addFilter(filter);
        }
    }

    removeFilter(filter: IFilter): void {
        this.filters = this.filters.filter(e => e.type !== filter.type);
    }

    addFilter(filter: IFilter): void {
        const index = this.filters.findIndex(e => {
            return e.type === filter.type;
        });
        if (index === -1) {
            this.filters.push(filter);
        } else {
            this.filters[index] = filter;
        }
    }

}
