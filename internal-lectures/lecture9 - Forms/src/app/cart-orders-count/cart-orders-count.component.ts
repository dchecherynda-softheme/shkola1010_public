import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { OrdersService } from '../shared/orders.service';

@Component({
    selector: 'app-cart-orders-count',
    templateUrl: './cart-orders-count.component.html',
    styleUrls: ['./cart-orders-count.component.css']
})
export class CartOrdersCountComponent implements OnInit, OnDestroy {
    orderCount: number;
    subscription: Subscription;

    constructor(private orderService: OrdersService) { }

    ngOnInit() {
        this.subscription = this.orderService.orderObservable
            .subscribe((orderCount) => this.orderCount = orderCount);
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
