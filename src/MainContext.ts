import { Session } from './types';
import React from 'react';

export type MainContextType = {
    session: Session;
}

const emptyMainContext: MainContextType = {
    session: {
        currentUser: 'n/a',
        bookLastRented: (isbn: string) => {
            return 'Never';
        }
    }
}

export const patrickSession: MainContextType = {
    session: {
        currentUser: 'Patrick',
        bookLastRented: (isbn: string) => {
            return isbn === '564W' ? '2021-Dec-01' : 'Never';
        }
    }
}

export const tabithaSession: MainContextType = {
    session: {
        currentUser: 'Tabitha',
        bookLastRented: (isbn: string) => {
            return '2022-Mar-21';
        }
    }
}

export const MainContext = React.createContext(emptyMainContext);