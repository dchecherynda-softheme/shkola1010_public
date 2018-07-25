import { Component } from '@angular/core';
import { OrderDetailsModel } from '../models/order-details.model';
import { OrderDetailsService } from '../services/order-details.service';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html'
})
export class OrdersComponent {
    orders: OrderDetailsModel[];

    constructor(orderDetailsService: OrderDetailsService) {
        this.orders = orderDetailsService.getOrders();
    }

    removeOrder(id: number) {
        console.log(`Now you are trying to delete order with id ${id}`);
    }

}
