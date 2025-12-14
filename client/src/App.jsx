import Navbar from "./components/NavBar.jsx";
import Footer from "./components/Footer";
import Home from "./pages/Home.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <section id="footer">
        <Footer />
      </section>
    </>
  );
};

export default App;
