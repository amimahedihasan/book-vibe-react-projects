import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-4">
      
      <div className="text-center max-w-xl">
        
        {/* Icon */}
        <div className="text-8xl mb-6 animate-bounce">
          📚
        </div>

        {/* Title */}
        <h1 className="text-6xl font-bold text-gray-800 mb-4">
          404
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Book Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mb-6">
          Oops! The book you are looking for does not exist in our library.  
          It might have been removed or the link is incorrect.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          
          <Link to="/">
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-xl shadow-md hover:bg-indigo-700 transition duration-300">
              🏠 Go Home
            </button>
          </Link>

          <Link to="/books">
            <button className="bg-white border border-indigo-500 text-indigo-600 px-6 py-2 rounded-xl shadow-md hover:bg-indigo-50 transition duration-300">
              📖 Browse Books
            </button>
          </Link>

        </div>

        {/* Footer */}
        <div className="mt-10 text-sm text-gray-400">
          Book Bike 🚲 | Discover Your Next Read
        </div>
      </div>

    </div>
  );
};

export default ErrorPage;