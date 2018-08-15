import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { OrdersService } from '../../shared/orders.service';
import { OrderDetailsModel } from '../../shared/order-details.model';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html'
})
export class OrderInfoComponent implements OnInit {

  order: OrderDetailsModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private orderService: OrdersService,
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.pipe(switchMap((params: Map<string, any>) => {
      const orderId = params.get('id');

      return this.orderService.get(orderId);
    })).subscribe((order: OrderDetailsModel) => this.order = order);
  }

}
