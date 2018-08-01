import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OrderDetailsModel } from '../models/order-details.model';

@Component({
    selector: 'app-order-details',
    templateUrl: './order-details.component.html'
})
export class OrderDetailsComponent {
    @Input() order: OrderDetailsModel;
    @Output() remove = new EventEmitter<number>();

    onRemove() {
        this.remove.emit(this.order.id);
    }
}
