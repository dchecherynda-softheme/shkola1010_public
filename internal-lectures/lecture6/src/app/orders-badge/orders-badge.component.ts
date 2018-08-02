import {
    Component,
    Input,
    AfterContentInit,
    ElementRef,
    ContentChild
} from '@angular/core';

@Component({
    selector: 'app-orders-badge',
    templateUrl: './orders-badge.component.html'
})
export class OrdersBadgeComponent implements AfterContentInit {
    @ContentChild('content') content: ElementRef;
    @Input() total: number;

    ngAfterContentInit() {
        console.log('AfterContentInit called!', this.content);
    }
}
