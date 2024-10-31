// src/components/AboutSection.js
import React from 'react';

function AboutSection() {
  return (
    <section className="section about text-center" aria-labelledby="about-label" id="about">
      <div className="container">
        <div className="about-content">
          <p className="label-2 section-subtitle" id="about-label">Our Story</p>
          <h2 className="headline-1 section-title">Cada Carrera Revela una Historia</h2>
          <p className="section-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <a href="#" className="btn btn-primary">
            <span className="text text-1">Read More</span>
            <span className="text text-2" aria-hidden="true">Read More</span>
          </a>
        </div>
        <figure className="about-banner">
          <img src="./assets/images/about-banner.jpg" alt="about banner" className="w-100" data-parallax-item data-parallax-speed="1" />
        </figure>
      </div>
    </section>
  );
}

export default AboutSection;
