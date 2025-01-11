import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Navbar from "./components/Pages/Navbar";// Example Navbar component
import Footer from "./components/Pages/Footer"; // Footer component
import Services from "./components/Links/Services";
import About from "./components/Links/About";
import ContactUs from "./components/Links/ContactUs";
import Teams from "./components/Links/Teams";
import Blog from "./components/Links/Blog";

function App() {
  return (
    <Router>
      {/* Navbar will be displayed on all routes */}
      <Navbar />
      <Routes>
        {/* Define the routes */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/our-team" element={<Teams />} />
        <Route path="/blog" element={<Blog />} />

        {/* Add more routes as needed */}
      </Routes>
      {/* Footer will be displayed on all routes */}
      <Footer />
    </Router>
  );
}

export default App;
