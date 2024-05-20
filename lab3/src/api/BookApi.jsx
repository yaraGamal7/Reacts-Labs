// api/BookApi.js
import axios from 'axios';

const baseUrl = 'http://localhost:3005/books';

export const getAllBooks = async () => {
  return axios.get(baseUrl);
};

export const getBookById = async (id) => {
  return axios.get(`${baseUrl}/${id}`);
};

export const createBook = async (book) => {
  return axios.post(baseUrl, book);
};

export const updateBook = async (id, book) => {
  return axios.put(`${baseUrl}/${id}`, book);
};

export const deleteBook = async (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};
