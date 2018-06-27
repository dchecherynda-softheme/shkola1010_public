import { NgModule } from "@angular/core";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "./components/product-list/product-list.component";

@NgModule({
    imports: [
        SharedModule,
        CommonModule
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