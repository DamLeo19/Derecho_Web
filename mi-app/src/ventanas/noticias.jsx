import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import '../styles/noticias.css'

function Noticias() {
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        const fetchedNoticias = [
            { id: 1, titulo: "Noticia 1", descripcion: "Descripción de la noticia " },
            { id: 2, titulo: "Noticia 2", descripcion: "Descripción de la noticia " },
            { id: 3, titulo: "Noticia 3", descripcion: "Descripción de la noticia " },
            { id: 4, titulo: "Noticia 4", descripcion: "Descripción de la noticia " },
            { id: 5, titulo: "Noticia 5", descripcion: "Descripción de la noticia " },
            { id: 6, titulo: "Noticia 6", descripcion: "Descripción de la noticia " },
            { id: 7, titulo: "Noticia 7", descripcion: "Descripción de la noticia " },
            { id: 8, titulo: "Noticia 8", descripcion: "Descripción de la noticia " },
            { id: 9, titulo: "Noticia 9", descripcion: "Descripción de la noticia " },
            { id: 10, titulo: "Noticia 10", descripcion: "Descripción de la noticia" },

        ];
        setNoticias(fetchedNoticias);
    }, []);

    return (
        <>
            <Header />
            <div className="banner">
                <span className="banner-text">Sección de Noticias</span>
            </div>
            <div className="cards-container">
                {noticias.map((noticia) => (
                    <div className="card" key={noticia.id}>
                        <h3>{noticia.titulo}</h3>
                        <p>{noticia.descripcion}</p>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}

export default Noticias;
