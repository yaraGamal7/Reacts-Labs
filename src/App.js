import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import Footer from './components/Footer';
import Watches from './components/Watches';
import WatchesDetails from './components/WatchDetails';
import WatchEdit from './components/WatchEdit ';
import WatchesForm from './components/WatchForm';
import NotFound from './components/Notfound';
import MainLayout from './components/Mainlayout';
import About from './components/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <MainLayout />
        <Footer />
      </>
    ),
    children: [
      { path: 'about', element: <About />, activeIndex: true },
      { path: 'watches', element: <Watches /> },
      { path: 'watch/:id', element: <WatchesDetails /> },
      { path: 'watch/:id/edit', element: <WatchEdit /> },
      { path: 'add', element: <WatchesForm /> },
    ],
  },
  { path: '*', element: <NotFound /> }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
