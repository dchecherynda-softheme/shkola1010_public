import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges,
    OnInit,
    OnDestroy,
    DoCheck
} from '@angular/core';

import { OrderDetailsModel } from './order-details.model';

@Component({
    selector: 'app-order-details',
    templateUrl: './order-details.component.html'
})
export class OrderDetailsComponent implements OnChanges, OnInit, OnDestroy, DoCheck {
    @Input() order: OrderDetailsModel;
    @Output() remove = new EventEmitter<number>();

    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
        console.log('Child: OnChanges called!');
    }

    ngOnInit() {
        console.log('Child: OnInit called!');
    }

    ngDoCheck() {
        console.log('Child: DoCheck called!');
    }

    onRemove() {
        this.remove.emit(this.order.id);
    }

    ngOnDestroy() {
        console.log('Child: OnDestroy called!');
    }
}
