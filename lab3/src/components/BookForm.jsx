import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { getBookById, createBook, updateBook } from '../api/BookApi'; // Adjust the path as necessary

export default function BookForm() {
  const [book, setBook] = useState({ name: '', desc: '', img: '' });
  const [validated, setValidated] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = id !== '0';

  useEffect(() => {
    if (isEditing) {
      const fetchBook = async () => {
        try {
          const result = await getBookById(id);
          setBook(result.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchBook();
    }
  }, [id, isEditing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { name, desc, img } = book;
    const nameValid = name.length >= 2 && !/\d/.test(name);
    const descValid = desc.length >= 5;
    const imgValid = !/\d/.test(img);

    return nameValid && descValid && imgValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false || !validateForm()) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    try {
      if (isEditing) {
        await updateBook(id, book);
      } else {
        await createBook(book);
      }
      navigate('/books');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group controlId="formBookTitle">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter book title"
          name="name"
          value={book.name}
          onChange={handleChange}
          required
          isInvalid={validated && (book.name.length < 2 || /\d/.test(book.name))}
        />
        <Form.Control.Feedback type="invalid">
          Name should be at least 2 characters long and should not contain numbers.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formBookDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter book description"
          name="desc"
          value={book.desc}
          onChange={handleChange}
          required
          isInvalid={validated && book.desc.length < 5}
        />
        <Form.Control.Feedback type="invalid">
          Description should be at least 5 characters long.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formBookImage">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter image URL"
          name="img"
          value={book.img}
          onChange={handleChange}
          required
          isInvalid={validated && /\d/.test(book.img)}
        />
        <Form.Control.Feedback type="invalid">
          Image URL should not contain numbers.
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit">
        {isEditing ? 'Update' : 'Submit'}
      </Button>
    </Form>
  );
}
