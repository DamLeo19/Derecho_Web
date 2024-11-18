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
    slidesToShow: 3,
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
    },
    {
      img: "https://i0.wp.com/lpz.ucb.edu.bo/wp-content/uploads/2023/01/web-Acreditada-SUB.jpg?resize=700%2C700&ssl=1",
      title: "ACREDITADO EN LA SUB",
      details: "DETALLES"
    },
    // Agrega más acreditaciones según sea necesario
  ];

  return (
    <section className="section service bg-black-10 text-center" aria-label="service">
      <div className="container">
        <p className="section-subtitle label-2">RECONOCIMIENTOS</p>
        <h2 className="headline-1 section-title">Tenemos las siguientes acreditaciones</h2>
        <p className="section-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the
          industry's standard dummy text ever.
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
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default AccreditationSection;