// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header className="header" data-header>
      <div className="container">
        <a href="#" className="logo">
          <img src="./assets/images/logoDerecho.png" width="160" height="50" alt="Carrera de Derecho" />
        </a>
        <nav className="navbar" data-navbar>
          <button className="close-btn" aria-label="close menu" data-nav-toggler>
            <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
          </button>
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#home" className="navbar-link hover-underline active">
                <div className="separator"></div>
                <span className="span">Home</span>
              </a>
            </li>
            {/* Añadir los otros enlaces de la barra de navegación */}
          </ul>
        </nav>
        <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </button>
        <div className="overlay" data-nav-toggler data-overlay></div>
      </div>
    </header>
  );
}

export default Header;
