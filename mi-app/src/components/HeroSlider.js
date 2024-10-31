import React from 'react';

function HeroSlider() {
  return (
    <section className="hero text-center" id="home">
      <ul className="hero-slider" data-hero-slider>
        <li className="slider-item active" data-hero-slider-item>
          <div className="slider-bg">
            <img src="./images/diosaDerecho.gif" width="1880" height="950" alt="" className="img-cover" />
          </div>
          <p className="label-2 section-subtitle slider-reveal">SABIDURIA Y JUSTICIA</p>
          <h1 className="display-1 hero-title slider-reveal">
            La búsqueda constante de la verdad  <br />
          </h1>
          <p className="body-2 hero-text slider-reveal">
            A través de la investigación y el conocimiento jurídico es nuestro pilar fundamental.
          </p>
          <a href="#" className="btn btn-primary slider-reveal">
            <span className="text text-1">Explorar</span>
            <span className="text text-2" aria-hidden="true">Explorar</span>
          </a>
        </li>
        {/* Repite el código para los otros sliders */}
      </ul>
      <button className="slider-btn prev" aria-label="slide to previous" data-prev-btn>
        <ion-icon name="chevron-back"></ion-icon>
      </button>
      <button className="slider-btn next" aria-label="slide to next" data-next-btn>
        <ion-icon name="chevron-forward"></ion-icon>
      </button>
      <a href="#" className="hero-btn has-after">
        <img src="./images/conocenos.png" width="48" height="48" alt="booking icon" />
        <span className="label-2 text-center span">Conocenos</span>
      </a>
    </section>
  );
}

export default HeroSlider;