import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-black text-white px-4 text-center">
      <h1 className="text-6xl font-bold text-red-600 mb-4">Oops!</h1>
      <h2 className="text-3xl font-semibold mb-4">Something went wrong.</h2>
      <p className="text-gray-400 mb-8 max-w-md">
        We encountered an unexpected error while trying to process your request.
        Please try again or return to the homepage.
      </p>
      <Link to="/">
        <button className="px-6 py-3 bg-[#e50914] rounded-md font-bold hover:bg-red-700 transition-colors">
          Go to Homepage
        </button>
      </Link>
    </div>
  );
};

export default Error;
