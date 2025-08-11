import React from "react";
import BookItem from "../bookItem/BookItem";
import NewBook from "../newBook/NewBook";

const Books = ({ books }) => {
  return (
    <>
      <div className="d-flex justify-content-center flex-wrap my-5">
        {books.map((book) => (
          <BookItem
            key={book.id}
            title={book.title}
            author={book.author}
            rating={book.rating}
            pageCount={book.pageCount}
            imageUrl={book.imageUrl}
            available={book.available}
          />
        ))}
      </div>
    </>
  );
};

export default Books;
