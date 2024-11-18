// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal'; // Importar el componente Modal
import '../index.css'; // Importar el componente Modal


function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header className="header" data-header>
      <div className="container">
        <a href="#menu" className="logo">
          <img src="./images/logoDerecho.png" width="160" height="50" alt="Carrera de Derecho" />
        </a>
        <nav className={`navbar ${isMenuOpen ? "active" : ""}`} data-navbar>
          <button className="close-btn" aria-label="close menu" onClick={toggleMenu}>
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
              <a href="#about" className="navbar-link hover-underline">
                <div className="separator"></div>
                <span className="span">Sobre nosotros</span>
              </a>
            </li>
            <NavLink
                  to="/logros"
                  className={({ isActive }) =>
                    isActive ? "navbar-link hover-underline active" : "navbar-link hover-underline"
                  }
                >
                  <div className="separator"></div>
                  Logros
                </NavLink>

            <NavLink
                  to="/logros"
                  className={({ isActive }) =>
                    isActive ? "navbar-link hover-underline active" : "navbar-link hover-underline"
                  }
                >
                  <div className="separator"></div>
                  CLinica Juridica
              </NavLink>
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
            <li className="navbar-item">
              <a className="navbar-link hover-underline">
                <div className="separator"></div>
                <Link to="/register">Registrarte</Link>
              </a>
            </li>
            <li className="navbar-item">
              <a className="navbar-link hover-underline">
                <div className="separator"></div>
                <Link to="/login">Login</Link>
              </a>
            </li>
          </ul>
          <div className="text-center">
            <p className="headline-1 navbar-title">Visítanos!</p>
            <address className="body-4">
              Universidad Católica Boliviana - Bloque F
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
        <Link to="/malla-curricular" className="btn btn-secondary">
          <span className="text text-1">Malla curricular</span>
          <span className="text text-2" aria-hidden="true">Malla curricular</span>
        </Link>
        <button onClick={openModal} className="btn btn-secondary">
          <span className="text text-1">Mapa del Campus</span>
          <span className="text text-2" aria-hidden="true">Mapa del Campus</span>
        </button>
      </div>
      {isModalOpen && <Modal closeModal={closeModal} />}
    </header>
  );
}

export default Header;
