import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DocentesSection from "./ventanas/Docentes.jsx";
import Logros from "./ventanas/logros.jsx";
import HomeSection from "./ventanas/Home.js";
import ClinicaJuridicaSection from "./ventanas/ClinicaJuridica.jsx";
import MallaCurricular from "./ventanas/MallaCurricular";
import Register from "./ventanas/Register";
import Login from "./ventanas/Login";
import Header from "./components/header.jsx";
import Footer from "./components/Footer.jsx";

function AppContent({ theme, setTheme }) {
  const location = useLocation(); // Ahora está dentro del Router

  return (
    <div className="dark:bg-white">
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Header theme={theme} setTheme={setTheme} />
      )}
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/clinica" element={<ClinicaJuridicaSection />} />
        <Route path="/docentes" element={<DocentesSection />} />
        <Route path="/logros" element={<Logros />} />
        <Route path="/malla-curricular" element={<MallaCurricular />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  }

  return (
    <Router>
      <AppContent theme={theme} setTheme={setTheme} />
    </Router>
  );
}

export default App;
