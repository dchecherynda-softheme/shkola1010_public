import { Component } from '@angular/core';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html'
})
export class OrdersComponent {
    orderName: string;
    orderNames: string[] = [];
    isDisabled: boolean;

    addOdrer() {
        if (this.orderName) {
            this.orderNames.push(this.orderName);
            console.log('New order has been added!', this.orderName);
        }
    }

    removeOrder(name: string) {
        this.orderNames = this.orderNames.filter(i => i !== name);
    }
}
