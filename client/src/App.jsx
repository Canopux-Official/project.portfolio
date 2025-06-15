import Navbar from "./components/NavBar.jsx";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ExploreSection from "./pages/ExploreSection.jsx";

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/explore/:projectTitle" element={<ExploreSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <section id="footer">
          <Footer />
        </section>
      </Router >
    </>
  );
};

export default App;
