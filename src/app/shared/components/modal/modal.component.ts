import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IModalInfo } from '../../interface/interfaces';


@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent {
    content = {}
    constructor(@Inject(MAT_DIALOG_DATA) public data: IModalInfo) {
        this.content = data.content
    }

    unsorted() {
        return 0
    }

    typeOf(value: any) {
        return typeof value;
      }
}
