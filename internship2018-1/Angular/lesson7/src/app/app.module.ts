import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BookDetailsComponent } from './books-list/book-details/book-details.component';
import { BooksListService } from './books-list/books-list.service';
import { AppRoutes } from './app.routes';

@NgModule({
	declarations: [
		AppComponent,
		BookDetailsComponent,
		BooksListComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		RouterModule.forRoot(AppRoutes)
	],
	bootstrap: [AppComponent],
	providers: [BooksListService]
})
export class AppModule { }
