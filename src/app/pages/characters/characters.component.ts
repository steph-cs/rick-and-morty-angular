import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/shared/interface/interfaces';
import { CharacterService } from 'src/app/shared/services/character.service';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

    public characters: ICharacter[] = [];

    constructor(
        private characterService: CharacterService
    ) { }

    ngOnInit() {
        this.getCharacters()
    }

    async getCharacters(): Promise<void> {
        this.characterService.getCharacters()
            .subscribe(response => {
                this.characters = Object.values(response.results)
            });
    }
}
