import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Snowfall from "react-snowfall";
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
        <Snowfall
          color="#82c3d9"
          snowflakeCount={120}
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            zIndex: 50,
            pointerEvents: "none",
          }}
        />
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
