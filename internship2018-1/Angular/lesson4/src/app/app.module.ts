import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BookDetailsComponent } from './books-list/book-details/book-details.component';
import { BooksListService } from './books-list/books-list.service';

@NgModule({
	declarations: [
		AppComponent,
		BookDetailsComponent,
		BooksListComponent
	],
	imports: [BrowserModule],
	bootstrap: [AppComponent],
	providers: [BooksListService]
})
export class AppModule { }
