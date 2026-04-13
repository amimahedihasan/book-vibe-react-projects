import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const { bookId } = useParams(); // রাউটারে :id থাকলে id দিন, অথবা আপনার রাউটের সাথে মিলিয়ে নিন
    const books = useLoaderData();
    
    const expectedBooks = books.find((book) => book.bookId == bookId);
    
    

    const { image, yearOfPublishing, bookName, author, review, publisher, category, totalPages, rating, tags } = expectedBooks;

    return (
        <div className="container mx-auto my-12 px-4 lg:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                
                {/* Image Section - Pixel Perfect Alignment */}
                <div className="bg-gray-100 rounded-2xl p-12 flex items-center justify-center">
                    <img
                        src={image}
                        alt={bookName}
                        className="h-[560px] w-auto object-contain drop-shadow-2xl" 
                    />
                </div>

                {/* Content Section */}
                <div className="space-y-4">
                    <h2 className="text-4xl font-bold text-[#131313] leading-tight">
                        {bookName}
                    </h2>
                    <p className="text-xl font-medium text-[#131313CC]">
                        By : {author}
                    </p>
                    
                    <div className="border-y border-[#13131326] py-3 text-xl font-medium text-[#131313CC]">
                        {category}
                    </div>

                    <p className="text-[#131313B3] leading-relaxed">
                        <span className="font-bold text-[#131313]">Review : </span> 
                        {review}
                    </p>

                    {/* Tags */}
                    <div className="flex items-center gap-4 py-2 border-b border-[#13131326] pb-6">
                        <span className="font-bold text-[#131313]">Tag</span>
                        <div className="flex gap-3">
                            {tags.map((tag, index) => (
                                <span 
                                    key={index} 
                                    className="px-4 py-1.5 rounded-full text-sm font-semibold text-[#23BE0A] bg-[#23BE0A0D]"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Details Table-like Section */}
                    <div className="space-y-3 pt-2">
                        <div className="grid grid-cols-2 w-full max-w-sm">
                            <span className="text-[#131313B3]">Number of Pages:</span>
                            <span className="font-bold text-[#131313]">{totalPages}</span>
                        </div>
                        <div className="grid grid-cols-2 w-full max-w-sm">
                            <span className="text-[#131313B3]">Publisher:</span>
                            <span className="font-bold text-[#131313]">{publisher}</span>
                        </div>
                        <div className="grid grid-cols-2 w-full max-w-sm">
                            <span className="text-[#131313B3]">Year of Publishing:</span>
                            <span className="font-bold text-[#131313]">{yearOfPublishing}</span>
                        </div>
                        <div className="grid grid-cols-2 w-full max-w-sm">
                            <span className="text-[#131313B3]">Rating:</span>
                            <span className="font-bold text-[#131313]">{rating}</span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4 pt-6">
                        <button className="px-7 py-4 border border-[#1313134D] rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                            Read
                        </button>
                        <button className="px-7 py-4 bg-[#50B1C9] text-white rounded-lg font-bold text-lg hover:bg-[#3e98ad] transition-colors">
                            Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;