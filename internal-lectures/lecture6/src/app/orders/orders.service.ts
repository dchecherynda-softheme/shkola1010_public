import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { OrderDetailsModel } from '../order-details/order-details.model';
import { LoggingService } from '../logger.service';

@Injectable()
export class OrdersService {
    constructor(private logger: LoggingService, private httpClient: HttpClient) { }

    get(): Observable<OrderDetailsModel[]> {
        this.logger.info('Getting orders...');

        return <Observable<OrderDetailsModel[]>>(this.httpClient.get('http://localhost:3000/orders'));
    }

    delete(id: number): Observable<any> {
        return this.httpClient.delete('http://localhost:3000/orders/' + id);
    }
}
