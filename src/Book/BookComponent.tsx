import React from 'react';
import { Book } from '../types';

type BookComponentProps = {
    book: Book;
};

export const BookComponent = ({book}: BookComponentProps) => {
    return <>
        <h3>{book.title}</h3>
    </>
}