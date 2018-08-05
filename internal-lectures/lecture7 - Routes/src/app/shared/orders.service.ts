import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { LoggingService } from './logger.service';
import { OrderDetailsModel } from './order-details.model';

const REQUEST_URL = 'http://localhost:3000/orders';

@Injectable()
export class OrdersService {
    private currentOrdersNumber = 0;
    private orderSubject: BehaviorSubject<number> = new BehaviorSubject(0);
    public orderObservable = this.orderSubject.asObservable();

    constructor(private logger: LoggingService, private httpClient: HttpClient) {
        this.get().subscribe((orders) => {
            this.currentOrdersNumber = orders.length;
            this.orderSubject.next(this.currentOrdersNumber);
        });
    }

    get(id?: number): Observable<OrderDetailsModel[]> {
        this.logger.info('Getting orders...');

        const requestUrl = id ? `${REQUEST_URL}/${id}` : REQUEST_URL;

        return <Observable<OrderDetailsModel[]>>(this.httpClient.get(requestUrl));
    }

    delete(id: number): Observable<any> {
        return this.httpClient.delete(`${REQUEST_URL}/${id}`).pipe(
            map((item) => {
                this.currentOrdersNumber = this.currentOrdersNumber - 1;
                this.orderSubject.next(this.currentOrdersNumber);

                return item;
            })
        );
    }
}
