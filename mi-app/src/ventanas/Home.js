import React from 'react';
import Header from '../components/header.jsx';
import HeroSlider from '../components/heroSlider.jsx';
import AboutSection from '../components/AboutSection.jsx';
import AccreditationSection from '../components/AccreditationSection';
import SpecialDishSection from '../components/SpecialDishSection';
import Footer from '../components/Footer';
import '../index.css'; // Importación corregida
import '../ventanas/herostyles.css' ;
import '../ventanas/efectos.css' ;



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
      <Footer />
    </div>
  );
}

export default Home;
