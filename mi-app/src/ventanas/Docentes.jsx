// Docentes.js

import React from "react";
import Card from "../components/CardDocentes.js";
import { motion } from "framer-motion";
import './Docentes.css';

const Docentes = () => {

  const directorData = {
    title: "PhD. Felipe Bernardo Cordero Cervantes",
    description: "Director de carrera",
    imageUrl: "https://i0.wp.com/lpz.ucb.edu.bo/wp-content/uploads/2024/01/DSC_1398.jpg?resize=1000%2C1000&ssl=1",
    buttonText: "Ver más"
  };

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
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
        viewport={{ once: true }}
      >
        <div className="director-container">
          <h2 className=" dark:text-black">Director de Carrera</h2>
          <div className="director-card-container">
            <Card
              title={directorData.title}
              description={directorData.description}
              imageUrl={directorData.imageUrl}
            />
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
          <h2 className=" dark:text-black">Docentes de Tiempo Completo</h2>
          <div className="tiempo-completo-card-container">
            <Card
              title={"Ivette Brenda Miranda Parra"}
              description={"Docente Tiempo Completo"}
              imageUrl={"https://i0.wp.com/lpz.ucb.edu.bo/wp-content/uploads/2022/07/ivette.jpg?resize=700%2C700&ssl=1"}
            />
            <Card
              title={"Carlos Ricardo Crespo Torrico"}
              description={"Encargado de Gestión Académica y del Observatorio Jurídico"}
              imageUrl={"https://i0.wp.com/ucblpz.com/wp-content/uploads/2019/02/Carlos-Crespo.jpg?w=1080&ssl=1"}
            />
            <Card
              title={"Ana Paola Lorberg Romero"}
              description={"Encargada de Postgrado"}
              imageUrl={"https://i0.wp.com/ucblpz.com/wp-content/uploads/2019/02/Ana-Paola-Lorverg.jpg?w=1080&ssl=1"}
            />
            <Card
              title={"Oscar Millán Terán"}
              description={"Encargado de la Clínica Jurídica"}
              imageUrl={"https://i0.wp.com/ucblpz.com/wp-content/uploads/2019/02/Oscar-Millan.jpg?w=1080&ssl=1"}
            />
            <Card
              title={"PhD. Leonardo Villafuerte Philippsborn"}
              description={"Encargado de investigación y de la Revista Law Review"}
              imageUrl={"https://i0.wp.com/ucblpz.com/wp-content/uploads/2019/02/Leonardo-Villafuerte.jpg?w=1080&ssl=1"}
            />
            <Card
              title={"Emilio Barea Medrano"}
              description={"Director de carrera (2013 – 2017 y 2018 – 2021)"}
              imageUrl={"https://i0.wp.com/lpz.ucb.edu.bo/wp-content/uploads/2023/03/Emilio-Barea-1.jpg?resize=908%2C909&ssl=1"}
            />
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
          <h2 className=" dark:text-black">Docentes de Medio Tiempo</h2>
          <div className="medio-tiempo-card-container">
            <Card
              title={"Emma Nogales de Santiváñez"}
              description={"Docente medio tiempo"}
              imageUrl={"https://i0.wp.com/ucblpz.com/wp-content/uploads/2020/01/Emma-Nogales.jpg?w=1080&ssl=1"}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Docentes;