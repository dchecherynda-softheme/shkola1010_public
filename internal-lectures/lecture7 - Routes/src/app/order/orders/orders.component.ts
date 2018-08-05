import {
    Component,
    OnInit,
    ViewChild,
    AfterViewInit
} from '@angular/core';
import { switchMap } from 'rxjs/operators';

import { OrderDetailsModel } from '../../shared/order-details.model';
import { OrdersBadgeComponent } from '../orders-badge/orders-badge.component';
import { OrdersService } from '../../shared/orders.service';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit, AfterViewInit {
    @ViewChild(OrdersBadgeComponent) badge: OrdersBadgeComponent;
    orders: OrderDetailsModel[] = [];

    constructor(private service: OrdersService) { }

    ngOnInit() {
        this.service.get()
            .subscribe(orders => this.orders = orders);
    }

    ngAfterViewInit() {
        console.log('Parent: AfterViewInit called!', this.badge);
    }

    removeOrder(id: number) {
        this.service.delete(id)
            .pipe(switchMap(() => this.service.get()))
            .subscribe(
                response => this.orders = response,
                error => console.log(error)
            );
    }

    trackById(index: number, item: OrderDetailsModel) {
        return item.id;
    }
}
