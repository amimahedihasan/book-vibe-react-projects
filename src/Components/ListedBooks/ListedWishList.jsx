import React, { useContext } from 'react';
import { BookContext } from '../../BookContest/BookContest';
import BookCard from '../HomePage/UI/BookCard';

const ListedWishList = () => {
    const { storeBook, wishList } = useContext(BookContext)
         

    return (
        <div>
            {
               wishList.map((book,index)=>(
                <BookCard key={index} book={book}></BookCard>
               ))
            }

        </div>
    );
};

export default ListedWishList;