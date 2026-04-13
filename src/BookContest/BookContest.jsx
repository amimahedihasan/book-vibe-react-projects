import React, { Children, createContext, useState } from 'react';

export const BookContext = createContext(null)

const BookProiveder = ({ children }) => {

    const [storeBook, setStoreBook] = useState([]);

    const handleMarkAsRead = (currentBook) => {
        console.log(currentBook, "BookId")

        const isExistBook = storeBook.find(
            book => book.bookId === currentBook.bookId
        );

        if (isExistBook) {
            alert("This book is already exits")
        } else {
            setStoreBook([...storeBook, currentBook])
            alert(`${currentBook.bookName} is added to list`)
        }
    };

    const data = {
        handleMarkAsRead,
        setStoreBook,
        storeBook
    };

    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProiveder;
