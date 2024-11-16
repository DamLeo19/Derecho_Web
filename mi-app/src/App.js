import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeSection from "./ventanas/Home.js"
import ClinicaJuridicaSection from "./ventanas/ClinicaJuridica.js";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/clinica" element={<ClinicaJuridicaSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
