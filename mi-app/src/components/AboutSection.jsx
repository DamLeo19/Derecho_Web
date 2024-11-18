import React from 'react';
import Equilibrio from '../images/equilibrio.png';
import Ley from '../images/ley.png';
import Paraninfo from '../images/paraninfo.png';
import Diosa from '../images/tribunal-de-justicia.png';

function AboutSection() {
  return (
    <section className="section about text-center" aria-labelledby="about-label" id="about">
      <div className="container">
        <div className="about-content">
          <p className="label-2 section-subtitle" id="about-label">Our Story</p>
          <h2 className="headline-1 section-title">Cada Carrera Revela una Historia</h2>
          <p className="section-text">
          La carrera de Derecho en la Universidad Católica Boliviana (UCB) en La Paz forma profesionales con un enfoque integral,
           combinando conocimientos jurídicos sólidos, valores éticos y responsabilidad social. Destaca por su compromiso con la justicia y 
           el desarrollo de habilidades críticas para la interpretación y aplicación del derecho en contextos locales e internacionales. 
           Los estudiantes adquieren competencias en áreas como derecho penal, civil, constitucional y corporativo, 
           con una formación humanista que busca contribuir al bien común y al fortalecimiento del estado de derecho en Bolivia.
          </p>
          <div className="contact-label">Contactanos</div>
          <a href="tel:+804001234567" className="body-1 contact-number hover-underline">
            +80 (400) 123 4567
          </a>
          <a href="#" className="btn btn-primary">
            <span className="text text-1">Read More</span>
            <span className="text text-2" aria-hidden="true">Read More</span>
          </a>
        </div>

        <figure className="about-banner">
          <img
            src={Paraninfo}
            width="570"
            height="570"
            loading="lazy"
            alt="about banner"
            className="w-100"
            draggable="false"
          />

          {/* Imágenes "Equilibrio" y "Ley" */}
          <img
            src={Equilibrio}
            width="100"
            height="100"
            loading="lazy"
            alt="Equilibrio"
            className="image equilibrio"
            draggable="false"
          />
          <img
            src={Ley}
            width="100"
            height="100"
            loading="lazy"
            alt="Ley"
            className="image ley"
            draggable="false"
          />
          <img
            src={Diosa}
            width="100"
            height="100"
            loading="lazy"
            alt="Ley"
            className="image diosa"
            draggable="false"
          />
        </figure>
      </div>
    </section>
  );
}

export default AboutSection;
