import React from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import AboutSection from './components/AboutSection';
import AccreditationSection from './components/AccreditationSection';
import SpecialDishSection from './components/SpecialDishSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './index.css'; // Importación corregida


function App() {
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

export default App;
