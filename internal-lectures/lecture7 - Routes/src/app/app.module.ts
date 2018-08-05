import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { RxjsComponent } from './rxjs/rxjs.component';
import { AppRoutingModule } from './app-routing.module';
import { CartOrdersCountComponent } from './cart-orders-count/cart-orders-count.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OrderModule } from './order/order.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent,
        CartOrdersCountComponent,
        RxjsComponent,
        ProductsComponent,
        PageNotFoundComponent,
    ],
    imports: [
        OrderModule,
        AppRoutingModule,
        SharedModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
