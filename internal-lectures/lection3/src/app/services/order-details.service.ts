import { Injectable } from '@angular/core';
import { OrderDetailsModel } from '../models/order-details.model';

@Injectable()
export class OrderDetailsService {
    private orderList: OrderDetailsModel[] = [
        { id: 1, name: 'Product 1', price: 3.5, date: 1532502771716 },
        { id: 2, name: 'Product 2', price: 3.2, date: 1532502371716 },
        { id: 3, name: 'Product 3', price: 6.1, date: 1532502671716 }
    ];

    getOrders(): OrderDetailsModel[] {
        return this.orderList;
    }
}
