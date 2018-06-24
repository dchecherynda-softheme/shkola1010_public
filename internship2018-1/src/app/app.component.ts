import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  products = [{
    id: 1, src: './assets/products/1.jpeg', name: 'Sushi 1', price: 6, isVegan: true }, {
    id: 2, src: './assets/products/2.jpeg', name: 'Sushi 2', price: 5.40, isVegan: true }, {
    id: 3, src: './assets/products/3.jpeg', name: 'Sushi 3', price: 4.70, isVegan: true }, {
    id: 4, src: './assets/products/4.jpeg', name: 'Sushi 4', price: 3.90, isVegan: false }
  ];

  constructor() {
    if (this.title == null) {
      this.title = 'tit';
    }
  }
}
