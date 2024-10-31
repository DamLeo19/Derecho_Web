// src/components/HeroSlider.js
import React, { useState, useEffect } from 'react';

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderItems = [
    { imgSrc: "./assets/images/diosaDerecho.gif", title: "La búsqueda constante de la verdad", subtitle: "SABIDURIA Y JUSTICIA" },
    { imgSrc: "./assets/images/buho.png", title: "Formamos profesionales comprometidos", subtitle: "SABIDURIA Y JUSTICIA" },
    { imgSrc: "./assets/images/DerechoUCB.png", title: "Nuestra acreditación garantiza", subtitle: "SABIDURIA Y JUSTICIA" },
  ];

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderItems.length);
    }, 7000);

    return () => clearInterval(autoSlide);
  }, [sliderItems.length]);

  return (
    <section className="hero text-center" aria-label="home" id="home">
      <ul className="hero-slider" data-hero-slider>
        {sliderItems.map((item, index) => (
          <li key={index} className={`slider-item ${currentSlide === index ? 'active' : ''}`} data-hero-slider-item>
            <div className="slider-bg">
              <img src={item.imgSrc} alt="" className="img-cover" />
            </div>
            <p className="label-2 section-subtitle slider-reveal">{item.subtitle}</p>
            <h1 className="display-1 hero-title slider-reveal">{item.title}</h1>
            <a href="#" className="btn btn-primary slider-reveal">
              <span className="text text-1">Explorar</span>
              <span className="text text-2" aria-hidden="true">Explorar</span>
            </a>
          </li>
        ))}
      </ul>
      <button className="slider-btn prev" onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + sliderItems.length) % sliderItems.length)} aria-label="slide to previous">
        <ion-icon name="chevron-back"></ion-icon>
      </button>
      <button className="slider-btn next" onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderItems.length)} aria-label="slide to next">
        <ion-icon name="chevron-forward"></ion-icon>
      </button>
    </section>
  );
}

export default HeroSlider;
