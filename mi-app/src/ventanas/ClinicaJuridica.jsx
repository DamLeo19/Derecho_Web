import React, { useState, useEffect } from "react";
import './ClinicaJuridica.css';
import { motion } from "framer-motion";

const ClinicaJuridica = () => {

    const requisitos = [
        "Servicio dirigido a personas de escasos recursos.",
        "No contar con un abogado.",
        "Casos dentro de la jurisdicción de La Paz.",
        "La cuantía será valorada por el responsable de la Clínica Jurídica.",
    ];

    const acordeonData = [
        {
            title: "¿Dónde encontrarnos?",
            content: `Av. Mariscal Santa Cruz N° 2150, Edificio Esperanza, piso 7 Of. 5 y 6.`,
        },
        {
            title: "¿Cómo puedo contactarme?",
            content: `Puede enviar un correo hacia "ccareaga@ucb.edu.bo" o llamar al siguiente número: 75841214.`,
        },
        {
            title: "¿Cuáles son los horarios de atención?",
            content: `Atención de lunes a viernes de 8:30 a 16:30.`,
        },
    ];

    const [activeIndex, setActiveIndex] = React.useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Estado para detectar si es móvil
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkIsMobile(); // Verificamos inicialmente

        window.addEventListener("resize", checkIsMobile);

        return () => {
            window.removeEventListener("resize", checkIsMobile);
        };
    }, []);

    return (
        <div>
            <div className="clinica-banner">
                <div className="clinica-overlay">
                    <h1 className="clinica-title">Clínica Jurídica</h1>
                </div>
            </div>

            <div className="about-container">
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
                    <p>La Carrera de Derecho cuenta con la “Clínica Jurídica U.C.B. San Pablo”, la que se constituye en dos asignaturas obligatorias de la malla curricular de la Carrera de Derecho y a su vez en una oficina de servicio gratuito para personas de escasos recursos económicos.</p>
                </motion.div>
            </div>

            <div className="lista-container dark:bg-white dark:text-black">
                <div className="lista-title">
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 75 },
                        }}
                        initial="hidden"
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            initial={{ left: 0 }}
                            whileInView={{ left: "100%", transition: { duration: 0.5 }, ease: "easeIn" }}
                            style={{
                                height: 50,
                                position: "absolute",
                                top: 4,
                                bottom: 4,
                                left: 0,
                                right: 0,
                                background: "#cd5f2a",
                                zIndex: 20,
                            }}
                            viewport={{ once: true }}
                        ></motion.div>
                        <h2>Requisitos para la atención</h2>
                    </motion.div>
                </div>
                <ul className="lista-servicios">
                    {requisitos.map((item, index) => (
                        <motion.li
                            key={index}
                            className="lista-item"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            - {item}
                        </motion.li>
                    ))}
                </ul>
            </div>

            <motion.div
                className="clinica-content"
                initial={{ opacity: 0, x: isMobile ? 0 : -50 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 2.5 } }}
                viewport={{ amount: 0.1, once: true }}
            >
                <img
                    src="https://i0.wp.com/ucblpz.com/wp-content/uploads/2019/02/619A0994.jpg?w=1080&ssl=1"
                    alt="Imagen Clínica"
                    className="clinica-img"
                />
                <div className="clinica-text">
                    <p>
                        En esta asignatura, los estudiantes de últimos semestres, bajo la supervisión de docentes especializados, realizan práctica jurídica preprofesional, consistente en la gestión de procesos judiciales y asesoramiento jurídico.
                    </p>
                </div>
            </motion.div>

            <motion.div
                className="clinica-content"
                initial={{ opacity: 0, x: isMobile ? 0 : 100 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 2.5 } }}
                viewport={{ amount: 0.5, once: true }}
            >
                <div className="clinica-text">
                    <p>
                        La “Clínica Jurídica U.C.B. San Pablo” implementa de forma semestral el “Consultorio Jurídico Móvil”, un espacio de servicio social y aprendizaje práctico, donde los estudiantes bajo la supervisión y guía de los docentes especializados brindan asesoramiento jurídico a personas de escasos recursos económicos y que radican en zonas rurales y suburbanas del Departamento de La Paz.
                    </p>
                </div>

                <img
                    src="https://i0.wp.com/ucblpz.com/wp-content/uploads/2019/02/619A1015.jpg?w=1080&ssl=1"
                    alt="Imagen Clínica"
                    className="clinica-img"
                />
            </motion.div>

            <motion.div
                className="acordion-content"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 2.5 } }}
                viewport={{ amount: 0.5, once: true }}
            >
                <div className="accordion">
                    <h2>Preguntas Frecuentes</h2>
                    {acordeonData.map((item, index) => (
                        <div key={index} className="accordion-item">
                            <div
                                className={`accordion-title ${activeIndex === index ? "active" : ""}`}
                                onClick={() => toggleAccordion(index)}
                            >
                                <h3>{item.title}</h3>
                                <span>{activeIndex === index ? "-" : "+"}</span>
                            </div>
                            {activeIndex === index && (
                                <div className="accordion-content dark:text-black">
                                    <p>{item.content}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default ClinicaJuridica;