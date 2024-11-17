/* eslint-disable */
import React from "react";
import "./ModalDocentes.css";

const ModalDocentes = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Appointment Informations</h3>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <div className="modal-left">
            <img
              src="https://via.placeholder.com/150"
              alt="Dr. Samsung Philip"
              className="doctor-photo"
            />
            <h4>Dr. Samsung Philip.</h4>
            <p><strong>Education:</strong> University of Harvard</p>
            <p><strong>Language:</strong> Spanish, English</p>
            <p><strong>Organisation:</strong> Accupunture</p>
            <p><strong>Specialist:</strong> Accupunture</p>
          </div>
          <div className="modal-right">
            <p><strong>Hospital:</strong> Cairo Hospital</p>
            <p><strong>Time/Date:</strong> 5:00PM 3-12-2020</p>
            <p><strong>Status:</strong> <span className="status-booked">Booked</span></p>
            <p><strong>Specialty:</strong> Dental Clinic</p>
            <p><strong>Referring Doctor:</strong> Dr. Harry Pinn</p>
            <p><strong>Contact:</strong> 52, Maria Block, Victoria Road, CA, USA</p>
            <p><strong>Reason of visiting:</strong> Lorem ipsum is placeholder text commonly used in the graphic, print.</p>
            <p><strong>Direction:</strong> Get direction by using 
              <a href="#" className="map-link"> Google Maps</a>
            </p>
            <div className="hospital-gallery">
              <h4>Hospital Gallery</h4>
              <div className="gallery-images">
                <img src="https://via.placeholder.com/100" alt="Gallery 1" />
                <img src="https://via.placeholder.com/100" alt="Gallery 2" />
                <img src="https://via.placeholder.com/100" alt="Gallery 3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDocentes;