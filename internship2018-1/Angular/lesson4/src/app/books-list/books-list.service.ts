import { BookModel } from './book-details/book.model';

export class BooksListService {
    books: BookModel[] = [{
        author: 'Stephen Hawkin',
        title: 'The Universe in a Nutshell',
        imageUrl: 'assets/images/1.jpg',
        id: 1,
        isFavorite: false
    }, {
        author: 'Stoyan Stefanov',
        title: 'JavaScript Patterns',
        imageUrl: 'assets/images/2.jpg',
        id: 2,
        isFavorite: false
    }];

    getBooks(): BookModel[] {
        return this.books;
    }
}
