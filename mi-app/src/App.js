import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeSection from "./ventanas/Home.js"
import ClinicaJuridicaSection from "./ventanas/ClinicaJuridica.jsx";
import DocentesSection from "./ventanas/Docentes.jsx";
import Logros from "./ventanas/logros.jsx";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/clinica" element={<ClinicaJuridicaSection />} />
          <Route path="/docentes" element={<DocentesSection /> } />
          <Route path="/logros" element={<Logros /> } />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
