import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const BookCard = ({ books }) => {
    return (
        <div>
            <h2 className='font-bold text-3xl mb-4
             text-center'>Books</h2>

            <div className='my-12 container mx-auto'>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        books.map(book => {
                            return <Link to={`/bookDetails/${book.bookId}`} key={book.bookId} className="card bg-base-100 shadow-sm">
                                <figure className='p-6'>
                                    <img
                                        alt={book.bookName}
                                        src={book.image}
                                        className='rounded-xl h-[260px]'
                                    />
                                </figure>
                                <div className="card-body">
                                    <div className='flex items-center gap-2.5'>

                                        {
                                            book.tags.map((tag, index) => (
                                                <div key={index} className="badge font-bold  text-green-500 bg-green-100">{tag}
                                                </div>
                                            ))}
                                    </div>
                                    <h2 className="card-title font-bold text-2xl">
                                        {book.bookName}
                                    </h2>
                                    <p className='font-semibold text-lg'>{book.author} </p>

                                    <div className="card-actions justify-between border-t border-dashed pt-4 text-xl
                             border-gray-300">
                                        <div className="font-semibold">{book.category}</div>
                                        <div className="flex gap-2 items-center">{book.rating} <FaStar />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        })
                    }
                </div>

            </div>

        </div>
    );
};

export default BookCard;