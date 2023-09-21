import { Component, OnInit } from '@angular/core';
import { ICharacter, ICharacterFilters, IFilter } from 'src/app/shared/interface/interfaces';
import { FilterCharactersType } from 'src/app/shared/interface/types';
import { CharacterService } from 'src/app/shared/services/character.service';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

    public characters: ICharacter[] = [];
    public error: string = "";
    public filtersType: ICharacterFilters[] = [
        {
            type: 'name',
            filter: 'text',
            options: []
        },
        {
            type: 'status',
            filter: 'checkbox',
            options: ['all', 'alive', 'dead', 'unknown']
        },
        {
            type: 'gender',
            filter: 'checkbox',
            options: ['all', 'female', 'male', 'unknown']
        }
    ]

    constructor(
        private characterService: CharacterService
    ) { }

    ngOnInit() {
        this.getCharacters()
    }

    async getCharacters(): Promise<void> {
        this.characterService.getCharacters()
            .subscribe(
                {
                    next: (response) => {
                        this.characters = Object.values(response.results)
                        this.error = ''
                    },
                    error: (error) => {
                        this.error = error.status
                    }
                }
            );
    }

    async filterCharacters(): Promise<void> {
        this.characterService.filterCharacter()
            .subscribe(
                {
                    next: (response) => {
                        this.characters = Object.values(response.results)
                        this.error = ''
                    },
                    error: (error) => {
                        this.error = error.status
                    }
                }
            );
    }

    addFilter(type: string, value: any) {
        let filter: IFilter = {
            type: type,
            value: value != 'all' ? value : ''
        }
        this.characterService.setFilter(filter)
        this.filterCharacters()
    }

}
