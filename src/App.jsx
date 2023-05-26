import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/header/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/pages/Home";
import RestuarantMenu from "./Components/RestuarantMenu";
import { Provider } from "react-redux";
import Cart from "./Components/pages/Cart";
import store from "./Utils/Store";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/restaurant/:id" element={<RestuarantMenu />} />
        </Routes>
        <Routes>
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
