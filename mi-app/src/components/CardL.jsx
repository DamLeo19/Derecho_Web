import React from "react";
import "../styles/CardL.css";

const CardL = ({ title, description, icon, imageUrl, isReversed }) => {
  return (
    <div className={`card-logro ${isReversed ? "card-reverse" : ""}`}>
      {/* Imagen fuera del recuadro */}
      <div className="card-image">
        <img src={imageUrl || "https://img.freepik.com/vector-premium/logro-equipo-trabajo-equipo-colaborar-trabajar-juntos-lograr-objetivo-comercial-ganar-premio-o-exito-asociacion-o-cooperar-concepto-equipo-negocios-personas-celebran-ayudar-llevar-gran-trofeo-ganador_212586-1811.jpg"} alt="Logro" />
      </div>
      {/* Texto dentro del recuadro */}
      <div className="card-content">
        <h2 className="card-title">
          {icon} {title}
        </h2>
        <div className="card-description">{description}</div>
      </div>
    </div>
  );
};

export default CardL;