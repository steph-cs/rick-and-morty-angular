import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICharacterInfo } from '../../interface/interfaces';


@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: ICharacterInfo) {
        console.log(data)
    }

    unsorted() {
        return 0
    }
}
