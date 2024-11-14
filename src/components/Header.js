// src/components/Header.js
import React from 'react';
import './styles.css';

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Lernantino</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="#about">About Me</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#resume">Resume</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
