import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-checkbox-filter',
    templateUrl: './checkbox-filter.component.html',
    styleUrls: ['./checkbox-filter.component.css']
})
export class CheckboxFilterComponent {

    @Input() label: string = ""
    @Input() filters: string[] = []
    selectedFilter: string = "all";

    @Output() inputCheckbox: EventEmitter<any> = new EventEmitter<any>();

    public checkValue(event: any): void {
        this.inputCheckbox.emit(this.selectedFilter);
    }

}
