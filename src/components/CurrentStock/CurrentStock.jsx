import React, { useState } from "react";
import "./CurrentStock.css";
import carsData from "../../data/carsData";
import CarCard from "../CarCard/CarCard";
import Footer from "../Footer/Footer";

const carsPerPage = 12;
const CurrentStock = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(carsData.length / carsPerPage);

  const startIndex = (currentPage - 1) * carsPerPage;
  const endIndex = Math.min(startIndex + carsPerPage, carsData.length);

  const currentCars = carsData.slice(startIndex, endIndex);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const setPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="first-section" >
        <img
          src={`${process.env.PUBLIC_URL}/images/panner-pc-04.png`}
          alt="current-stock"
          className="current-stock-banner"
        />
      </section>
      <section className="current-stock">
        {/* <h2 className="current-stock-h2">Current Stock</h2>
        <div className="current-stock-expand-on-hover"></div> */}
        <div className="car-grid">
          {currentCars.map((car) => (
            <CarCard key={car.id} car={car} className="current-stock" showDetails={true} />
          ))}
        </div>

        {/* pagination */}
        <div className="pagination-container">
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              >
                <button className="page-link" onClick={prevPage}>
                  {"<"} Previous
                </button>
              </li>
              {[...Array(totalPages)].map((_, index) => (
                <li
                  key={index}
                  className={`page-item ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => setPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              <li
                className={`page-item ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
              >
                <button className="page-link" onClick={nextPage}>
                  Next {">"}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CurrentStock;
