// src/components/BookSearch.js
import React, { useState, useEffect } from "react";
import BookCard from "./BookCard";
import "./BookSearch.css";

const BookSearch = ({ addToBookshelf }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (query.length > 2) {
        try {
          const res = await fetch(
            `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`
          );
          const data = await res.json();
          setResults(data.docs);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      } else {
        setResults([]);
      }
    };

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    if (query.length > 2) {
      const timeoutId = setTimeout(() => {
        fetchData();
      }, 500);

      setTypingTimeout(timeoutId);
    } else {
      setResults([]);
    }

    // Cleanup function to clear timeout on unmount or when query changes
    return () => {
      clearTimeout(typingTimeout);
    };
  }, [query]);

  return (
    <div className="book-search">
      <input
        type="text"
        placeholder="Search for books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="results">
        {results.map((book) => (
          <BookCard
            key={book.key}
            book={book}
            addToBookshelf={addToBookshelf}
          />
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
