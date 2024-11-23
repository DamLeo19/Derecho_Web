import React from 'react';
import Equilibrio from '../images/equilibrio.png';
import Ley from '../images/ley.png';
import Diosa from '../images/tribunal-de-justicia.png';

function SpecialDishSection() {
  return (
    <section className="special-dish text-center" aria-labelledby="dish-label">
      <div className="special-dish-banner">
        <img
          src="https://derechoconstitucional.uexternado.edu.co/wp-content/uploads/sites/66/2023/08/clinica_juridica-744x462-1-jpg.webp"
          width="940"
          height="900"
          loading="lazy"
          alt="clinicajuridica"
          className="img-cover"
        />
      </div>
      <div className="special-dish-content bg-black-10">
        <div className="container">
          <img
            src={Ley}
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
        src= {Equilibrio}
        width="179"
        height="359"
        loading="lazy"
        alt=""
        className="shape shape-1"
      />
      <img
        src={Diosa}
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
