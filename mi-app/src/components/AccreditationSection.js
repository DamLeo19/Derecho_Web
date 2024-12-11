import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './AccreditationSection.css';

const AccreditationSection = () => {
  const [acreditaciones, setAcreditaciones] = useState([]);

  // Cargar acreditaciones desde la API
  useEffect(() => {
    const fetchAcreditaciones = async () => {
      try {
        // Aquí usamos la ruta que tienes definida en el backend para obtener las acreditaciones
        const response = await axios.get('http://localhost:5000/api/acreditaciones');
        setAcreditaciones(response.data);
      } catch (error) {
        console.error('Error al cargar las acreditaciones:', error);
      }
    };

    fetchAcreditaciones();
  }, []);

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

  return (
    <section className="section service bg-black-10 text-center dark:bg-white dark:text-black" aria-label="service">
      <div className="container dark:bg-white dark:text-black">
        <p className="section-subtitle label-2 dark:bg-white dark:text-black">RECONOCIMIENTOS</p>
        <h2 className="headline-1 section-title dark:bg-white dark:text-black">Tenemos las siguientes acreditaciones</h2>
        <p className="section-text dark:bg-white dark:text-black">
          Acreditaciones de la carrera ofrecidas por
        </p>
        <Slider {...settings}>
          {acreditaciones.map((acreditacion, index) => (
            <div key={index} className="service-card dark:bg-gray-100 dark:text-black">
              <figure className="card-banner img-holder" style={{ '--width': 285, '--height': 336 }}>
                <img
                  src={acreditacion.imagen} // Usando el campo "imagen" de tu modelo
                  width="285"
                  height="336"
                  loading="lazy"
                  alt={acreditacion.nombre} // Usando el campo "nombre" de tu modelo
                  className="img-cover"
                />
              </figure>
              <div className="card-content dark:bg-gray-100 dark:text-black">
                <h3 className="title-4 card-title dark:bg-gray-100 dark:text-black">
                  {acreditacion.nombre} {/* Aquí mostramos el nombre de la acreditación */}
                </h3>
                <a href="#" className="btn-text hover-underline label-2">
                  Detalles
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
