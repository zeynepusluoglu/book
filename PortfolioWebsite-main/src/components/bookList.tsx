import React from 'react';
import BookCard from './bookCard';

type Book = {
  title: string;
  author: string;
  year: number;
  description: string;
  url: string;
};

type Props = {
  books: Book[];
  onDelete: (title: string) => void;  
};

export const BookList: React.FC<Props> = ({ books, onDelete }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {books.map((book, index) => (
        <BookCard key={index} book={book} onDelete={onDelete} />
      ))}
    </div>
  );
};
