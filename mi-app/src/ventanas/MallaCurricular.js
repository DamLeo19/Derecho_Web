// src/ventanas/MallaCurricular.js
import React, { useState, useEffect } from 'react';
import '../components/MallaCurricular.css';
import axios from 'axios';

function MallaCurricular() {
  const [materias, setMaterias] = useState([]);
  const [selectedMateria, setSelectedMateria] = useState(null);

  // Cargar las materias desde el backend
  useEffect(() => {
    const fetchMaterias = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/materias');
        setMaterias(response.data);
      } catch (error) {
        console.error('Error al obtener materias:', error);
      }
    };
    fetchMaterias();
  }, []);

  const handleClick = (codigo) => {
    const materia = materias.find(m => m.codigo === codigo);
    if (!materia) return;
    if (selectedMateria === codigo) {
      // Deseleccionar la materia
      setSelectedMateria(null);
      // Remover clases de los req y habilita de la materia deseleccionada
      if (materia.req.length > 0) {
        materia.req.forEach(reqId => {
          const reqElement = document.getElementById(reqId);
          if (reqElement) reqElement.classList.remove('habilita');
        });
      }
      if (materia.habilita.length > 0) {
        materia.habilita.forEach(habId => {
          const habElement = document.getElementById(habId);
          if (habElement) habElement.classList.remove('habilita-azul');
        });
      }
    } else {
      // Si había una materia seleccionada antes, limpiamos sus estilos
      if (selectedMateria) {
        const prevMateria = materias.find(m => m.codigo === selectedMateria);
        if (prevMateria) {
          if (prevMateria.req.length > 0) {
            prevMateria.req.forEach(reqId => {
              const reqElement = document.getElementById(reqId);
              if (reqElement) reqElement.classList.remove('habilita');
            });
          }
          if (prevMateria.habilita.length > 0) {
            prevMateria.habilita.forEach(habId => {
              const habElement = document.getElementById(habId);
              if (habElement) habElement.classList.remove('habilita-azul');
            });
          }
        }
      }

      setSelectedMateria(codigo);

      // Añadir clases a la materia seleccionada
      if (materia.req.length > 0) {
        materia.req.forEach(reqId => {
          const reqElement = document.getElementById(reqId);
          if (reqElement) {
            reqElement.classList.add('habilita');
            reqElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        });
      }
      if (materia.habilita.length > 0) {
        materia.habilita.forEach(habId => {
          const habElement = document.getElementById(habId);
          if (habElement) {
            habElement.classList.add('habilita-azul');
            habElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        });
      }
    }
  };

  // Obtener lista de semestres disponibles a partir de las materias
  const semestres = [...new Set(materias.map(m => m.semestre))].sort((a, b) => a - b);

  return (
    <div>
      <div className="malla-curricular dark:bg-white dark:text-black">
        <div className="leyenda">
          <p className='dark:text-black'><span className="leyenda-verde"></span> Materias que son requisitos para la materia seleccionada</p>
          <p className='dark:text-black'><span className="leyenda-rojo"></span> Materia sin requisitos</p>
          <p className='dark:text-black'><span className="leyenda-azul"></span> Materias que habilita la materia seleccionada</p>
        </div>
        <a href="/DER-2024-ok.pdf" download className="btn-download">Descargar Malla Curricular</a>
        {semestres.map(semestre => (
          <div key={semestre} className="semestre">
            <h2>Semestre {semestre}</h2>
            <div className="materias">
              {materias
                .filter(m => m.semestre === semestre)
                .map(materia => (
                  <div
                    key={materia.codigo}
                    id={materia.codigo}
                    className={`materia ${selectedMateria === materia.codigo ? 'selected' : ''} ${selectedMateria === materia.codigo && materia.req.length === 0 ? 'no-habilita' : ''}`}
                    onClick={() => handleClick(materia.codigo)}
                  >
                    <h3>{materia.nombre}</h3>
                    <p className='dark:text-black'>{materia.codigo}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MallaCurricular;
