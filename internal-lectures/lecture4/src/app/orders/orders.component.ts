import { Component } from '@angular/core';

import { OrderDetailsModel } from '../order-details/order-details.model';
import { OrdersService } from './orders.service';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html'
})
export class OrdersComponent {
    orders: OrderDetailsModel[];

    constructor(private service: OrdersService) {
        this.orders = this.service.getOrders();
    }

    removeOrder(id: number) {
        console.log(`Now you are trying to delete order with id ${id}`);
    }

    trackById(index: number, item: OrderDetailsModel) {
        return item.id;
    }
}
