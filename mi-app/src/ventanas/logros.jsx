import React from "react";
import CardDocentes from "../components/CardDocentes";
import "./logros.css";
import "../components/CardDocentes.css";

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
    {
      nombre: "Ana Pérez",
      descripcion: "Especialista en derecho ambiental.",
      imagen: "https://i0.wp.com/lpz.ucb.edu.bo/wp-content/uploads/2024/11/Primera-Foto.jpg?resize=800%2C648",
    },
    {
      nombre: "Carlos Gómez",
      descripcion: "Reconocido por sus investigaciones en derechos humanos.",
      imagen: "https://i0.wp.com/lpz.ucb.edu.bo/wp-content/uploads/2024/11/Primera-Foto.jpg?resize=800%2C648",
    },
    {
      nombre: "Laura Torres",
      descripcion: "Excelencia en derecho corporativo.",
      imagen: "https://i0.wp.com/lpz.ucb.edu.bo/wp-content/uploads/2024/11/Primera-Foto.jpg?resize=800%2C648",
    },
  ];

  return (
    <div className="nueva-pagina dark:bg-white dark:text-black">
      <div className="logros-banner">
        <div className="logros-overlay">
          <h1 className="logros-title">Logros</h1>
        </div>
      </div>
      <main className="contenido">
        <h1 className="titulo-principal">
          ¡La carrera de derecho tiene los siguientes enorgullecentes logros para la universidad!
        </h1>
        <section className="logros">
          <div className="tarjetas">
            {logros.map((logro, index) => (
              <div key={index} className="tarjeta">
                {/* Contenedor interno para el efecto 3D */}
                <div className="tarjeta-inner">
                  <div className="tarjeta-frente">
                    <h3>{logro.titulo}</h3>
                  </div>
                  <div className="tarjeta-reverso">
                    <p>{logro.contenido}</p>
                  </div>
                </div>
                {/* Trofeo al lado derecho */}
                <div className="trofeo">🏆</div>
              </div>
            ))}
          </div>
        </section>
        <section className="estudiantes-destacados">
          <h1>Top 3 Estudiantes Destacados</h1>
          <div className="tarjetas-estudiantes">
            {estudiantesDestacados.map((estudiante, index) => (
              <div className="tarjeta-estudiante-con-indicador" key={index}>
                <span className="indicador">{`${index + 1}°`}</span>
                <CardDocentes
                  title={estudiante.nombre}
                  description={estudiante.descripcion}
                  imageUrl={estudiante.imagen}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default NuevaPagina;
