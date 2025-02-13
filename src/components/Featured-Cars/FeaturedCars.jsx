import React from "react";
import "./FeaturedCars.css";
import CarCard from "../CarCard/CarCard";
import carsData from "../../data/carsData";

const FeaturedCars = () => {
  const featuredCarIds = [1, 2, 12, 27, 33, 37]; // Add the IDs of the cars you want to feature
  const featuredCars = carsData.filter((car) =>
    featuredCarIds.includes(car.id)
  );

  return (
    <section className="featured-cars">
      <h2 className="featured-cars-h2">Featured Cars</h2>
      <div className="car-grid">
        {featuredCars.map((car) => (
          <CarCard
            key={car.id}
            car={car}
            className="featured"
            showDetails={true}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCars;
