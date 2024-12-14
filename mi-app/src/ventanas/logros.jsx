import React, { useEffect, useState } from "react";
import CardL from "../components/CardL"; // Importa el nuevo componente
import axios from "axios";
import "./logros.css";
import "../components/CardDocentes.css";
import CardDocentes from "../components/CardDocentes";
import "../ventanas/logros.css";
import "../styles/CardL.css";



const NuevaPagina = () => {
  const [logros, setLogros] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLogros = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/logros');
        setLogros(response.data);
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
    <div className="nueva-pagina_logro dark:bg-gray-900 dark:text-white">
      <div className="logro-banner">
        <div className="logro-overlay">
          <h1 className="logro-title">Logros</h1>
        </div>
      </div>
      <main className="contenido_logro">
        <h1-L className="titulo-principal_logro">
          ¡La carrera de derecho tiene los siguientes enorgullecentes logros para la universidad!
        </h1-L>
        <section className="logros_logro">
          <div className="tarjetas_logro">
            {error ? (
              <p-L>{error}</p-L>
            ) : logros.length > 0 ? (
              logros.map((logro) => (
                <CardL
                  key={logro._id}
                  title={logro.titulo} 
                  description={
                    <>
                      <p-L className="logro-fecha">
                        Fecha: {new Date(logro.fecha).toLocaleDateString()}
                      </p-L>
                      <p-L className="logro-categoria">
                        Categoría: {logro.categoria}
                      </p-L>
                      <p-L className="logro-descripcion">{logro.descripcion}</p-L>
                    </>
                  }
                  icon="🏆"
                />
              ))
            ) : (
              <p-L>No hay logros disponibles.</p-L>
            )}
          </div>
        </section>
        <section className="estudiantes-destacados">
          <h1-L>Top 3 Estudiantes Destacados</h1-L>
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