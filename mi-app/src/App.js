import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeSection from "./ventanas/Home.js"
import ClinicaJuridicaSection from "./ventanas/ClinicaJuridica.js";
import MallaCurricular from "./ventanas/MallaCurricular";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/clinica" element={<ClinicaJuridicaSection />} />
          <Route path="/malla-curricular" element={<MallaCurricular />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
