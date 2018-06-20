import { Component } from '@angular/core';

import { BookModel } from './book-details/book.model';
import { BooksListService } from './books-list.service';

@Component({
	selector: 'books-list',
	templateUrl: './books-list.component.html',
	styleUrls: ['./books-list.component.css']
})
export class BooksListComponent {
	books: BookModel[];

	constructor(private service: BooksListService) {
		this.books = this.service.getBooks();
	}
}
