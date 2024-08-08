import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { NotFound } from "./pages/NotFound"; // Assuming you have a NotFound component
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} /> {/* Fallback route */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App