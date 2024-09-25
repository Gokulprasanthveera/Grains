import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-gradient-to-r from-blue-200 via-blue-300 to-blue-100 shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl text-gray-800">Grow grains Store</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              to="/"
              className="text-gray-800 hover:text-white transition duration-300 ease-in-out"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="text-gray-800 hover:text-white transition duration-300 ease-in-out"
            >
              Cart
            </Link>
          </li>
          <li>
            <Link
              to="/feedback"
              className="text-gray-800 hover:text-white transition duration-300 ease-in-out"
            >
              Feedback
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
