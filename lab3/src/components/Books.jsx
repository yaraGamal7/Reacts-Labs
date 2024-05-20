// Books.jsx
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS
import { getAllBooks, deleteBook } from '../api/BookApi'; // Adjust the path as necessary

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllBooks();
        setBooks(result.data); // Ensure the API returns an array of books
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteBook(id);
      setBooks(books.filter((book) => book.id !== id)); // Update state after deletion
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-5 text-center">
      <div className="mb-3 container">
        <h1 className="text-dark">Books List</h1>
        <Link to="/books/0/edit">
          <i className="bi bi-plus-circle-fill text-success" style={{ fontSize: '2rem' }}></i>
        </Link>
        <Table striped bordered hover className="mt-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>Book Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.name}</td>
                <td>{book.desc}</td>
                <td>
                  <Link to={`/books/${book.id}`}>
                    <i className="bi bi-eye-fill text-info me-2"></i>
                  </Link>
                  <Link to={`/books/${book.id}/edit`}>
                    <i className="bi bi-pencil-square text-primary me-2"></i>
                  </Link>
                  <i
                    className="bi bi-trash3-fill text-danger"
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleDelete(book.id)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
