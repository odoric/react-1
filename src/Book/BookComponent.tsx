import React from 'react';
import { FancyButton } from '../FancyButton/FancyButton';
import { MainContext } from '../MainContext';
import { Book, raiseTypeErrorIfNotIsBook } from '../types';

type BookComponentProps = {
    book: Book;
};

export const BookComponent = ({book}: BookComponentProps) => {
    raiseTypeErrorIfNotIsBook(book, 'BookComponent', 'book'); // Will throw an error, allowing us to check error boundary
    const inputRef = React.useRef<HTMLInputElement>(null);
    

    
    return <>
        <p>{book.title}</p>
        <MainContext.Consumer>
            {value => <p>This title was last rented: {value.session.bookLastRented(book.isbn)}</p>}            
        </MainContext.Consumer>
    </>
/*         return <>
        <p>&lt;Invalid Book&gt;</p>
        <input ref={inputRef}></input>
        <button onClick={onClick}>Goto comment field</button> 
    </> */
}