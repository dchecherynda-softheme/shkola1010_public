import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { DiscountPriceDirective } from './directives/discount-price.directive';
import { PricePipe } from './pipe/price.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DiscountPriceDirective,
    PricePipe
  ],
  exports: [
    DiscountPriceDirective,
    PricePipe
  ],
  providers: [
    PricePipe,
    CurrencyPipe
  ]
})
export class SharedModule { }
