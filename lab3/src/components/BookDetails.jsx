// BookDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';
import { getBookById } from '../api/BookApi'; // Adjust the path as necessary
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const result = await getBookById(id);
        setBook(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBook();
  }, [id]);

  if (!book) {
    return (
      <div className='bg-dark text-light text-center'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <Container className='d-flex justify-content-center my-5'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={book.img} alt={book.name} />
        <Card.Body className='bg-success text-light text-center'>
          <Card.Title>{book.name}</Card.Title>
          <Card.Text>{book.desc}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
