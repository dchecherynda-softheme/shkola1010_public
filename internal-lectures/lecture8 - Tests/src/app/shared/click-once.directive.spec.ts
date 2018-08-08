import { TestBed } from '@angular/core/testing';
import { ClickOnceDirective } from './click-once.directive';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
    template: '<button appClickOnce>Click me</button>'
})
class TestComponent {
}

describe('ClickOnceDirective', () => {
    let des: DebugElement;

    beforeEach(() => {
        const fixture = TestBed.configureTestingModule({
            declarations: [ClickOnceDirective, TestComponent]
        }).createComponent(TestComponent);

        fixture.detectChanges();

        des = fixture.debugElement.query(By.directive(ClickOnceDirective));
    });

    it('Should disabled after the first click', () => {
        const button = <HTMLButtonElement>des.nativeElement;

        expect(button.disabled).toBeFalsy();
        button.click();

        expect(button.disabled).toBeTruthy();
    });
});
