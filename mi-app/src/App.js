import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DocentesSection from "./ventanas/Docentes.jsx";
import Logros from "./ventanas/logros.jsx";
import HomeSection from "./ventanas/Home.js";
import ClinicaJuridicaSection from "./ventanas/ClinicaJuridica.jsx";
import MallaCurricular from "./ventanas/MallaCurricular";
import Register from "./ventanas/Register";
import Login from "./ventanas/Login";
import Noticias from "./ventanas/noticias.jsx";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/clinica" element={<ClinicaJuridicaSection />} />
          <Route path="/docentes" element={<DocentesSection /> } />
          <Route path="/logros" element={<Logros /> } />
          <Route path="/malla-curricular" element={<MallaCurricular />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/noticias" element={<Noticias />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
