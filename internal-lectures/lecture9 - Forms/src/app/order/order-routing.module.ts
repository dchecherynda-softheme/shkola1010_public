import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { OrderInfoComponent } from './order-info/order-info.component';

const routes: Routes = [
  { path: '', component: OrdersComponent },
  { path: ':id', component: OrderInfoComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class OrderRoutingModule {
}
