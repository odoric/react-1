import React from 'react';
import { MainContext } from '../MainContext';
import { Book } from '../types';

type BookComponentProps = {
    book: Book;
};

export const BookComponent = ({book}: BookComponentProps) => {
    return <>
        <h3>{book.title}</h3>
        <MainContext.Consumer>
            {value => <p>This title was last rented: {value.session.bookLastRented(book.isbn)}</p>}            
        </MainContext.Consumer>
    </>
}