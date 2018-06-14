import { Component } from '@angular/core';

import { BookModel } from './book-details/book.model';

@Component({
	selector: 'books-list',
	templateUrl: './books-list.component.html'
})
export class BooksListComponent {
	favoriteMessage: string;
	books: BookModel[] = [{
		bookAuthor: 'Stephen Hawkin',
		bookTitle: 'The Universe in a Nutshell',
		bookImageUrl: 'assets/images/2095.jpg'
	}];

	addToFavorites(message: string) {
		this.favoriteMessage = message;
	}
}
