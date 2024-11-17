/* eslint-disable */

import React from 'react';
import { NavLink } from "react-router-dom";
import '../index.css';

function Header() {
  return (
    <header className="header" data-header>
      <div className="container">
        <a href="#menu" className="logo">
          <img src="./images/logoDerecho.png" width="160" height="50" alt="Carrera de Derecho" />
        </a>
        <nav className="navbar" data-navbar>
          <button className="close-btn" aria-label="close menu" data-nav-toggler>
            <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
          </button>
          <ul className="navbar-list">
            <li className="navbar-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "navbar-link hover-underline active" : "navbar-link hover-underline"
                }
              >
                <div className="separator"></div>
                Home
              </NavLink>
            </li>
            <li className="navbar-item">
              <a href="#menu" className="navbar-link hover-underline">
                <div className="separator"></div>
                <span className="span">Inicio</span>
              </a>
            </li>
            <li className="navbar-item">
              <a href="#about" className="navbar-link hover-underline">
                <div className="separator"></div>
                <span className="span">Sobre nosotros</span>
              </a>
            </li>
            <li className="navbar-item">
              <NavLink
                to="/clinica"
                className={({ isActive }) =>
                  isActive ? "navbar-link hover-underline active" : "navbar-link hover-underline"
                }
              >
                <div className="separator"></div>
                Clinica Juridica
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink
                to="/docentes"
                className={({ isActive }) =>
                  isActive ? "navbar-link hover-underline active" : "navbar-link hover-underline"
                }
              >
                <div className="separator"></div>
                Docentes
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink
                to="/docentes"
                className={({ isActive }) =>
                  isActive ? "navbar-link hover-underline active" : "navbar-link hover-underline"
                }
              >
                <div className="separator"></div>
                Docentes
              </NavLink>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link hover-underline">
                <div className="separator"></div>
                <span className="span">Contactos</span>
              </a>
            </li>
          </ul>
          <div className="text-center">
            <p className="headline-1 navbar-title">Visitanos!</p>
            <address className="body-4">
              Universidad Catolica Boliviana - Bloque F
              Av. 14 de Septiembre Nº 4807 esquina, La Paz, Bolivia
            </address>
            <p className="body-4 navbar-text">Abierto: 8:00am - 16:00pm</p>
            <a href="mailto:booking@ucb.com" className="body-4 sidebar-link">derecho@ucb.com</a>
            <div className="separator"></div>
            <p className="contact-label">Request</p>
            <a href="tel:+88123123456" className="body-1 contact-number hover-underline">
              +123456789
            </a>
          </div>
        </nav>
        <a href="#menu" className="btn btn-secondary">
          <span className="text text-1">Malla curricular</span>
          <span className="text text-2" aria-hidden="true">Malla curricular</span>
        </a>
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

/* CSS - Create a file named Header.css in the same directory */

