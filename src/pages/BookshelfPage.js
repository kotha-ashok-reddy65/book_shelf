// src/pages/BookshelfPage.js
import React, { useState, useEffect } from "react";
import Bookshelf from "../components/Bookshelf";
import { Link } from "react-router-dom";
//import "./BookshelfPage.css";

const BookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    setBookshelf(JSON.parse(localStorage.getItem("bookshelf")) || []);
  }, []);

  return (
    <div className="container">
      <Bookshelf bookshelf={bookshelf} />
      <Link to="/" className="button-link">
        Back to Search
      </Link>
    </div>
  );
};

export default BookshelfPage;
