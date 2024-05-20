import React from 'react';
import '../css/header.css'; // Assuming you have a CSS file for styling

export default function Header() {
  return (
    <header className="header">
    
      <section className="header__main-section">
        <div className="header__main-container">
          <div className="header__content">
            <h2>Welcome </h2>
            <p>
              That's fantastic! Starting to program is like opening a door to a whole new world of creativity and problem-solving.
              <br />
            </p>
            <button className="header__button">Let's Go!</button>
          </div>
          <img
            src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGR2YW5nb2doLWR0MTU2Ny5qcGc.jpg" 
            alt="Header"
            className="header__image"
          />
        </div>
      </section>
    </header>
  );
}
