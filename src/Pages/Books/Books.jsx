import React, { useContext } from 'react';
import { BookContext } from '../../BookContest/BookContest';

const Books = () => {
    const { storeBook } = useContext(BookContext)
    console.log(storeBook,"bookContest")

    return (
        <div>
            <h2>Listed Books</h2>


        </div>
    );
};

export default Books;