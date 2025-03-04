import React from "react";
import Navbar from "./components/NavBar.jsx";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

const App = () => {
  return (
    <>
      <Router>
      <Navbar />
      
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="hero"><Hero /></section>
              <section id="services"><Services /></section>
            </>
          }
        />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <section id="footer"><Footer /></section>
    </Router>
    </>
  );
};

export default App;
