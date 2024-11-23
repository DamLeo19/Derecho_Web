import React from "react";
import Header from '../components/header.jsx';
import Footer from '../components/Footer';
import Card from "../components/CardDocentes.js";
import { motion } from "framer-motion";
import './Docentes.css'; // O el nuevo archivo CSS si creaste uno específico

const CentroEstudiantes = () => {

  const miembrosData = [
    {
      title: "Salim Martinez",
      description: "Presidente del Centro de Estudiantes de Derecho.",
      imageUrl: "https://via.placeholder.com/150",
      buttonText: "Ver más"
    },
    {
      title: "Noelia Callejas",
      description: "Vicepresidente del Centro de Estudiantes de Derecho.",
      imageUrl: "https://via.placeholder.com/150",
      buttonText: "Ver más"
    },
    {
      title: "Carmen Ortiz",
      description: "Tesorería del Centro de Estudiantes de Derecho.",
      imageUrl: "https://via.placeholder.com/150",
      buttonText: "Ver más"
    },
    {
      title: "Alex Gonzales",
      description: "Secretario de deportes del Centro de Estudiantes de Derecho.",
      imageUrl: "https://via.placeholder.com/150",
      buttonText: "Ver más"
    },
    // Agrega más miembros según sea necesario
  ];

  return (
    <div className="main-container">
      <Header />
      <div className="centro-estudiantes-banner">
        <div className="centro-estudiantes-overlay">
          <h1 className="centro-estudiantes-title">Centro de Estudiantes</h1>
        </div>
      </div>
      <motion.div
        className="descripcion-centro"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Sobre el Centro de Estudiantes de Derecho</h2>
        <p>
          El Centro de Estudiantes de Derecho es una organización dedicada a representar y apoyar a los estudiantes de la carrera de Derecho. 
          Nuestro objetivo es fomentar un ambiente académico y social positivo, promoviendo actividades que enriquezcan la experiencia universitaria.
        </p>
        <p>
          Organizamos eventos, talleres y conferencias que abordan temas relevantes para el desarrollo profesional y personal de nuestros miembros. 
          Además, actuamos como un puente entre los estudiantes y la administración de la universidad para asegurar que las voces de los estudiantes sean escuchadas.
        </p>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
        }}
        initial="hidden"
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        style={{ marginTop: "2rem" }}
      >
        <div className="card-container">
          {miembrosData.map((miembro, index) => (
            <Card
              key={index}
              title={miembro.title}
              description={miembro.description}
              imageUrl={miembro.imageUrl}
            />
          ))}
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default CentroEstudiantes;