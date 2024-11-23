import React, { useState } from "react";

function HeroSlider() {
  // Lista de imágenes
  const slides = [
    {
      id: 1,
      img: "./images/diosaDerecho.gif",
      subtitle: "SABIDURIA Y JUSTICIA",
      title: "La búsqueda constante de la verdad",
      text: "A través de la investigación y el conocimiento jurídico es nuestro pilar fundamental.",
    },
    {
      id: 2,
      img: "./images/buho.png", // Reemplaza con otra imagen
      subtitle: "INNOVACIÓN",
      title: "Hacia una educación de calidad",
      text: "Promoviendo el desarrollo integral de los estudiantes.",
    },
    {
      id: 3,
      img: "./images/estudiante.jpg", // Reemplaza con otra imagen
      subtitle: "RESPONSABILIDAD",
      title: "Comprometidos con la sociedad",
      text: "Aportando soluciones a los problemas contemporáneos.",
    },
  ];

  // Estado para rastrear la imagen activa
  const [currentSlide, setCurrentSlide] = useState(0);

  // Función para ir al siguiente slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Función para ir al slide anterior
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <section className="hero text-center dark:bg-white dark:text-black" id="home">
      <ul className="hero-slider" data-hero-slider>
        {slides.map((slide, index) => (
          <li
            key={slide.id}
            className={`slider-item ${index === currentSlide ? "active" : ""}`}
            data-hero-slider-item
          >
            <div className="slider-bg">
              <img
                src={slide.img}
                width="1880"
                height="950"
                alt=""
                className="img-cover"
              />
            </div>
            <p className="label-2 section-subtitle slider-reveal">
              {slide.subtitle}
            </p>
            <h1 className="display-1 hero-title slider-reveal">
              {slide.title}
            </h1>
            <p className="body-2 hero-text slider-reveal">{slide.text}</p>
            <a href="#" className="btn btn-primary slider-reveal">
              <span className="text text-1">Explorar</span>
              <span className="text text-2" aria-hidden="true">
                Explorar
              </span>
            </a>
          </li>
        ))}
      </ul>

      {/* Botones para cambiar el slide */}
      <button
        className="slider-btn prev"
        aria-label="slide to previous"
        onClick={prevSlide}
      >
        <ion-icon name="chevron-back"></ion-icon>
      </button>
      <button
        className="slider-btn next"
        aria-label="slide to next"
        onClick={nextSlide}
      >
        <ion-icon name="chevron-forward"></ion-icon>
      </button>

      <a href="#" className="hero-btn has-after">
        <img
          src="./images/conocenos.png"
          width="48"
          height="48"
          alt="booking icon"
        />
        <span className="label-2 text-center span">Conocenos</span>
      </a>
    </section>
  );
}

export default HeroSlider;
