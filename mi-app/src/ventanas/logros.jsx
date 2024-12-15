import React, { useEffect, useState } from "react";
import CardL from "../components/CardL"; // Componente reutilizable
import Editar from "../components/Editar"; // Importa el componente Editar
import axios from "axios";
import "./logros.css";
import "../components/CardDocentes.css";
import CardDocentes from "../components/CardDocentes";
import "../ventanas/logros.css";
import "../styles/CardL.css";

const NuevaPagina = () => {
  const [logros, setLogros] = useState([]);
  const [estudiantes, setEstudiantes] = useState([]);
  const [errorLogros, setErrorLogros] = useState(null);
  const [errorEstudiantes, setErrorEstudiantes] = useState(null);

  useEffect(() => {
    const fetchLogros = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/logros");
        setLogros(response.data);
      } catch (error) {
        setErrorLogros("No se pudieron obtener los logros.");
        console.error("Error al obtener los logros:", error);
      }
    };

    fetchLogros();
  }, []);

  useEffect(() => {
    const fetchEstudiantes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/estudiantes");
        setEstudiantes(response.data);
      } catch (error) {
        setErrorEstudiantes("No se pudieron obtener los estudiantes destacados.");
        console.error("Error al obtener los estudiantes destacados:", error);
      }
    };

    fetchEstudiantes();
  }, []);

  return (
    <div className="nueva-pagina_logro dark:bg-gray-900 dark:text-white">
      <div className="logro-banner">
        <div className="logro-overlay">
          <h1 className="logro-title">Logros</h1>
        </div>
      </div>
      <main className="contenido_logro">
        {/* Contenedor del título y botón de edición */}
        <div className="titulo-con-editar">
          <h1-L className="titulo-principal_logro">
            ¡La carrera de derecho tiene los siguientes enorgullecentes logros para la universidad!
          </h1-L>
          <Editar data="Contenido editable relacionado con logros" />
        </div>

        <section className="logros_logro">
          <div className="tarjetas_logro">
            {errorLogros ? (
              <p>{errorLogros}</p>
            ) : logros.length > 0 ? (
              logros.map((logro) => (
                <CardL
                  key={logro._id}
                  title={logro.titulo}
                  description={
                    <>
                      <p className="logro-fecha">
                        Fecha: {new Date(logro.fecha).toLocaleDateString()}
                      </p>
                      <p className="logro-categoria">
                        Categoría: {logro.categoria}
                      </p>
                      <p className="logro-descripcion">{logro.descripcion}</p>
                    </>
                  }
                  imageUrl={logro.imagen}
                  icon="🏆"
                />
              ))
            ) : (
              <p>No hay logros disponibles.</p>
            )}
          </div>
        </section>

        <section className="estudiantes-destacados">
          <h1>Top Estudiantes Destacados</h1>
          <div className="tarjetas-estudiantes">
            {errorEstudiantes ? (
              <p>{errorEstudiantes}</p>
            ) : estudiantes.length > 0 ? (
              estudiantes.map((estudiante, index) => (
                <div className="tarjeta-estudiante-con-indicador" key={index}>
                  <span className="indicador">{`${index + 1}°`}</span>
                  <CardDocentes
                    title={estudiante.nombre}
                    description={
                      <>
                        <p>Promedio: {estudiante.promedio}</p>
                        <p>Semestre: {estudiante.semestre}</p>
                        <p>Descripción: {estudiante.descripcion}</p>
                      </>
                    }
                    imageUrl={
                      estudiante.imagen ||
                      "https://img.freepik.com/vector-premium/logro-equipo-trabajo-equipo-colaborar-trabajar-juntos-lograr-objetivo-comercial-ganar-premio-o-exito-asociacion-o-cooperar-concepto-equipo-negocios-personas-celebran-ayudar-llevar-gran-trofeo-ganador_212586-1811.jpg"
                    }
                  />
                </div>
              ))
            ) : (
              <p>No hay estudiantes destacados disponibles.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default NuevaPagina;
