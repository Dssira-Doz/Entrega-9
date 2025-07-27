import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <a href="/">
          <img src="/Silk.png" alt="Logo" className="header__logo-image" />
        </a>
      </div>
      <nav className="header__nav">
        <a href="#" className="header__nav-link">Inicio</a>
        <a href="#" className="header__nav-link">Galería</a>
        <a href="#" className="header__nav-link">Acerca de mi</a>
        <a href="#" className="header__nav-link">Contáctame</a>
      </nav>
    </header>
  );
};

export default Header;