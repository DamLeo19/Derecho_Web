// src/components/Modal.js
import React from 'react';
import './Modal.css'; // Importar los estilos del modal

function Modal({ closeModal }) {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeModal}>&times;</button>
        <iframe src="/campus.pdf" title="Mapa del Campus" className="modal-iframe"></iframe>
        <a href="/campus.pdf" download className="btn-download">Descargar Mapa del Campus</a>
      </div>
    </div>
  );
}

export default Modal;