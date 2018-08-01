import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders/orders.service';

@Component({
  selector: 'app-top-order',
  templateUrl: './top-order.component.html',
  styleUrls: ['./top-order.component.css']
})
export class TopOrderComponent implements OnInit {
  orderCount: number;

  constructor(private orderService: OrdersService) {
    this.orderService.orderObservable.subscribe((orderCount) => {
      this.orderCount = orderCount;
    });
  }

  ngOnInit() {
  }

}
