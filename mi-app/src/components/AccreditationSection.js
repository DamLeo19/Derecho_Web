// src/components/AccreditationSection.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './AccreditationSection.css';

const AccreditationSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const acreditaciones = [
    {
      img: "https://i0.wp.com/lpz.ucb.edu.bo/wp-content/uploads/2023/01/web-Acreditada-SUB.jpg?resize=700%2C700&ssl=1",
      title: "ACREDITADO EN LA SUB",
      details: "DETALLES"
    },
    {
      img: "https://i0.wp.com/lpz.ucb.edu.bo/wp-content/uploads/2022/07/iidea.jpg?resize=700%2C700&ssl=1",
      title: "ACREDITADO EN IIDEA",
      details: "DETALLES"
    }
  ];

  return (
    <section className="section service bg-black-10 text-center" aria-label="service">
      <div className="container">
        <p className="section-subtitle label-2">RECONOCIMIENTOS</p>
        <h2 className="headline-1 section-title">Tenemos las siguientes acreditaciones</h2>
        <p className="section-text">
        Instituto Internacional de Acreditación del Derecho.
        </p>
        <Slider {...settings}>
          {acreditaciones.map((acreditacion, index) => (
            <div key={index} className="service-card">
              <a href="#" className="has-before hover:shine">
                <figure className="card-banner img-holder" style={{ '--width': 285, '--height': 336 }}>
                  <img
                    src={acreditacion.img}
                    width="285"
                    height="336"
                    loading="lazy"
                    alt={acreditacion.title}
                    className="img-cover"
                  />
                </figure>
              </a>
              <div className="card-content">
                <h3 className="title-4 card-title">
                  <a href="#">{acreditacion.title}</a>
                </h3>
                <a href="#" className="btn-text hover-underline label-2">
                  {acreditacion.details}
                </a>
              </div>
            </div>
<<<<<<< HEAD
          </li>
          <li>
            <div className="service-card">
              <a href="#" className="has-before hover:shine">
                <figure className="card-banner img-holder" style={{ '--width': 285, '--height': 336 }}>
                  <img
                    src="https://i0.wp.com/lpz.ucb.edu.bo/wp-content/uploads/2022/07/iidea.jpg?resize=700%2C700&ssl=1"
                    width="285"
                    height="336"
                    loading="lazy"
                    alt="ACREDITADO"
                    className="img-cover"
                  />
                </figure>
              </a>
              <div className="card-content">
                <h3 className="title-4 card-title">
                  <a href="#">ACREDITADO</a>
                </h3>
                <a href="#" className="btn-text hover-underline label-2">
                  DETALLES
                </a>
              </div>
            </div>
          </li>
        </ul>
        <img
          src="./assets/images/shape-1.png"
          width="246"
          height="412"
          loading="lazy"
          alt="shape"
          className="shape shape-1 move-anim"
        />
        <img
          src="./assets/images/shape-2.png"
          width="343"
          height="345"
          loading="lazy"
          alt="shape"
          className="shape shape-2 move-anim"
        />
=======
          ))}
        </Slider>
>>>>>>> 553280d378c4d604be7abf6eaa8686f64bc3bc1c
      </div>
    </section>
  );
};

export default AccreditationSection;