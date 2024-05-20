// App.js
import React from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { SharedLayOut } from './layout/SharedLayOut'; // Ensure correct import
import Books from './components/Books';
import NotFound from './pages/NotFound';
import BookDetails from './components/BookDetails';
import BookForm from './components/BookForm';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<SharedLayOut />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="books" element={<Books />} />
        <Route path="books/:id" element={<BookDetails />} />
        <Route path="books/:id/edit" element={<BookForm />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
