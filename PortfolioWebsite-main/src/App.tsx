import React, { useState } from 'react';
import {BookList} from './components/bookList';
import Navbar from './components/navBar';
import AddBook from './components/addBook';

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
  const [books, setBooks] = useState<Book[]>(initialBooks);

  const [showModal, setShowModal] = useState(false);

  const handleDelete = (title: string) => {
    setBooks(prevBooks => prevBooks.filter(book => book.title !== title));
  };

  return (
    <>
      <Navbar onAddBookClick={() => setShowModal(true)} />

      <main className="mt-24 p-6">
        <h1 className="text-center text-3xl font-bold mb-8">Library Manager</h1>

        <BookList books={books} onDelete={handleDelete} />

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg">
              <h2 className="text-xl font-bold mb-4">Add New Book (Henüz yapılmadı)</h2>
              <button 
                onClick={() => setShowModal(false)} 
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default App;
