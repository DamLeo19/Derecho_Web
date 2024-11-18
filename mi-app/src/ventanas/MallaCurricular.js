// src/ventanas/MallaCurricular.js
import React, { useState } from 'react';
import Header from '../components/header.jsx';
import Footer from '../components/Footer.jsx';
import '../components/MallaCurricular.css';

const materias = [
  { id: 'DER-111', nombre: 'Teoría del Estado', semestre: 1, req: [], habilita: ['DER-121', 'DER-124'] },
  { id: 'DER-112', nombre: 'Potestad Penal y Teoría del Delito', semestre: 1, req: [], habilita: ['DER-122'] },
  { id: 'DER-113', nombre: 'Instituciones del Derecho Romano', semestre: 1, req: [], habilita: ['DER-123'] },
  { id: 'DER-114', nombre: 'Teoría General del Derecho', semestre: 1, req: [], habilita: ['DER-125', 'DER-135'] },
  { id: 'DER-126', nombre: 'Metodología e Investigación Jurídica', semestre: 1, req: [], habilita: [] },
  { id: 'FHC-140', nombre: 'Formación Humano Cristiana I', semestre: 1, req: [], habilita: ['FHC-240'] },
  { id: 'CAR-185', nombre: 'Pensamiento Crítico', semestre: 1, req: [], habilita: ['CAR-189'] },
  { id: 'DER-121', nombre: 'Derecho Constitucional', semestre: 2, req: ['DER-111'], habilita: ['DER-133', 'DER-253'] },
  { id: 'DER-122', nombre: 'Derecho Penal I', semestre: 2, req: ['DER-112'], habilita: ['DER-132', 'DER-263'] },
  { id: 'DER-125', nombre: 'Derecho y Ley Natural', semestre: 2, req: ['DER-114'], habilita: ['DER-134', 'DER-246'] },
  { id: 'DER-123', nombre: 'Sujetos del Derecho', semestre: 2, req: ['DER-113'], habilita: ['DER-131', 'DER-265'] },
  { id: 'CAR-189', nombre: 'Epistemología', semestre: 2, req: ['CAR-185'], habilita: [] },
  { id: 'DER-124', nombre: 'Pluralismo Jurídico', semestre: 2, req: ['DER-111'], habilita: [] },
  { id: 'DER-133', nombre: 'Derecho Constitucional Orgánico', semestre: 3, req: ['DER-121'], habilita: ['DER-242', 'DER-253', 'DER-266'] },
  { id: 'DER-132', nombre: 'Derecho Penal II', semestre: 3, req: ['DER-122'], habilita: ['DER-263'] },
  { id: 'DER-134', nombre: 'Filosofía Jurídica', semestre: 3, req: ['DER-125'], habilita: ['DER-244', 'DER-245'] },
  { id: 'DER-135', nombre: 'Derecho Procesal', semestre: 3, req: ['DER-114'], habilita: ['DER-252', 'DER-254', 'DER-255', 'DER-256'] },
  { id: 'DER-131', nombre: 'Bienes y Derechos Reales', semestre: 3, req: ['DER-123'], habilita: ['DER-241', 'DER-251'] },
  { id: 'DER-242', nombre: 'Derecho Administrativo y Derecho Autonómico', semestre: 4, req: ['DER-133'], habilita: ['DER-254'] },
  { id: 'DER-243', nombre: 'Derecho Internacional Público', semestre: 4, req: ['DER-111'], habilita: ['DER-381', 'DER-383'] },
  { id: 'DER-244', nombre: 'Interpretación Jurisprudencial', semestre: 4, req: ['DER-134'], habilita: [] },
  { id: 'DER-245', nombre: 'Lógica y Argumentación Jurídica', semestre: 4, req: ['DER-134'], habilita: [] },
  { id: 'DER-241', nombre: 'Derecho de las Obligaciones', semestre: 4, req: ['DER-123', 'DER-131'], habilita: ['DER-262'] },
  { id: 'DER-246', nombre: 'Derecho Eclesiástico y Canónico', semestre: 4, req: ['DER-125'], habilita: [] },
  { id: 'DER-254', nombre: 'Derecho Procesal Administrativo', semestre: 5, req: ['DER-242'], habilita: ['DER-372'] },
  { id: 'DER-252', nombre: 'Derecho del Trabajo y Procesal Laboral', semestre: 5, req: ['DER-135'], habilita: ['DER-264'] },
  { id: 'DER-256', nombre: 'Estrategias Probatorias y Metodología de Audiencia', semestre: 5, req: ['DER-135'], habilita: ['DER-371'] },
  { id: 'DER-255', nombre: 'Medios Alternativos de Solución de Conflictos', semestre: 5, req: ['DER-135'], habilita: [] },
  { id: 'DER-251', nombre: 'Contratos Civiles', semestre: 5, req: ['DER-131'], habilita: ['DER-261'] },
  { id: 'FHC-240', nombre: 'Formación Humano Cristiana II', semestre: 5, req: ['FHC-140'], habilita: ['FHC-340'] },
  { id: 'DER-253', nombre: 'Derecho Procesal Constitucional', semestre: 5, req: ['DER-133'], habilita: [] },
  { id: 'DER-264', nombre: 'Derecho de la Seguridad Social y Procesal', semestre: 6, req: ['DER-252'], habilita: [] },
  { id: 'DER-265', nombre: 'Derecho de la Familia y Procedimientos', semestre: 6, req: ['DER-123'], habilita: ['DER-373'] },
  { id: 'DER-263', nombre: 'Derecho Procesal Penal', semestre: 6, req: ['DER-132'], habilita: [] },
  { id: 'DER-267', nombre: 'Ética Profesional y Deontología Jurídica', semestre: 6, req: ['DER-134'], habilita: ['DER-276'] },
  { id: 'DER-261', nombre: 'Derecho a las Sucesiones', semestre: 6, req: ['DER-251'], habilita: [] },
  { id: 'DER-262', nombre: 'Derecho Comercial I', semestre: 6, req: ['DER-241'], habilita: ['DER-374'] },
  { id: 'DER-266', nombre: 'Derecho Ambiental y Agrario', semestre: 6, req: ['DER-133'], habilita: [] },
  { id: 'DER-373', nombre: 'Derecho NNA, SPA y Mujer', semestre: 7, req: ['DER-265'], habilita: [] },
  { id: 'DER-276', nombre: 'Derechos Humanos', semestre: 7, req: ['DER-267'], habilita: [] },
  { id: 'DER-372', nombre: 'Derecho Tributario y Aduanero', semestre: 7, req: ['DER-254'], habilita: [] },
  { id: 'DER-371', nombre: 'Derecho Procesal Civil', semestre: 7, req: ['DER-256'], habilita: [] },
  { id: 'DER-374', nombre: 'Derecho Comercial II', semestre: 7, req: ['DER-262'], habilita: [] },
  { id: 'FHC-340', nombre: 'Formación Humano Cristiana III', semestre: 7, req: ['FHC-240'], habilita: [] },
  { id: 'DER-382', nombre: 'Complementaria de la Carrera I', semestre: 7, req: [], habilita: [] },
  { id: 'DER-381', nombre: 'Derecho Internacional Privado', semestre: 8, req: ['DER-243'], habilita: [] },
  { id: 'DER-375', nombre: 'Complementaria de la Carrera II', semestre: 8, req: [], habilita: [] },
  { id: 'DER-383', nombre: 'Clínica Jurídica y Práctica Preprofesional', semestre: 8, req: ['DER-243'], habilita: [] },
  { id: 'DER-384', nombre: 'Taller de Grado I', semestre: 8, req: ['DER-126'], habilita: ['DER-391'] },
  { id: 'DER-391', nombre: 'Taller de Grado II', semestre: 9, req: ['DER-384'], habilita: [] },
];

function MallaCurricular() {
  const [selectedMateria, setSelectedMateria] = useState(null);

  const handleClick = (id) => {
    const materia = materias.find(m => m.id === id);
    if (selectedMateria === id) {
      setSelectedMateria(null);
      if (materia.req.length > 0) {
        materia.req.forEach(reqId => {
          document.getElementById(reqId).classList.remove('habilita');
        });
      }
    } else {
      if (selectedMateria) {
        const prevMateria = materias.find(m => m.id === selectedMateria);
        if (prevMateria.req.length > 0) {
          prevMateria.req.forEach(reqId => {
            document.getElementById(reqId).classList.remove('habilita');
          });
        }
      }
      setSelectedMateria(id);
      if (materia.req.length > 0) {
        materia.req.forEach(reqId => {
          const reqElement = document.getElementById(reqId);
          reqElement.classList.add('habilita');
          reqElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
      }
    }
  };

  const semestres = [...new Set(materias.map(m => m.semestre))];

  return (
    <div>
      <Header />
      <div className="malla-curricular">
        <div className="leyenda">
          <p><span className="leyenda-verde"></span> Materias que son requisitos para la materia seleccionada</p>
          <p><span className="leyenda-rojo"></span> Materia sin requisitos</p>
        </div>
        <a href="/DER-2024-ok.pdf" download className="btn-download">Descargar Malla Curricular</a>
        {semestres.map(semestre => (
          <div key={semestre} className="semestre">
            <h2>Semestre {semestre}</h2>
            <div className="materias">
              {materias.filter(m => m.semestre === semestre).map(materia => (
                <div
                  key={materia.id}
                  id={materia.id}
                  className={`materia ${selectedMateria === materia.id ? 'selected' : ''} ${selectedMateria === materia.id && materia.req.length === 0 ? 'no-habilita' : ''}`}
                  onClick={() => handleClick(materia.id)}
                >
                  <h3>{materia.nombre}</h3>
                  <p>{materia.id}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default MallaCurricular;