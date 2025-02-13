import React from "react";
import "./Home.css";

import FeaturedCars from "../Featured-Cars/FeaturedCars";
import ScrollContent from "../ScrollContent/ScrollContent";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Logos from "../Logos/Logos";

const Home = () => {
  return (
    <>
      <NavBar />
      <section className="first-section">
        <img
          src={`${process.env.PUBLIC_URL}/images/ComingSoon.jpg`}
          alt="Coming Soon"
          className="img-soon"
        />
      </section>
      <Logos />
      <FeaturedCars />
      <ScrollContent />
      <Footer />
    </>
  );
};

export default Home;
