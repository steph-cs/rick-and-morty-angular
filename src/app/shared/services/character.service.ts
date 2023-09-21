import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICharacters } from '../interface/interfaces';

@Injectable({
    providedIn: 'root'
})
export class CharacterService {

    baseUrl: string = 'https://rickandmortyapi.com/api/character'
    constructor(private http: HttpClient) { }

    getCharacters(): Observable<ICharacters> {
        let requestURL = this.baseUrl;
        let request: Observable<ICharacters> = this.http.get<ICharacters>(requestURL);
        return request
    }

}
