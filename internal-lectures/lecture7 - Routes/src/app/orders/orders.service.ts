import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { OrderDetailsModel } from '../order-details/order-details.model';

const REQUEST_URL = 'http://localhost:3000/orders';

@Injectable()
export class OrdersService {
    constructor(private httpClient: HttpClient) { }

    getOrders(): Observable<OrderDetailsModel[]> {
        return <Observable<OrderDetailsModel[]>>(this.httpClient.get(REQUEST_URL));
    }

    delete(id: number): Observable<any> {
        return this.httpClient.delete(`${REQUEST_URL}/${id}`);
    }
}
