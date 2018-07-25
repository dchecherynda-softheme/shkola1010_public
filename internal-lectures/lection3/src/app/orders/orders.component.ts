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
        // set initial value for orders property
        this.orders = orderDetailsService.getOrders();

        // initialize refresh function
        const refreshFunc = () => {
            this.orders = orderDetailsService.getOrders();
        };

        // call refreshFunc every 5000ms to get new order list
        setInterval(refreshFunc, 5000);
    }

    removeOrder(id: number) {
        console.log(`Now you are trying to delete order with id ${id}`);
    }

}
