import React, { useEffect, useState } from "react";
import '../styles/noticias.css';

function Noticias() {
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        const fetchNoticias = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/noticias'); // URL de tu backend
                if (!response.ok) {
                    throw new Error('Error al obtener noticias');
                }
                const data = await response.json();
                setNoticias(data); // Actualiza el estado con las noticias del backend
            } catch (error) {
                console.error("Error al obtener noticias:", error);
            }
        };

        fetchNoticias();
    }, []);

    return (
        <>
            <div className="banner" >
                <span className="banner-text">Sección de Noticias</span>
            </div>
            <div className="cards-container dark:bg-white dark:text-black">
                {noticias.map((noticia) => (
                    <div className="card dark:bg-white dark:text-black" key={noticia._id}>
                        <h3>{noticia.nombre}</h3> {/* Nombre de la noticia */}
                        <p><strong>Fecha:</strong> {new Date(noticia.fecha).toLocaleDateString()}</p> {/* Fecha formateada */}
                        <p>{noticia.descripcion}</p> {/* Descripción */}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Noticias;