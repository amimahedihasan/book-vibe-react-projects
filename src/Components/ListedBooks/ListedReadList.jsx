import React, { useContext, useState } from 'react';
import { BookContext } from '../../BookContest/BookContest';
import BookCard from '../HomePage/UI/BookCard';

const ListedReadList = () => {
    const { storeBook, wishList } = useContext(BookContext)
    console.log(storeBook, wishList)
    return (
        <div>
            {
               storeBook.map((book,index)=>(
                <BookCard key={index} book={book}></BookCard>
               ))
            }

        </div>
    );
};

export default ListedReadList;