import { Component } from '@angular/core';

import { Product, getDefaultModel } from './products.model';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent {
    model: Product = getDefaultModel();
    types = ['bananas', 'oranges', 'apples'];
    countries = ['Ukraine', 'Other countries'];
    hasCategoryError = false;

    submit() {
        console.log(this.model);
    }

    validateCategory(value: string) {
        this.hasCategoryError = value === 'default';
    }
}
