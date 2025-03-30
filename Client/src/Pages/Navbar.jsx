import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
const Navbar = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token") ?? "";

  const isLoggedIn = !!token;
  const decoded = jwtDecode(token);

  const handleLogout = () => {
    localStorage.removeItem("token");
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      localStorage.removeItem("token");
      navigate("/");
    }
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-extrabold tracking-wide">
          <a href="/" className="hover:text-gray-200">
            Hack-Master
          </a>
        </div>

        <div className="flex-grow mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-full text-black shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-purple-700 text-white rounded-full hover:bg-purple-800">
              Search
            </button>
          </div>
        </div>

        <div className="flex space-x-6 text-lg">
          {!isLoggedIn ? (
            <>
              <Link to="/signup" className="hover:text-gray-200">
                Signup
              </Link>
              <Link to="/login" className="hover:text-gray-200">
                Login
              </Link>
            </>
          ) : (
            <>
              <Link to="/profile" className="hover:text-gray-200">
                Profile
              </Link>
              {decoded.role === "organiser" && (
                <Link to="/host" className="hover:text-gray-200">
                  Host
                </Link>
              )}
              <a href="/about" className="hover:text-gray-200">
                About
              </a>
              <button onClick={handleLogout} className="hover:text-gray-200">
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
