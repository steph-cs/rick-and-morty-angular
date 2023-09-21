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

    getCharacters(): Observable<ICharacters> {
        let requestURL = this.baseUrl;
        let request: Observable<ICharacters> = this.http.get<ICharacters>(requestURL);
        return request
    }

    filterCharacter(): Observable<ICharacters> {
        let filterUrl: string = "/?";
        this.filters.forEach(f => {
            filterUrl = filterUrl.concat(f.type + '=' + f.value)
            if (f != this.filters[this.filters.length - 1]) {
                filterUrl = filterUrl.concat('&')
            }
        });
        let requestURL = this.baseUrl + filterUrl;
        let request: Observable<ICharacters> = this.http.get<ICharacters>(requestURL);
        return request
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
