import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hryvnia'
})
export class HryvniaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return `${value} ₴`;
  }

}
