import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';


import { OrderDetailsModel } from '../order-details/order-details.model';
import { LoggingService } from '../logger.service';

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

    get(): Observable<OrderDetailsModel[]> {
        this.logger.info('Getting orders...');

        return <Observable<OrderDetailsModel[]>>(this.httpClient.get('http://localhost:3000/orders'));
    }

    delete(id: number): Observable<any> {
        return this.httpClient.delete('http://localhost:3000/orders/' + id).pipe(
            map((item) => {
                this.currentOrdersNumber = this.currentOrdersNumber - 1;
                this.orderSubject.next(this.currentOrdersNumber);

                return item;
            })
        );
    }
}
