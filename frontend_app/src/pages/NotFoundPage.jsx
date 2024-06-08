import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
        <Link
          to="/"
          className="inline-block bg-indigo-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-600 transition duration-300"
        >
          Go back to Home
        </Link>
      </div>
      <img
        src="https://img.freepik.com/premium-vector/404-error-template-flat-style_23-2147731775.jpg?w=740"
        alt="Page Not Found"
        className="mt-8 animate-bounce w-32"
      />
    </div>
  );
};

export default NotFoundPage;
