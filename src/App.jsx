import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/header/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/pages/Home";
import RestuarantMenu from "./Components/RestuarantMenu";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/restaurant/:id" element={<RestuarantMenu />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
