import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ClickOnceDirective } from './click-once.directive';

@NgModule({
    declarations: [
        AppComponent,
        OrdersComponent,
        OrderDetailsComponent,
        ClickOnceDirective
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
