import React from 'react';
import { BookListComponent } from '../BookList/BookListComponent';
import { allBooks } from './books';

export const LibraryComponent = () => {
    return <>
        <h1>Library</h1>
        <BookListComponent booksToShow={allBooks}/>
    </>
}