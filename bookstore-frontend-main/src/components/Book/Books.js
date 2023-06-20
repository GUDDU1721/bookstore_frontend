

import React, { useEffect, useState } from "react";
import "./Book.css";
import axios from "axios";
import Book from "./Book";
const URL = `https://bookstore-guddu.cyclic.app/books`;
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Books = () => {
  const [books, setBooks] = useState();
  const [request, setRequest] = useState(true)
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, [request]);
  console.log(books);
  return (
    <div>
      <ul>
        {books &&
          books.map((book, i) => (
            <li key={i}>
              <Book setRequest={setRequest} request={request} book={book} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Books;