export type Session = {
    currentUser: String;
    bookLastRented: (ibsn: string) => string;
}

export type Books = Book[];

export type Book = {
    isbn: string;
    title: string;
    author: string;
}