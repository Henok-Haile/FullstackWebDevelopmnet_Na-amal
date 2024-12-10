import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Components/Home.jsx";
import Features from "./Components/Features.jsx";
import Enterprise from "./Components/Enterprise.jsx";
import Support from "./Components/Support.jsx";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="container-fluid vh-100 d-flex flex-column">
      <div className="row flex-shrink-0" style={{ height: "10%" }}><Header /></div>

      <div className="row flex-grow-1 overflow-auto" style={{ height: "65%" }}>
        <main className="col-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>
      </div>

      <div className="row flex-shrink-0" style={{ height: "25%" }}><Footer /></div>
    </div>
  );
};

export default App;
