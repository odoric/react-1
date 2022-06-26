import React from 'react';
import { FancyButton } from '../FancyButton/FancyButton';
import { MainContext } from '../MainContext';
import { Book, raiseTypeErrorIfNotIsBook } from '../types';
import { withBackgroundColor } from '../hoc/withBackgroundcolor';

type BookComponentProps = {
    book: Book;
};

export const BookComponent = ({book}: BookComponentProps) => {
    raiseTypeErrorIfNotIsBook(book, 'BookComponent', 'book'); // Will throw an error, allowing us to check error boundary
    return <>
        <p>{book.title}</p>
        <MainContext.Consumer>
            {value => <p>This title was last rented: {value.session.bookLastRented(book.isbn)}</p>}            
        </MainContext.Consumer>
    </>
}

export const BookComponentwithBackgroundColor = withBackgroundColor(BookComponent, 'midnightBlue');