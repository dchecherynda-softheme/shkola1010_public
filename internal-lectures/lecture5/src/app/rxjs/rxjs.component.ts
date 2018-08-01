import { Component } from '@angular/core';
import { Observable, fromEvent, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html'
})
export class RxjsComponent {
  log: HTMLDivElement;
  btn: HTMLButtonElement;

  constructor() {
    setTimeout(() => {
      this.log = <HTMLDivElement>document.getElementById('log');
      this.btn = <HTMLButtonElement>document.getElementById('btn');

      // Array
      const array = [
        1, 2, 3
      ];

      array.forEach(item => this.append(item));

      // Observable
      const observable: Observable<any> = fromEvent(this.btn, 'click');
      // observable.forEach(item => this.append(item));

      const subscriber1: Subscription = observable.subscribe((item => this.append('I\'m subscriber1')));
      const subscriber2: Subscription = observable.subscribe((item => this.append('I\'m subscriber2')));

      setTimeout(() => subscriber2.unsubscribe(), 5000);


    }, 500);
  }

  append(message: any) {
    this.log.innerHTML += message + '<br />';
  }

}
