import React, { useEffect, useState } from "react";
import Card from "../components/CardDocentes.js";
import { motion } from "framer-motion";
import './Docentes_module.css';

const Docentes = () => {
  const [directores, setDirectores] = useState([]);
  const [tiempoCompleto, setTiempoCompleto] = useState([]);
  const [medioTiempo, setMedioTiempo] = useState([]);

  useEffect(() => {
    // Función para cargar los docentes desde la API
    const fetchDocentes = async (cargo, setData) => {
      try {
        const response = await fetch('http://localhost:5000/api/docentes/cargo?cargo=' + encodeURIComponent(cargo));
        if (!response.ok) {
          throw new Error(`Error al obtener los docentes de ${cargo}`);
        }
        const data = await response.json();
        console.log(data[0].imagenURL)
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    // Cargar docentes por cargo
    fetchDocentes("Director de carrera", setDirectores);
    fetchDocentes("Tiempo completo", setTiempoCompleto);
    fetchDocentes("Medio tiempo", setMedioTiempo);
  }, []);

  return (
    <div className="dark:bg-white">
      <div className="docentes-banner">
        <div className="docentes-overlay">
          <h1 className="docentes-title">Docentes</h1>
        </div>
      </div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
        }}
        initial="hidden"
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        viewport={{ once: true }}
      >
        <div className="director-container">
          <h2 className="dark:text-black">Director de Carrera</h2>
          <div className="director-card-container">
            {directores.map((docente) => (
              <Card
                key={docente._id}
                title={docente.nombre}
                description={docente.descripcion}
                imageUrl={docente.imagenURL || "https://via.placeholder.com/150"}
              />
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
        }}
        initial="hidden"
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        viewport={{ once: true }}
      >
        <div className="tiempo-completo-container">
          <h2 className="dark:text-black">Docentes de Tiempo Completo</h2>
          <div className="tiempo-completo-card-container">
            {tiempoCompleto.map((docente) => (
              <Card
                key={docente._id}
                title={docente.nombre}
                description={docente.descripcion}
                imageUrl={docente.imagenURL || "https://via.placeholder.com/150"}
              />
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
        }}
        initial="hidden"
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        viewport={{ once: true }}
      >
        <div className="medio-tiempo-container">
          <h2 className="dark:text-black">Docentes de Medio Tiempo</h2>
          <div className="medio-tiempo-card-container">
            {medioTiempo.map((docente) => (
              <Card
                key={docente._id}
                title={docente.nombre}
                description={docente.descripcion}
                imageUrl={docente.imagenURL || "https://via.placeholder.com/150"}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Docentes;