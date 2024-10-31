import React from 'react';

function ContactForm() {
  return (
    <section className="reservation">
      <div className="container">
        <div className="form reservation-form bg-black-10">
          <form action="" className="form-left">
            <h2 className="headline-1 text-center">Registrate</h2>
            <p className="form-text text-center">
              Request <a href="tel:+88-123-123456" className="link">+88-123-123456</a> o dirigete al bloque F de la Universidad para más información.
            </p>
            <div className="input-wrapper">
              <input type="text" name="name" placeholder="Your Name" autoComplete="off" className="input-field" />
              <input type="tel" name="phone" placeholder="Phone Number" autoComplete="off" className="input-field" />
            </div>
            <div className="input-wrapper">
              <div className="icon-wrapper">
                <ion-icon name="calendar-clear-outline" aria-hidden="true"></ion-icon>
                <input type="date" name="reservation-date" className="input-field" />
                <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
              </div>
              <div className="icon-wrapper">
                <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                <select name="person" className="input-field">
                  <option value="08:00am">08 : 00 am</option>
                  <option value="09:00am">09 : 00 am</option>
                  <option value="10:00am">10 : 00 am</option>
                  <option value="11:00am">11 : 00 am</option>
                  <option value="12:00pm">12 : 00 pm</option>
                  <option value="01:00pm">01 : 00 pm</option>
                  <option value="02:00pm">02 : 00 pm</option>
                  <option value="03:00pm">03 : 00 pm</option>
                  <option value="04:00pm">04 : 00 pm</option>
                  <option value="05:00pm">05 : 00 pm</option>
                  <option value="06:00pm">06 : 00 pm</option>
                  <option value="07:00pm">07 : 00 pm</option>
                  <option value="08:00pm">08 : 00 pm</option>
                  <option value="09:00pm">09 : 00 pm</option>
                  <option value="10:00pm">10 : 00 pm</option>
                </select>
                <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
              </div>
            </div>
            <textarea name="message" placeholder="Message" autoComplete="off" className="input-field"></textarea>
            <button type="submit" className="btn btn-secondary">
              <span className="text text-1">Registrarse</span>
              <span className="text text-2" aria-hidden="true">Registrarse</span>
            </button>
          </form>
          <div className="form-right text-center" style={{ backgroundImage: 'url(./assets/images/form-pattern.png)' }}>
            <h2 className="headline-1 text-center">Contact Us</h2>
            <p className="contact-label">Información</p>
            <a href="tel:+88-123-123456" className="body-1 contact-number hover-underline">+88-123-123456</a>
            <div className="separator"></div>
            <p className="contact-label">Dirección</p>
            <address className="body-4">
              Universidad Catolica Boliviana - Bloque F
              Av. 14 de Septiembre Nº 4807 esquina, <br />
              La Paz, Bolivia
            </address>
            <p className="contact-label">Horarios</p>
            <p className="body-4">
              Lunes a sábado <br />
              8:00am a 16:00pm
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;