import React, { useRef } from "react";
import "../styles/CardL.css"; // Asegúrate de tener el CSS importado

const VideoCard = ({ title, description }) => {
  const videoRef = useRef(null);

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.currentTime >= 18) {
      videoRef.current.pause(); // Detenemos el video a los 18 segundos
    }
  };

  return (
    <div className="card-container">
      <div className="video-card">
        <div className="video-wrapper">
          {/* Video dinámico */}
          <video
            ref={videoRef}
            className="video-content"
            autoPlay
            muted
            onTimeUpdate={handleTimeUpdate} // Se ejecuta cada vez que el tiempo de reproducción cambia
            src="/images/logro.mp4" // Ruta al video en la carpeta public
          >
            Tu navegador no soporta el video.
          </video>
        </div>

        {/* Capa de detalles que aparece al pasar el cursor */}
        <div className="details-overlay">
          <p className="details-text">
            {description || "Descripción no disponible"} {/* Descripción dinámica */}
          </p>
        </div>

        {/* Título con fondo negro */}
        <div className="card-title">
          <p>{title || "Título no disponible"}</p> {/* Título dinámico */}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
