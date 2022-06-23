import React from 'react';
import { FancyButton } from '../FancyButton/FancyButton';
import { MainContext } from '../MainContext';
import { Book, returnFalseIfNotIsBook } from '../types';

type BookComponentProps = {
    book: Book;
};

export const BookComponent = ({book}: BookComponentProps) => {
    const bookIsValid = returnFalseIfNotIsBook(book, 'BookComponent', 'book');
    const inputRef = React.useRef<HTMLInputElement>(null);
    
    const onClick = () => {        
        inputRef.current?.focus();
    }
    
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
        <input ref={inputRef}></input>
        <button onClick={onClick}>Goto comment field</button>
    </>
    }
}