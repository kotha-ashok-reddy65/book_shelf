// src/pages/SearchPage.js
import React, { useState } from "react";
import BookSearch from "../components/BookSearch";
import { Link } from "react-router-dom";
//import "./SearchPage.css";

const SearchPage = () => {
  const [bookshelf, setBookshelf] = useState(
    JSON.parse(localStorage.getItem("bookshelf")) || []
  );

  const addToBookshelf = (book) => {
    const newBookshelf = [...bookshelf, book];
    setBookshelf(newBookshelf);
    localStorage.setItem("bookshelf", JSON.stringify(newBookshelf));
  };

  return (
    <div className="container">
      <h1>Book Search</h1>
      <BookSearch addToBookshelf={addToBookshelf} />
      <Link to="/bookshelf" className="button-link">
        Go to My Bookshelf
      </Link>
    </div>
  );
};

export default SearchPage;
