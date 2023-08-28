import React, { useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { library } from '../assets/books.json'

const LibraryContext = React.createContext();

export const useLibrary = () => {
    return useContext(LibraryContext)
}

export const LibraryProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [availableBooks, setAvailableBooks] = useState(library.length);
    const [toReadBooks, setToReadBooks] = useLocalStorage("booksToRead", [])

    const addBookToRead = (book) => {
        
        const isBookAlreadyAdded = toReadBooks.find(existingBook => existingBook.title === book.title)
        console.log(isBookAlreadyAdded)
        if(!isBookAlreadyAdded){
            setToReadBooks([...toReadBooks, book])
            setAvailableBooks(prevCount => prevCount - 1)
        };
   }


    return <LibraryContext.Provider value={{
        availableBooks,
        toReadBooks,
        addBookToRead


    }}>{children} </LibraryContext.Provider>
}


