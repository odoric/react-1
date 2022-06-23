import React from 'react';
import { MainContext } from '../MainContext';
import { Book, returnFalseIfNotIsBook } from '../types';

type BookComponentProps = {
    book: Book;
};

export const BookComponent = ({book}: BookComponentProps) => {
    const bookIsValid = returnFalseIfNotIsBook(book, 'BookComponent', 'book');
    if(bookIsValid) {
        return <>
            <p>{book.title}</p>
            <MainContext.Consumer>
                {value => <p>This title was last rented: {value.session.bookLastRented(book.isbn)}</p>}            
            </MainContext.Consumer>
        </>
    }
    else {
        return <>
        <p>&lt;Invalid Book&gt;</p>
    </>
    }
}