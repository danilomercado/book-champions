import React, { useState } from "react";
import BookItem from "../bookItem/BookItem";
import BookSearch from "../bookSearch/BookSearch";

const Books = ({ books, onBookDeleted }) => {
  const [search, setSearch] = useState("");
  const handleSearch = (value) => {
    setSearch(value);
  };

  const filteredBooks = books
    .filter((book) =>
      search
        ? book.title.toLowerCase().includes(search.toLowerCase()) ||
          book.author.toLowerCase().includes(search.toLowerCase())
        : book
    )
    .map((book) => (
      <BookItem
        key={book.id}
        title={book.title}
        author={book.author}
        rating={book.rating}
        pageCount={book.pageCount}
        imageUrl={book.imageUrl}
        available={book.available}
        onBookDeleted={onBookDeleted}
      />
    ));
  return (
    <>
      <div className="d-flex justify-content-center flex-wrap my-5">
        <div className="container max-w-50 d-flex justify-content-center flex-wrap">
          <BookSearch onSearch={handleSearch} search={search} />
        </div>
        <div className="container d-flex justify-content-center flex-wrap">
          {filteredBooks.length ? (
            filteredBooks
          ) : (
            <p>No se encontraron libros</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Books;
