import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-order-details',
    templateUrl: './order-details.component.html'
})
export class OrderDetailsComponent {
    @Input() orderName: string;
    @Output() remove = new EventEmitter<string>();

    createEvent() {
        this.remove.emit(this.orderName);
    }
}
