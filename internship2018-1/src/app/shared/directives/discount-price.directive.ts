import { Directive, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { PricePipe } from '../pipe/price.pipe';
import { CurrencyPipe } from '@angular/common';

@Directive({
  selector: '[appDiscountPrice]'
})
export class DiscountPriceDirective implements OnInit {
  @Input() originalPrice: number;

  discount = 0.9;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private pricePipe: PricePipe,
    private currencyPipe: CurrencyPipe) {
  }

  ngOnInit() {
    if (this.discount > 0 && this.discount < 1) {
      let discountPrice: any = (this.originalPrice * this.discount);

      discountPrice = this.currencyPipe.transform(discountPrice);
      discountPrice = this.pricePipe.transform(discountPrice);

      this.renderer.setProperty(this.elementRef.nativeElement, 'innerText', discountPrice);
      this.renderer.addClass(this.elementRef.nativeElement, 'discount-price');
    }
  }
}
