import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeSection from "./ventanas/Home.js";
import ClinicaJuridicaSection from "./ventanas/ClinicaJuridica.js";
import MallaCurricular from "./ventanas/MallaCurricular";
import Register from "./ventanas/Register";
import Login from "./ventanas/Login";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/clinica" element={<ClinicaJuridicaSection />} />
          <Route path="/malla-curricular" element={<MallaCurricular />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
