import React from 'react';
import { BookComponentwithBackgroundColor } from '../Book/BookComponent';
import { SimpleErrorBoundary } from '../ErrorBoundary/SimpleErrorBoundary';
import { MainContext } from '../MainContext';
import { Books } from "../types";


type BookListProps = {
    booksToShow: Books;
}

export const BookListComponent = ({ booksToShow }: BookListProps) => {
    return <>
        <MainContext.Consumer>
            {value => <p>Session for : {value.session.currentUser}</p>}
        </MainContext.Consumer>
        <ul>
            {booksToShow.map(b =>
                <SimpleErrorBoundary>
                    <li>
                        <BookComponentwithBackgroundColor key={b.isbn} book={b} />
                    </li>
                </SimpleErrorBoundary>
            )}
        </ul>
    </>
}