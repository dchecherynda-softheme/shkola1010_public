import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BookModel } from './book-details/book.model';

const requestUrl = 'http://localhost:3000';

@Injectable()
export class BooksListService {
    constructor(private http: HttpClient) { }

    getBooks(): Observable<BookModel[]> {
        return this.http.get<BookModel[]>(`${requestUrl}/books`);
    }

    markAsFavorite(id: string): Observable<void> {
        return this.http.patch<void>(`${requestUrl}/books/${id}`, { isFavorite: true });
    }
}
