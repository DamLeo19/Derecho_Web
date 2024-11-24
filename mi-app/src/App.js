import React, { useState, useEffect } from "react";
import { useLocation, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DocentesSection from "./ventanas/Docentes.jsx";
import Logros from "./ventanas/logros.jsx";
import HomeSection from "./ventanas/Home.js";
import ClinicaJuridicaSection from "./ventanas/ClinicaJuridica.jsx";
import MallaCurricular from "./ventanas/MallaCurricular";
import Register from "./ventanas/Register";
import Login from "./ventanas/Login";
import Noticias from "./ventanas/noticias.jsx";
import AdminPage from './ventanas/AdminPage'; // Importa la página de administración
import CentroEstudiantes from "./ventanas/CentroEstudiantes.jsx";
import Header from "./components/header.jsx";
import Footer from "./components/Footer.jsx";

function AppContent({ theme, setTheme }) {
  const location = useLocation();

  // Condición para excluir el Header y el Footer en las rutas específicas
  const excludeRoutes = ["/login", "/register"];
  const shouldShowHeaderFooter = !excludeRoutes.includes(location.pathname);

  return (
    <div className={`dark:bg-white`}>
      {shouldShowHeaderFooter && <Header theme={theme} setTheme={setTheme} />}
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/clinica" element={<ClinicaJuridicaSection />} />
        <Route path="/docentes" element={<DocentesSection />} />
        <Route path="/logros" element={<Logros />} />
        <Route path="/malla-curricular" element={<MallaCurricular />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/CentroEstudiantes" element={<CentroEstudiantes />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      {shouldShowHeaderFooter && <Footer />}
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
  };

  return (
    <Router>
      <AppContent theme={theme} setTheme={setTheme} />
    </Router>
  );
}

export default App;
