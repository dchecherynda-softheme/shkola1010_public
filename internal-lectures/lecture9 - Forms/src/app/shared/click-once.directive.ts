import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: 'button[appClickOnce]'
})
export class ClickOnceDirective {
    hostElement: ElementRef;

    constructor(_hostElement: ElementRef) {
        this.hostElement = _hostElement;
    }

    @HostListener('click', ['$event'])
    OnElementClick() {
        const button = <HTMLButtonElement>this.hostElement.nativeElement;
        button.disabled = true;
        button.innerText = 'Removing...';
    }
}
