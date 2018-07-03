import { Component, Input, OnInit, OnDestroy } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit, OnDestroy {

    products: any[] = [];
    interval: any;
    onlyVegan: boolean = false;

    selectedItem = 3;

    productTypes = [
        { name: 'Rolls', id: 1 },
        { name: 'Soups', id: 2 },
        { name: 'Salads', id: 3 }        
    ]
  
    constructor(private http: HttpClient) {
    }
  
    ngOnInit() {
        const refreshProducts = () => {
            this.http.get('http://localhost:3000/products').subscribe((response: any[]) => {
                this.products = response;
            })
        };

        refreshProducts();

        this.interval = setInterval(refreshProducts, 5000);
    }

    ngOnDestroy() {
        clearInterval(this.interval);
    }
}