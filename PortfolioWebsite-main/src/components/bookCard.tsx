import React from 'react';
import DelButton from './delButton';

type Book = {
  title: string;
  author: string;
  year: number;
  description: string;
  url: string;
};

type Props = {
  book: Book;
  onDelete: (title: string) => void;
};

const BookCard: React.FC<Props> = ({ book, onDelete }) => {
  const onFavoriteClick = () => {
    alert(`Favorilere eklendi: ${book.title}`);
  };

  const handleDelete = () => {
    onDelete(book.title);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-5 w-full max-w-sm hover:shadow-lg transition">
      <img
        src={book.url}
        alt={book.title}
        className="w-full h-48 object-contain rounded-md mb-6"
      />
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">{book.title}</h2>
        <button
          onClick={onFavoriteClick}
          className="text-pink-500 text-2xl hover:scale-110 transition"
        >
          🩷
        </button>
      </div>

      <p className="text-gray-700"><strong>Author:</strong> {book.author}</p>
      <p className="text-gray-700"><strong>Year:</strong> {book.year}</p>
      <p className="text-sm text-gray-600 mt-2">{book.description}</p>

      <div className="flex justify-end mt-4">
        <DelButton onClick={handleDelete} />
      </div>

      <button className="mt-3 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
        👁 View
      </button>
    </div>
  );
};

export default BookCard;
