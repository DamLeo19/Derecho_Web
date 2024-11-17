import React, { useState } from "react";
import Modal from "./ModalDocentes.jsx"
import "./CardDocentes.css";

const CardDocentes = ({ title, description, imageUrl}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <article className="card">
      <img
        className="card__background"
        src={imageUrl}
        alt={title}
        width="1920"
        height="2193"
      />
      <div className="card__content flow">
        <div className="card__content--container flow">
          <h2 className="card__title">{title}</h2>
          <p className="card__description">{description}</p>
        </div>
        <button className="card__button" onClick={() => setIsOpen(true)}>Ver más</button>
        {isOpen && <Modal onClose={() => setIsOpen(false)} />}
      </div>
    </article>
  );
};

export default CardDocentes;
