import React from "react";
import "./App.css";

import BookItem from "./components/bookItem/BookItem";

const App = () => {
  return (
    <>
      <div>
        <h2>Books Champios App</h2>
        <p>Quiero leer libros!</p>
        <BookItem />
      </div>
    </>
  );
};

export default App;
