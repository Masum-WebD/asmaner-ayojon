import React, { useEffect, useState } from "react";
import Book from "./Book";

const BookCalligraphy = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("bookData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="mt-10">
      <h1 className="text-2xl font-bold  text-gray-700"> Book Calligraphy</h1>
      <div className="mx-auto w-full">
        <div className="w-20 mb-5 mx-auto h-1 bg-[#FF87B7]"></div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 ">
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookCalligraphy;
