import { Component, Input, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent {
    @Input() product: any;
}