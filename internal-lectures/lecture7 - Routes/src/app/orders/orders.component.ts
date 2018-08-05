import {
    Component,
    OnInit,
    ViewChild,
    AfterViewInit
} from '@angular/core';
import { switchMap } from 'rxjs/operators';

import { OrderDetailsModel } from '../order-details/order-details.model';
import { OrdersService } from './orders.service';
import { OrdersBadgeComponent } from '../orders-badge/orders-badge.component';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit, AfterViewInit {
    @ViewChild(OrdersBadgeComponent) badge: OrdersBadgeComponent;
    orders: OrderDetailsModel[] = [];

    constructor(private service: OrdersService) { }

    ngOnInit() {
        this.service.getOrders()
            .subscribe(orders => this.orders = orders);
    }

    ngAfterViewInit() {
        console.log('Parent: AfterViewInit called!', this.badge);
    }

    removeOrder(id: number) {
        this.service.delete(id)
            .pipe(switchMap(() => this.service.getOrders()))
            .subscribe(
                response => this.orders = response,
                error => console.log(error)
            );
    }

    trackById(index: number, item: OrderDetailsModel) {
        return item.id;
    }
}
