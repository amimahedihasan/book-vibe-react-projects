import React, { Children, createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext(null)

const BookProiveder = ({ children }) => {

    const [storeBook, setStoreBook] = useState([]);
    const [wishList, setWishList] = useState([]);

    const handleMarkAsRead = (currentBook) => {
        console.log(currentBook, "BookId")

        const isExistBook = storeBook.find(
            book => book.bookId === currentBook.bookId
        );

        if (isExistBook) {
            toast.error("এটি আপনি আগেই পড়েছেন!")
        } else {
            setStoreBook([...storeBook, currentBook])
            toast.success(`${currentBook.bookName} পড়া তালিকায় যোগ হলো`)
        }
    };


    const handleWishList = (currentBook) => {
        const isExistInReadList = storeBook.find((book) => book.bookId === currentBook.bookId)

        if (isExistInReadList) {
            toast.error("বইটি আপনি পড়ে ফেলেছেন, উইশলিস্টে নেওয়ার দরকার নেই!");
             return;
        }
        
        else {
            setWishList([...wishList, currentBook])
            toast.success(`${currentBook.bookName}উইশলিস্টে যোগ হলো`)
        }

    };

    const data = {
        handleMarkAsRead,
        setStoreBook,
        storeBook,
        wishList,
        setWishList,
        handleWishList,
    };

    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProiveder;
