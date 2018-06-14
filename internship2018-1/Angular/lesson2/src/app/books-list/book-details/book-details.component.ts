import { Component, Input, EventEmitter, Output } from '@angular/core';

import { BookModel } from './book.model';

@Component({
    selector: 'book-details',
    templateUrl: './book-details.component.html',
    styleUrls: ['./book-details.component.html']
})
export class BookDetailsComponent {
    @Input()
    book: BookModel;

    @Output()
    favoriteClicked = new EventEmitter<string>();

    imageWidth = 159;
    showImage = true;

    toggleImage() {
        this.showImage = !this.showImage;
    }

    buttonClick() {
        this.favoriteClicked.emit(`${this.book.bookTitle} was added to favorites`);
    }
}
