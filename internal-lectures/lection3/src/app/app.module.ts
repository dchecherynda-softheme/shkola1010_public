import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderDetailsService } from './services/order-details.service';

@NgModule({
    declarations: [
        AppComponent,
        OrdersComponent,
        OrderDetailsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [
        OrderDetailsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
