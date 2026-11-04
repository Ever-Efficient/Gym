import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SnowEffect from "./components/SnowEffect";
import ScrollToTop from "./components/ScrollToTop";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Packages from "./pages/Packages";
import Trainers from "./pages/Trainers";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      <div className="App">
        <SnowEffect />
        <ScrollToTop />
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
