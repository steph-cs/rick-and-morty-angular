import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-section',
  templateUrl: './text-section.component.html',
  styleUrls: ['./text-section.component.css']
})
export class TextSectionComponent {

    @Input() title: string = "";
    @Input() content: string = ""

}
