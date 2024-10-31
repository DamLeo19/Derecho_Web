import React from 'react';

function SpecialDishSection() {
  return (
    <section className="special-dish text-center" aria-labelledby="dish-label">
      <div className="special-dish-banner">
        <img
          src="./assets/images/special-dish-banner.jpg"
          width="940"
          height="900"
          loading="lazy"
          alt="special dish"
          className="img-cover"
        />
      </div>
      <div className="special-dish-content bg-black-10">
        <div className="container">
          <img
            src="./assets/images/badge-1.png"
            width="28"
            height="41"
            loading="lazy"
            alt="badge"
            className="abs-img"
          />
          <p className="section-subtitle label-2">¿Conoces nuestra clinica juridica?</p>
          <h2 className="headline-1 section-title">Clinica Juridica</h2>
          <p className="section-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since an unknown printer took a galley of type.
          </p>
          <a href="javascript:void(0);" className="btn btn-primary">
            <span className="text text-1">DETALLES</span>
            <span className="text text-2" aria-hidden="true">
              DETALLES
            </span>
          </a>
        </div>
      </div>
      <img
        src="./assets/images/shape-4.png"
        width="179"
        height="359"
        loading="lazy"
        alt=""
        className="shape shape-1"
      />
      <img
        src="./assets/images/shape-9.png"
        width="351"
        height="462"
        loading="lazy"
        alt=""
        className="shape shape-2"
      />
    </section>
  );
}

export default SpecialDishSection;
