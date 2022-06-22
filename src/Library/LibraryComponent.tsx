import React from 'react';
import { BookListComponent } from '../BookList/BookListComponent';
import { patrickSession, MainContext, tabithaSession } from '../MainContext';
import { allBooks } from './books';

export const LibraryComponent = () => {
    return <>    
        <h1>Library</h1>
        <MainContext.Provider value={patrickSession}>
            <BookListComponent booksToShow={allBooks}/>
        </MainContext.Provider>        
        <MainContext.Provider value={tabithaSession}>
            <BookListComponent booksToShow={allBooks}/>
        </MainContext.Provider>        
    </>
}