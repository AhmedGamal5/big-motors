import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home/Home";
import CarDetail from "./components/CarDetail/CarDetail";
import CurrentStock from "./components/CurrentStock/CurrentStock";
import AboutUs from "./components/About Us/AboutUs";
import ContactUs from "./components/Contact Us/ContactUs";
import SellYourCar from "./components/Sell your car/SellYourCar";
import PreviousSoldCars from "./components/PreviousSoldCars/PreviousSoldCars";
import Error from "./components/Error/Error";

function App() {
  useEffect(() => {
    document.title = "Big Motors";
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/current-stock" element={<CurrentStock />} />
        <Route path="/previous-sold-cars" element={<PreviousSoldCars />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/:carName" element={<CarDetail />} />
        <Route path="/sell-your-car" element={<SellYourCar />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
