import React from 'react';
import { BookComponent } from '../Book/BookComponent';
import { Books } from "../types";

type BookListProps = {
    booksToShow: Books;
}

export const BookListComponent = ({booksToShow}: BookListProps) => {
    return <>
        <ul>
            {booksToShow.map(b => <li><BookComponent key={b.isbn} book={b}/></li>)}    
        </ul>    
    </>
}