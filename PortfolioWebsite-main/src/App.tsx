import React, { useState } from 'react';
import { BookList } from './components/bookList';
import NavBar from './components/navBar';
import AddBook from './components/addBook';

export type Book = {
  title: string;
  author: string;
  year: number;
  description: string;
  url: string;
};

const initialBooks: Book[] = [
  {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    year: 2008,
    description: 'A Handbook of Agile Software Craftsmanship',
    url: 'https://m.media-amazon.com/images/I/41xShlnTZTL.jpg',
  },
  {
    title: 'You Don’t Know JS Yet',
    author: 'Kyle Simpson',
    year: 2020,
    description: 'Scope & Closures, 2nd Edition',
    url: 'https://m.media-amazon.com/images/I/81kqrwS1nNL._SL1500_.jpg',
  },
];

const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>(initialBooks);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const handleDelete = (title: string) => {
    setBooks(prev => prev.filter(book => book.title !== title));
  };

  const handleAddBook = (newBook: Book) => {
    setBooks(prev => [...prev, newBook]);
    setShowAddModal(false);
  };

  const handleView = (book: Book) => {
    setSelectedBook(book);
  };

  return (
    <>
      <NavBar onAddBookClick={() => setShowAddModal(true)} />

      <main className="mt-24 p-6">
        <h1 className="text-center text-3xl font-bold mb-8">Library Manager</h1>

        <BookList books={books} onDelete={handleDelete} onView={handleView} />

        {showAddModal && (
          <AddBook onClose={() => setShowAddModal(false)} onAddBook={handleAddBook} />
        )}

        {selectedBook && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded shadow-lg w-96 max-h-[80vh] overflow-y-auto">
              <h2 className="text-xl font-bold mb-2">{selectedBook.title}</h2>
              <p className="text-gray-700 mb-1">Author: {selectedBook.author}</p>
              <p className="text-gray-700 mb-1">Year: {selectedBook.year}</p>
              <p className="text-gray-700 mb-2">{selectedBook.description}</p>
              <img
                src={selectedBook.url}
                alt={selectedBook.title}
                className="w-full h-auto rounded mb-4"
              />
              <button
                onClick={() => setSelectedBook(null)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
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
