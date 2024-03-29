import React, { useState } from "react";
import logo from "../logo.svg"
import { Link } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("search query:", searchQuery);
  };
  
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
    
  const handleUsernameSubmit = () => {
    localStorage.setItem('username', username);
  };

  return (
    <nav className="sticky top-0 left-0 right-0 flex z-10 h-16 py-2 bg-gray-800 items-center">
      {/* Logo, Title */}
      <div className="flex w-1/6 ml-4 items-center">
        <Link to="/" className="flex items-center flex-grow">
          <img className="h-8 w-auto" src={logo} alt="" />
          <span className="text-white font-bold text-2xl">
            Nice-Board
          </span>
        </Link>
      </div>
      {/* Search */}
      <form onSubmit={handleSearchSubmit} className="flex flex-1 ml-4 h-12 items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-1/3 bg-gray-700 text-white text-sm rounded-md p-2 focus:bg-gray-100 focus:text-gray-800 focus:outline-none"
          placeholder="Search..."
        />
      </form>
      <div className="flex items-center mr-8"> 
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          className="bg-gray-700 text-white text-sm rounded-md p-2 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
          placeholder="ユーザー名"
        />
        <button onClick={handleUsernameSubmit} className="px-4 text-gray-400 hover:text-white focus:outline-none">
          設定
        </button>
      </div>
    </nav>
  );
};

export default Header;