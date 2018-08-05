import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders/orders.service';

@Component({
  selector: 'app-cart-orders-count',
  templateUrl: './cart-orders-count.component.html',
  styleUrls: ['./cart-orders-count.component.css']
})
export class CartOrdersCountComponent implements OnInit {
  orderCount: number;

  constructor(private orderService: OrdersService) {
    this.orderService.orderObservable.subscribe((orderCount) => {
      this.orderCount = orderCount;
    });
  }

  ngOnInit() {
  }

}
