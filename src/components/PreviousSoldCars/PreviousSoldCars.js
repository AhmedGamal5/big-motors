import React from "react";
import "./PreviousSoldCars.css";
import carsData from "../../data/carsData";
import CarCard from "../CarCard/CarCard";
import Footer from "../Footer/Footer";


const PreviousSoldCars = () => {
    const soldCars = carsData.filter((car) => car.sold);  
    return (
      <>
       <section className="first-section" >
        <img
          src={`${process.env.PUBLIC_URL}/images/panner-pc-04.png`}
          alt="previous-sold-cars"
          className="previous-sold-cars-banner"
        />
      </section>
        <section className="previous-sold-cars">
          <h2 className="previous-sold-cars-h2">Previous Sold Cars</h2>
          <div className="car-grid">
            {soldCars.length > 0 ? (
              soldCars.map((car) => (
                <CarCard key={car.id} car={car} showDetails={true} />
              ))
            ) : (
              <p className="car-grid-empty">No sold cars available.</p>
            )}
          </div>
        </section>
        <Footer />
      </>
    );
  };

export default PreviousSoldCars;