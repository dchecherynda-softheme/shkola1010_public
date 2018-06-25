import { Route, Routes } from '@angular/router';

import { BooksListComponent } from './books-list/books-list.component';
import { BookDetailsComponent } from './books-list/book-details/book-details.component';

const indexRoute: Route = {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
};

const fallbackRoute: Route = {
    path: '**',
    redirectTo: '/books',
    pathMatch: 'full'
};

export const AppRoutes: Routes = [
    {
        path: 'books',
        component: BooksListComponent
    },
    {
        path: 'books/:id',
        component: BookDetailsComponent
    },
    indexRoute,
    fallbackRoute
];
