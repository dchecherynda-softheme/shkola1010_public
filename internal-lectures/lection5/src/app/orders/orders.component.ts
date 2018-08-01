import { Component } from '@angular/core';

import { OrderDetailsModel } from '../order-details/order-details.model';
import { OrdersService } from './orders.service';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html'
})
export class OrdersComponent {
    orders: OrderDetailsModel[];
    orderCount = 0;

    constructor(private service: OrdersService) {
        const next = (orders) => {
            this.orders = orders;
        };

        const error = (err) => {
            console.error(err);
        };


        const complete = () => {
            console.log('Observable is finished');
        };

        this.service.get().subscribe(next, error, complete);

        this.service.orderObservable.subscribe(item => this.orderCount = item);
    }

    removeOrder(id: number) {
        const next = () => {
            const index = this.orders.findIndex(order => order.id === id);
            this.orders.splice(index, 1);
        };

        this.service.delete(id).subscribe(next);
    }

    trackById(index: number, item: OrderDetailsModel) {
        return item.id;
    }
}
