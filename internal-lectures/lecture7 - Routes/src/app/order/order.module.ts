import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrdersBadgeComponent } from './orders-badge/orders-badge.component';
import { OrderRoutingModule } from './order-routing.module';
import { SharedModule } from '../shared/shared.module';
import { OrderInfoComponent } from './order-info/order-info.component';

@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule
  ],
  declarations: [
    OrdersComponent,
    OrderDetailsComponent,
    OrdersBadgeComponent,
    OrderInfoComponent,
  ]
})
export class OrderModule { }
