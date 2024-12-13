import React, { useEffect, useState } from "react";
import CardDocentes from "../components/CardDocentes";
import axios from "axios";
import "./logros.css";
import "../components/CardDocentes.css";

const NuevaPagina = () => {
  const [logros, setLogros] = useState([]);
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    // Llamada a la API para obtener los logros
    const fetchLogros = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/logros');
        setLogros(response.data); // Guardar los logros en el estado
      } catch (error) {
        setError('No se pudieron obtener los logros.');
        console.error('Error al obtener los logros:', error);
      }
    };

    fetchLogros();
  }, []);

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
            {error ? (
              <p>{error}</p> // Mostrar mensaje de error si no se pueden obtener los logros
            ) : logros.length > 0 ? (
              logros.map((logro) => (
                <div key={logro._id} className="tarjeta">
                  <div className="tarjeta-inner">
                    <div className="tarjeta-frente">
                      <h3>{logro.titulo}</h3>
                    </div>
                    <div className="tarjeta-reverso">
                      <p>{logro.descripcion}</p>
                      <p><strong>Categoría:</strong> {logro.categoria}</p>
                      <p><strong>Fecha:</strong> {new Date(logro.fecha).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="trofeo">🏆</div>
                </div>
              ))
            ) : (
              <p>No hay logros disponibles.</p> // Mostrar mensaje si no hay logros
            )}
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
