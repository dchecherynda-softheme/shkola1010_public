import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
    name: 'hryvnia'
})
export class HryvniaPipe implements PipeTransform {
    transform(value: any): any {
        if (value) {
            const number = new DecimalPipe('en-US');
            value = number.transform(value, '1.2-2');

            return `${value} ₴`;
        } else {
            return 'out of stock';
        }
    }
}
