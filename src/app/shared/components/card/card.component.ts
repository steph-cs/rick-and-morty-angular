import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
    @Input() typeCard: string = "";
    @Input() img: string = ""
    @Input() name: string = ""
    @Input() status: string = ""
}
