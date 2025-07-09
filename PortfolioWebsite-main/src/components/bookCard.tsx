import React from 'react';
import { Book } from '../App';

type Props = {
  book: Book;
  onDelete: (title: string) => void;
  onView: (book: Book) => void;
};

const BookCard: React.FC<Props> = ({ book, onDelete, onView }) => {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
      <img src={book.url} alt={book.title} className="w-full h-48 object-cover rounded mb-3" />
      <h3 className="text-lg font-bold">{book.title}</h3>
      <p className="text-gray-700">{book.author}</p>
      <p className="text-sm text-gray-500 mb-2">{book.year}</p>
      <div className="flex justify-between">
        <button
          onClick={() => onView(book)}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          👁 View
        </button>
        <button
          onClick={() => onDelete(book.title)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          🗑 Delete
        </button>
      </div>
    </div>
  );
};

export default BookCard;
