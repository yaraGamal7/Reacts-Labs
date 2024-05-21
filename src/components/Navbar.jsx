import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function MyNavbar() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Watches</Navbar.Brand>
        <Nav className="ms-auto">
          <NavLink className={({ isActive }) => (isActive ? 'text-white nav-link' : 'nav-link')} to="/">
            Home
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'text-white nav-link' : 'nav-link')} to="/about">
            about
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'text-white nav-link' : 'nav-link')} to="/watches">
            Watches
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
