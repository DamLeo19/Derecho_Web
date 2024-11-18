import React from "react";
import Header from "../components/header";
import './logros.css'

const NuevaPagina = () => {
  const logros = [
    {
      titulo: "Logro en la comunidad",
      contenido: "Este logro fue reconocido por su impacto social en la región.",
    },
    {
      titulo: "Reconocimiento académico",
      contenido: "Por mantener un alto estándar en los procesos de aprendizaje.",
    },
    {
      titulo: "Innovación jurídica",
      contenido: "Por aportar soluciones innovadoras a problemas legales complejos.",
    },
  ];

  const estudiantesDestacados = [
    { nombre: "Ana Pérez", descripcion: "Especialista en derecho ambiental." },
    { nombre: "Carlos Gómez", descripcion: "Reconocido por sus investigaciones en derechos humanos." },
    { nombre: "Laura Torres", descripcion: "Excelencia en derecho corporativo." },
  ];

  return (
    <div className="nueva-pagina">
      <Header />
      <main className="contenido">
        <h1 className="titulo-principal">
          La carrera de derecho tiene los siguientes enorgullecentes logros para la universidad!!
        </h1>
        <section className="logros">
          <div className="tarjetas">
            {logros.map((logro, index) => (
              <div key={index} className="tarjeta">
                <div className="tarjeta-frente">
                  <h3>{logro.titulo}</h3>
                </div>
                <div className="tarjeta-reverso">
                  <p>{logro.contenido}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="estudiantes-destacados">
          <h2>Top 3 Estudiantes Destacados</h2>
          <ul>
            {estudiantesDestacados.map((estudiante, index) => (
              <li key={index} className="estudiante">
                <h3>{estudiante.nombre}</h3>
                <p>{estudiante.descripcion}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default NuevaPagina;
