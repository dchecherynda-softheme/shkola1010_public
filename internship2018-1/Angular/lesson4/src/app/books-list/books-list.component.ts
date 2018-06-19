import { Component } from '@angular/core';

import { BookModel } from './book-details/book.model';

@Component({
	selector: 'books-list',
	templateUrl: './books-list.component.html',
	styleUrls: ['./books-list.component.css']
})
export class BooksListComponent {
	books: BookModel[] = [{
		author: 'Stephen Hawkin',
		title: 'The Universe in a Nutshell',
		imageUrl: 'assets/images/1.jpg',
		id: 1,
		isFavorite: false
	}];
}
