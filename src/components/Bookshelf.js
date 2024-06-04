// src/components/Bookshelf.js
import React from "react";
import "./Bookshelf.css";

const Bookshelf = ({ bookshelf }) => (
  <div className="bookshelf">
    <h2>My Bookshelf</h2>
    {bookshelf.length === 0 ? (
      <p>No books added yet.</p>
    ) : (
      bookshelf.map((book, index) => (
        <div key={index} className="bookshelf-item">
          <h3>{book.title}</h3>
          <p>
            {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
          </p>
        </div>
      ))
    )}
  </div>
);

export default Bookshelf;
