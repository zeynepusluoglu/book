import React, { useState } from 'react';
import { BookList } from './components/bookList';
import Navbar from './components/navBar';

type Book = {
  title: string;
  author: string;
  year: number;
  description: string;
  url: string;
};

const initialBooks: Book[] = [
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    year: 2008,
    description: "A Handbook of Agile Software Craftsmanship",
    url: "https://m.media-amazon.com/images/I/41xShlnTZTL.jpg"
  },
  {
    title: "You Don’t Know JS Yet",
    author: "Kyle Simpson",
    year: 2020,
    description: "Scope & Closures, 2nd Edition",
    url: "https://m.media-amazon.com/images/I/81kqrwS1nNL._SL1500_.jpg"
  }
];

const App: React.FC = () => {
  // books state olarak tutuluyor ki güncellenebilsin
  const [books, setBooks] = useState<Book[]>(initialBooks);

  // Kitap silme fonksiyonu
  const handleDelete = (title: string) => {
    setBooks(prevBooks => prevBooks.filter(book => book.title !== title));
  };

  return (
    <>
      <Navbar />
      <main className="mt-24 p-6">
        <h1 className="text-center text-3xl font-bold mb-8">Library Manager</h1>
        <BookList books={books} onDelete={handleDelete} />
      </main>
    </>
  );
};

export default App;
