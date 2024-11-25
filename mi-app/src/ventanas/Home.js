import React from 'react';
import HeroSlider from '../components/heroSlider.jsx';
import AboutSection from '../components/AboutSection.jsx';
import AccreditationSection from '../components/AccreditationSection';
import SpecialDishSection from '../components/SpecialDishSection';
import IAButton from '../components/IAbuttin.jsx';

import '../index.css'; // Importación corregida
import '../ventanas/herostyles.css';
import '../ventanas/efectos.css';

function Home() {
  const userName = localStorage.getItem('userName'); // Obtenemos el nombre del usuario

  return (
    <div className="dark:bg-white dark:text-black">
      <div className="user-greeting">
        {userName && (
          <h1 className="welcome-message">
            Bienvenido, <span className="user-name">{userName}</span>
          </h1>
        )}
      </div>
      <IAButton />
      <HeroSlider />
      <AboutSection />
      <AccreditationSection />
      <SpecialDishSection />
    </div>
  );
}

export default Home;