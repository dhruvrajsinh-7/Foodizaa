import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/header/Navbar";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="flex flex-col h-screen justify-between font-serif">
      <Router>
        <Navbar /> {/* <Route exact path="/" component={Body} /> */}
        {/* Add more routes as needed */}
        = <Footer />
      </Router>
    </div>
  );
}

export default App;
