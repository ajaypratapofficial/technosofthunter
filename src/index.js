import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add more routes for other pages, like About, Services, Contact, etc. */}
      {/* For example: */}
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/services" element={<Services />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  </Router>,
  document.getElementById("root")
);
