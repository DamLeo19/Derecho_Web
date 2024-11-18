import React from 'react';
import Header from '../components/header.jsx';
import HeroSlider from '../components/heroSlider.jsx';
import AboutSection from '../components/AboutSection.jsx';
import AccreditationSection from '../components/AccreditationSection';
import SpecialDishSection from '../components/SpecialDishSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import '../index.css'; // Importación corregida
import '../ventanas/herostyles.css' ;
import '../ventanas/efectos.css' ;




function Home() {
  return (
    <div>
      <Header />
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
