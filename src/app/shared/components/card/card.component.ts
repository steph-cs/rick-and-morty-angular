import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { ICharacterInfo, IEpisodeInfo, ILocationInfo } from '../../interface/interfaces';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent {
    @Input() content: ICharacterInfo | ILocationInfo | IEpisodeInfo | undefined;
    @Input() typeCard: string = "";
    @Input() id: string = ""
    @Input() img: string = ""
    @Input() name: string = ""
    @Input() status: string = ""

    constructor(public dialog: MatDialog) { }

    openDialog() {
        this.dialog.open(ModalComponent, {
            data: {
                image: this.img,
                content: this.content
            }
        });
    }
}
