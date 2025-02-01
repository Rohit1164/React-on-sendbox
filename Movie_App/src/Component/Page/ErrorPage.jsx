import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  let navigate = useNavigate();
  const handleBackBtn = () => {
    navigate(-1);
  };
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="mt-4 text-2xl text-gray-600">Oops! Page Not Found</p>
        <p className="mt-2 text-gray-500">
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </p>
        <NavLink
          to="/"
          className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600"
        >
          Go Back to Home
        </NavLink>
        <button
          className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600"
          onClick={handleBackBtn}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
