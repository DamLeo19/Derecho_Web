// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="footer section has-bg-image text-center" style={{ backgroundImage: `url('./assets/images/footer-bg.jpg')` }}>
      <div className="container">
        <div className="footer-top grid-list">
          <div className="footer-brand has-before has-after">
            <a href="#" className="logo">
              <img src="./assets/images/logo.svg" width="160" height="50" loading="lazy" alt="ucb home" />
            </a>
            <address className="body-4">
              Universidad Catolica Boliviana - Bloque F Av. 14 de Septiembre Nº 4807 esquina, La Paz, Bolivia
            </address>
            <a href="mailto:booking@ucb.com" className="body-4 contact-link">booking@ucb.com</a>
            <a href="tel:+88123123456" className="body-4 contact-link">Booking Request : +88-123-123456</a>
          </div>
          {/* Añadir otras listas de enlaces de pie de página */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
