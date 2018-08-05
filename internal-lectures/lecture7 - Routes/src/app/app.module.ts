import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { ClickOnceDirective } from './click-once.directive';
import { HryvniaPipe } from './hryvnia.pipe';

import { OrdersComponent } from './orders/orders.component';
import { OrdersService } from './orders/orders.service';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrdersBadgeComponent } from './orders-badge/orders-badge.component';

import { LoggingService } from './logger.service';
import { RxjsComponent } from './rxjs/rxjs.component';
import { AppRoutingModule } from './/app-routing.module';
import { CartOrdersCountComponent } from './cart-orders-count/cart-orders-count.component';

@NgModule({
    declarations: [
        AppComponent,
        CartOrdersCountComponent,
        ClickOnceDirective,
        HryvniaPipe,
        OrderDetailsComponent,
        OrdersBadgeComponent,
        OrdersComponent,
        RxjsComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
    ],
    providers: [
        LoggingService,
        OrdersService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
