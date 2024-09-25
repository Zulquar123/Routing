import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Gallary from "./Gallary";
import Contact from "./Contact";

export default function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/gallary" element={<Gallary />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </>
  );
}
