import React from 'react';
import { BookListComponent } from '../BookList/BookListComponent';
import { patrickSession, MainContext, tabithaSession } from '../MainContext';
import { ModalRenderer, PurpleModal } from '../ModalDialog/Modal';
import { allBooks } from './books';

export const LibraryComponent = () => {
    return <>
        <div id="banner-element"/>
        <div style={{ position: 'relative', left: 200 }}>
            <h1>Library</h1>
            <ModalRenderer />
            <PurpleModal />
            <MainContext.Provider value={patrickSession}>
                <BookListComponent booksToShow={allBooks} />
            </MainContext.Provider>
            <MainContext.Provider value={tabithaSession}>
                <BookListComponent booksToShow={allBooks} />
            </MainContext.Provider>
        </div>
    </>
}