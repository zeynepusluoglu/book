import React from "react";

type Book = {
  title: string;
  author: string;
  year: number;
  description: string;
  url: string;
};

type Props = {
  book: Book;
  onClose: () => void;
};

const BookViewModal: React.FC<Props> = ({ book, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">{book.title}</h2>
        <img src={book.url} alt={book.title} className="w-full h-60 object-cover rounded mb-4" />
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Year:</strong> {book.year}</p>
        <p className="mt-2 text-sm text-gray-700">{book.description}</p>
        <button
          onClick={onClose}
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default BookViewModal;
