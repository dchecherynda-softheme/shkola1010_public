import { Component } from '@angular/core';
import { OrderDetailsModel } from '../models/order-details.model';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html'
})
export class OrdersComponent {
    orders: OrderDetailsModel[];
    status: string;

    private orderList1 = [
        { id: 1, name: 'Product 1', price: 3.5, date: 1532502771716 },
        { id: 2, name: 'Product 2', price: 3.2, date: 1532502371716 },
        { id: 3, name: 'Product 3', price: 6.1, date: 1532502671716 }
    ];

    private orderList2 = [
        { id: 1, name: 'Product 1', price: 3.5, date: 1532502771716 },
        { id: 2, name: 'Product 2', price: 3.2, date: 1532502371716 },
        { id: 3, name: 'Product 3', price: 6.1, date: 1532502671716 }
    ];

    constructor() {
        // set initial value for orders property
        this.orders = this.orderList1;
        this.status = 'now orders are orderList1';

        // initialize refresh function
        const refreshFunc = () => {
            this.orders = this.orderList1;
            this.status = 'now orders are orderList1';
        };

        const refreshFunc2 = () => {
            this.orders = this.orderList2;
            this.status = 'now orders are orderList2';
        };

        // call refreshFunc every 5000ms to get new order list
        setInterval(refreshFunc, 5000);
        setInterval(refreshFunc2, 7000);
    }

    removeOrder(id: number) {
        console.log(`Now you are trying to delete order with id ${id}`);
    }

    trackById(index: number, item: OrderDetailsModel) {
        return item.id;
    }
}
