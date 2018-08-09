import { OrdersService } from './orders.service';
import { defer } from 'rxjs';
import { OrderDetailsModel } from './order-details.model';

describe('OrderService', () => {
    let service: OrdersService;
    let httpClientSpy: { get: jasmine.Spy, delete: jasmine.Spy };
    let loggerSpy: { info: jasmine.Spy, error: jasmine.Spy };
    const data: OrderDetailsModel[] = [
        { id: 3, date: 234324, name: 'Order 2', price: 3.26 },
        { id: 2, date: 238324, name: 'Order 3', price: 2.86 },
        { id: 4, date: 238324, name: 'Order 4', price: 1.83 },
        { id: 5, date: 238324, name: 'Order 5', price: 7.86 },
    ];

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'delete']);
        loggerSpy = jasmine.createSpyObj('LoggingService', ['info', 'error']);

        httpClientSpy.get.and.returnValue(defer(() => Promise.resolve(data)));

        service = new OrdersService(<any>loggerSpy, <any>httpClientSpy);
    });

    it('Should call http get inside of get method', () => {
        service.get().subscribe(() => {
            expect(loggerSpy.info).toHaveBeenCalled();
            expect(loggerSpy.error).not.toHaveBeenCalled();
            expect(httpClientSpy.get).toHaveBeenCalled();
        });
    });

    it('Should decrease order count after delete', () => {
        httpClientSpy.delete.and.returnValue(defer(() => Promise.resolve('')));

        service.delete(3).subscribe(() => {
            expect(service['currentOrdersNumber']).toEqual(3);
            service.orderObservable.subscribe(order => expect(order).toEqual(3));
        });
    });
});
