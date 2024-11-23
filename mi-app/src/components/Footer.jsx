import React from "react";
import './footer.css';
import Logo from '../images/logoDerecho.png';


function Footer() {
  return (
    <footer className="footer section has-bg-image" style={{ backgroundImage: 'url(./assets/images/footer-bg.jpg)' }}>
      <div className="container">
        <div className="footer-top">
          {/* Sección de la marca */}
          <div className="footer-brand">
            <a href="#" className="logo">
            <img src={Logo} width="160" height="50" alt="ucb home" />
            </a>
            <address className="body-4">
              Universidad Católica Boliviana - Bloque F<br />
              Av. 14 de Septiembre Nº 4807 esquina, La Paz, Bolivia
            </address>
            <a href="mailto:booking@ucb.com" className="body-4 contact-link">derecho@ucb.com</a><br />
            <a href="tel:+88-123-123456" className="body-4 contact-link">Consultas: +591 12345678</a>
            <p className="body-4">Abierto: 09:00 am - 01:00 pm</p>
          </div>
        </div>

        {/* Pie de página inferior */}
        <div className="footer-bottom text-center">
          <p className="copyright">&copy; Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
