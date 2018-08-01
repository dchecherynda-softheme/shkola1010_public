import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: 'button[appClickOnce]'
})
export class ClickOnceDirective {
  hostElement: ElementRef;

  constructor(_hostElement: ElementRef) {
    this.hostElement = _hostElement;
  }

  @HostListener('click', ['$event'])
  OnElementClick(event) {
    const button = <HTMLButtonElement>this.hostElement.nativeElement;
    button.disabled = true;
    button.innerText = 'Removing...';
  }

}
