import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-6 py-4 flex justify-between items-center">
      
      <div className="text-2xl font-bold text-blue-600">
        Library Manager
      </div>

      <div className="space-x-6 text-gray-700 text-lg">
        <a href="#" className="hover:text-blue-500">Home</a>
        <a href="#" className="hover:text-blue-500">Books</a>
        <a href="#" className="hover:text-blue-500">Favorites</a>
        <a href="#" className="hover:text-blue-500">About</a>
        
        <button className ="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        onClick={onAddBookClick}>
            + Add Book
        </button>

      </div>    

      
    </nav>
  );
};

export default Navbar;

