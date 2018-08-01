import { Component, OnInit } from '@angular/core';

import { OrderDetailsModel } from '../order-details/order-details.model';
import { OrdersService } from './orders.service';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit {
    orders: OrderDetailsModel[];

    constructor(private service: OrdersService) { }

    ngOnInit() {
        this.service.get().subscribe(orders => this.orders = orders);
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
