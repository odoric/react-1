const checkComponentProperty = (raiseError: boolean, it: any, component: string, property: string, expectedType: string, checker: (it:any) => boolean) => {
    if(!isBook(it)) {
        if(raiseError) {
            throw new TypeError(`Property "${property}" of component "${component}" is not of type "${expectedType}"`);
        }
        else {
            return false;
        }
    }
    return true;
}

export type Session = {
    currentUser: String;
    bookLastRented: (ibsn: string) => string;
}

export type Books = Book[];

// Book
export type Book = {
    isbn: string;
    title?: string;
    author: string;
}

export const isBook = (it: any): it is Book => {
    return it && 
    it.isbn && 
    it.title && 
    it.author &&
    typeof(it.isbn) === 'string' &&
    typeof(it.isbn) === 'string' &&
    typeof(it.isbn) === 'string';
}

export const raiseTypeErrorIfNotIsBook = (it: any, component: string, property: string) => checkComponentProperty(true, it, component, property, 'Book', isBook);
export const returnFalseIfNotIsBook = (it: any, component: string, property: string) => checkComponentProperty(false, it, component, property, 'Book', isBook);
