import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { BookModel } from './book.model';
import { BooksListService } from '../books-list.service';

@Component({
    selector: 'book-details',
    templateUrl: './book-details.component.html',
    styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit, OnDestroy {
    book: BookModel;
    id: string;

    private subscription: Subscription;

    constructor(private route: ActivatedRoute, private booksService: BooksListService) { }

    ngOnInit() {
        this.subscription = this.route.params.pipe(
            switchMap(params => {
                this.id = params['id'];
                return this.booksService.getBook(this.id);
            }))
            .subscribe(res => this.book = res);
    }

    markAsFavorite() {
        this.booksService.markAsFavorite(this.book.id)
            .pipe(switchMap(() => this.booksService.getBook(this.book.id)))
            .subscribe(
                response => this.book = response,
                error => console.log(error)
            );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
