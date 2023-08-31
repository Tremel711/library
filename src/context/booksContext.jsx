import React, { useContext, useState, useEffect } from "react";
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

    useEffect(() => {
        // Cargar los libros almacenados en toReadBooks desde el almacenamiento local
        const storedBooks = JSON.parse(localStorage.getItem("booksToRead")) || [];

        // Calcular la diferencia entre el total de libros disponibles y los libros ya agregados
        const addedBooksCount = storedBooks.length;
        const newAvailableBooks = library.length - addedBooksCount;

        // Actualizar el estado de availableBooks con la nueva cantidad calculada
        setAvailableBooks(newAvailableBooks);
    }, [toReadBooks]);

    /* const deleteBookToRead = (book) => {

        return
    } */

    const addBookToRead = (book) => {

        const isBookAlreadyAdded = toReadBooks.find(existingBook => existingBook.title === book.title)

        if (!isBookAlreadyAdded) {
            setToReadBooks([...toReadBooks, book])
            setAvailableBooks(prevCount => prevCount - 1)
        };
    }
    const deleteBook = (book) => {
        const updatedToReadBooks = toReadBooks.filter(existingBook => existingBook.title !== book.title);
        setToReadBooks(updatedToReadBooks);
    };


    return <LibraryContext.Provider value={{
        availableBooks,
        toReadBooks,
        addBookToRead,
        deleteBook


    }}>{children} </LibraryContext.Provider>
}


