import React from "react";
import "./Logos.css";

const brands = [
  {
    name: "Aston Martin",
    img: `${process.env.PUBLIC_URL}/images/logos/aston-martin.png`,
  },
  {
    name: "Bentley",
    img: `${process.env.PUBLIC_URL}/images/logos/bentley-2.png`,
  },
  { name: "AMG", img: `${process.env.PUBLIC_URL}/images/logos/AMG.png` },
  {
    name: "McLaren",
    img: `${process.env.PUBLIC_URL}/images/logos/mclaren.png`,
  },
  { name: "Audi", img: `${process.env.PUBLIC_URL}/images/logos/Audi.png` },
  {
    name: "Porsche",
    img: `${process.env.PUBLIC_URL}/images/logos/Porsche.png`,
  },
];
const brands2 = [
  { name: "BMW", img: `${process.env.PUBLIC_URL}/images/logos/BMW.png` },
  {
    name: "Ferrari",
    img: `${process.env.PUBLIC_URL}/images/logos/Ferrari.png`,
  },
  {
    name: "Koenigsegg",
    img: `${process.env.PUBLIC_URL}/images/logos/koenigsegg.png`,
  },
  {
    name: "Lamborghini",
    img: `${process.env.PUBLIC_URL}/images/logos/lamborghini.png`,
  },
  {
    name: "Mercedes",
    img: `${process.env.PUBLIC_URL}/images/logos/mercedes.png`,
  },
  {
    name: "Rolls Royce",
    img: `${process.env.PUBLIC_URL}/images/logos/Rlolls-royce.png`,
  },
];
const Logos = () => {
  return (
    <section className="text-center my-5 logos-sec">
      <h2 className="fw-bold text-uppercase">Marques We Specialize In</h2>
      <div className="container ">
        <div className="row justify-content-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="col-6 col-sm-4 col-md-3 col-lg-2 p-3 logo-section"
            >
              <div className="circle-border">
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="img-fluid log-img"
                  id={brand.name.replace(/\s+/g, "-").toLowerCase()}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="row justify-content-center">
          {brands2.map((brand, index) => (
            <div
              key={index}
              className="col-6 col-sm-4 col-md-3 col-lg-2 p-3 logo-section"
            >
              <div className="circle-border">
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="img-fluid log-img2"
                  id={brand.name.replace(/\s+/g, "-").toLowerCase()}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logos;
