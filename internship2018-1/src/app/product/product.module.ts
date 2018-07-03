import { NgModule } from "@angular/core";
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';

import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        MatRadioModule,
        MatIconModule,
        FormsModule
    ],
    declarations: [
        ProductDetailsComponent,
        ProductListComponent
    ],
    exports: [
        ProductListComponent
    ]
})
export class ProductModule {
}