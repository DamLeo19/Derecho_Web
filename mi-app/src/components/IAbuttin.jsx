import React, { useState } from 'react';
import '../styles/IA.css';

const IAButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Botón principal */}
      <button className="button" onClick={handleClick}>
        <p className="button__text">
          <span style={{ '--index': 0 }}>I</span>
          <span style={{ '--index': 1 }}>A</span>
          <span style={{ '--index': 2 }}> </span>
          <span style={{ '--index': 3 }}>I</span>
          <span style={{ '--index': 4 }}>A</span>
        </p>

        <div className="button__circle">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="button__icon"
            width="25"
          >
            <path
              d="M12 1C11.4477 1 11 1.44772 11 2V3H7.82843C7.29799 3 6.78929 3.21071 6.41421 3.58579L4.58579 5.41421C4.21071 5.78929 4 6.29799 4 6.82843V7H3C2.44772 7 2 7.44772 2 8V9C2 9.55228 2.44772 10 3 10H4V11.1716C4 11.702 4.21071 12.2107 4.58579 12.5858L6.41421 14.4142C6.78929 14.7893 7.29799 15 7.82843 15H9V18H6C5.44772 18 5 18.4477 5 19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19C19 18.4477 18.5523 18 18 18H15V15H16.1716C16.702 15 17.2107 14.7893 17.5858 14.4142L19.4142 12.5858C19.7893 12.2107 20 11.702 20 11.1716V10H21C21.5523 10 22 9.55228 22 9V8C22 7.44772 21.5523 7 21 7H20V6.82843C20 6.29799 19.7893 5.78929 19.4142 5.41421L17.5858 3.58579C17.2107 3.21071 16.702 3 16.1716 3H13V2C13 1.44772 12.5523 1 12 1ZM10 10H14V12H10V10ZM9 7H11V8H9V7ZM13 7H15V8H13V7Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal__content">
            <button className="modal__close" onClick={closeModal}>
              &times;
            </button>
            <iframe
              src="https://you.com/chat"
              title="YouChat"
              className="modal__iframe"
            ></iframe>
          </div>
          {/* Texto debajo del modal */}
          <a
            href="https://you.com/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="modal__link"
          >
            IR a IA
          </a>
        </div>
      )}
    </>
  );
};

export default IAButton;
