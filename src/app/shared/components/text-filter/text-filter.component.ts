import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-text-filter',
    templateUrl: './text-filter.component.html',
    styleUrls: ['./text-filter.component.css']
})
export class TextFilterComponent {

    @Input() label: string = ""
    @Input() placeholder: string = ""
    value: string = '';

    @Output() inputFilter: EventEmitter<string> = new EventEmitter();

    newInputValue(value: string) {
        this.inputFilter.emit(value);
    }
}