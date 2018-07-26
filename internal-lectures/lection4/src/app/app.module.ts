import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ClickOnceDirective } from './click-once.directive';
import { HryvniaPipe } from './hryvnia.pipe';

import { OrdersComponent } from './orders/orders.component';
import { OrdersService } from './orders/orders.service';
import { OrderDetailsComponent } from './order-details/order-details.component';
// import { ordersServiceFactory } from './orders/orders-service.factory';

import { LoggingService } from './logger.service';
// import { NewLoggingService } from './new-logger.service';

@NgModule({
    declarations: [
        AppComponent,
        OrdersComponent,
        OrderDetailsComponent,
        ClickOnceDirective,
        HryvniaPipe
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [
        LoggingService,
        OrdersService,
        // { provide: OrdersService, useValue: { getOrders: () => [] } },
        // { provide: LoggingService, useClass: NewLoggingService },
        // { provide: OrdersService, useFactory: ordersServiceFactory, deps: [LoggingService] }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
