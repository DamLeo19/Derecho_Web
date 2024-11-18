import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Modal from './Modal'; // Importar el componente Modal
import '../index.css'; // Importar estilos

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

  return (
    <header className="header" data-header>
      <div className="container">
        <Link to="/" className="logo">
          <img src="./images/logoDerecho.png" width="160" height="50" alt="Carrera de Derecho" />
        </Link>
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
            <li className="navbar-item">
              <NavLink
                to="/logros"
                className={({ isActive }) =>
                  isActive ? "navbar-link hover-underline active" : "navbar-link hover-underline"
                }
              >
                <div className="separator"></div>
                Logros
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink
                to="/clinica"
                className={({ isActive }) =>
                  isActive ? "navbar-link hover-underline active" : "navbar-link hover-underline"
                }
              >
                <div className="separator"></div>
                Clínica Jurídica
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
              <a href="#contactos" className="navbar-link hover-underline">
                <div className="separator"></div>
                <span className="span">Contactos</span>
              </a>
            </li>
            <li className="navbar-item">
              <NavLink
                to="/register"
                className="navbar-link hover-underline"
              >
                <div className="separator"></div>
                Registrarte
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink
                to="/login"
                className="navbar-link hover-underline"
              >
                <div className="separator"></div>
                Login
              </NavLink>
            </li>
          </ul>
          <div className="text-center">
            <p className="headline-1 navbar-title">Visítanos!</p>
            <address className="body-4">
              Universidad Católica Boliviana - Bloque F
              Av. 14 de Septiembre Nº 4807 esquina, La Paz, Bolivia
            </address>
            <p className="body-4 navbar-text">Abierto: 8:00am - 16:00pm</p>
            <a href="mailto:derecho@ucb.com" className="body-4 sidebar-link">derecho@ucb.com</a>
            <div className="separator"></div>
            <p className="contact-label">Request</p>
            <a href="tel:+123456789" className="body-1 contact-number hover-underline">
              +123456789
            </a>
            <Link to="/malla-curricular" className="btn btn-secondary">
              <span className="text text-1">Malla curricular</span>
              <span className="text text-2" aria-hidden="true">Malla curricular</span>
            </Link>
            <button onClick={openModal} className="btn btn-secondary">
              <span className="text text-1">Mapa del Campus</span>
              <span className="text text-2" aria-hidden="true">Mapa del Campus</span>
            </button>


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
        <button className="nav-open-btn" aria-label="open menu" onClick={toggleMenu}>
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </button>
        <div
          className={`overlay ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        ></div>
      </div>
      {isModalOpen && <Modal closeModal={closeModal} />}
    </header>
  );
}

export default Header;
