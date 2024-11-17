import React from 'react';
import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';
import AboutSection from '../components/AboutSection';
import AccreditationSection from '../components/AccreditationSection';
import SpecialDishSection from '../components/SpecialDishSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import '../index.css'; // Importación corregida

function Home() {
  const userName = localStorage.getItem('userName'); // Obtenemos el nombre del usuario

  return (
    <div>
      <Header />
      <div className="user-greeting">
        {userName && <h1>Bienvenido, {userName}</h1>} {/* Muestra el nombre si está disponible */}
      </div>
      <HeroSlider />
      <AboutSection />
      <AccreditationSection />
      <SpecialDishSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;
