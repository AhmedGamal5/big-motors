import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../Footer/Footer";

import { MdContactPhone, MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import carsData from "../../data/carsData";

import { Image } from "cloudinary-react"; // Import Cloudinary's Image component
import cloudinaryConfig from "../../cloudinaryConfig";

import "./CarDetail.css";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";



const CarDetail = () => {
  const { carName } = useParams();
  const normalizedCarName = carName
    .toLowerCase()
    .replace(/[\s()]/g, "-")
    .replace(/[^\w-]+/g, "");
  const car = carsData.find(
    (c) =>
      c.name
        .toLowerCase()
        .replace(/[\s()]/g, "-")
        .replace(/[^\w-]+/g, "") === normalizedCarName
  );

  const [index, setIndex] = useState(0);
  const [visibleStart, setVisibleStart] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    const newStart = Math.max(
      0,
      Math.min(selectedIndex - 1, car.images.length - 4)
    );
    setVisibleStart(newStart);
  };
  if (!car) {
    console.error("Car not found for key", normalizedCarName);
    return <h2>Car not found</h2>;
  }

  return (
    <>
     <NavBar />
      <div className="second-section  panner-details">
        <div className="carousel-container">
          <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
            {car.images.map((image, idx) => (
              <Carousel.Item key={idx}>
                 <Image
                  cloudName={cloudinaryConfig.cloudName}
                  publicId={`Big Motors/${car.name}/${image}`}
                  alt={`Slide ${idx}`}
                  secure
                  className="d-block w-100"
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="thumbnail-container">
            {car.images
              .slice(visibleStart, visibleStart + 4)
              .map((image, idx) => (
                <Image
                key={idx}
                cloudName={cloudinaryConfig.cloudName}
                publicId={`Big Motors/${car.name}/${image}`}
                className={`thumbnail ${index === visibleStart + idx ? "active" : ""}`}
                onClick={() => handleSelect(visibleStart + idx)}
                alt={`Thumbnail ${visibleStart + idx}`}
                secure
              />
              ))}
          </div>
        </div>

        <h1>{car.name}</h1>
        <h2>{car.price}</h2>
        <div className="expand-on-hover"></div>
        <div className="panner-details-links">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=U.rehmann@me.com"
            className="contact-links"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdOutlineEmail className="panner-details-links-icon" /> Email
            Enquiry
          </a>
          <a href="/contact-us" className="contact-links">
            <MdContactPhone className="panner-details-links-icon" /> Contact Us
          </a>

          <a
            href="https://wa.me/971506686691"
            className="contact-links"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="panner-details-links-icon" /> WhatsApp
          </a>
        </div>
      </div>
      <div className="car-detail-container ">
        <Container>
          <Row>
            <Col>
              <h2>Overview</h2>
              <div className="expand-on-hover"></div>
            </Col>
          </Row>
          <Row className="overview-details">
            <Col sm={12} md={6} lg={5}>

          <Image
           fluid="true"
          cloudName={cloudinaryConfig.cloudName}
          publicId={`Big Motors/${car.name}/${car.image}`}
          alt={car.name}
          secure
          className="car-detail-image "
        />

            </Col>
            <Col
              sm={12}
              md={6}
              lg={{ span: 6, offset: 1 }}
              className="car-info-container"
            >
              <div className="overview-list">
                {Object.entries(car.overview).map(([key, value]) => (
                  <div key={key} className="overview-item">
                    <div className="overview-key">
                      {key.replace(/([A-Z])/g, " $1")}
                    </div>
                    <div className="overview-value">{value}</div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="specification-section">
        <h2>Specification</h2>
        <div className="expand-on-hover"></div>
        <div className="specification-container">
          {car.specification.map((spec, index) => (
            <div key={index} className="spec-item">
              <span>+</span> {spec}
            </div>
          ))}
        </div>
      </div>
      {/* <Link to="/">Back to Car List</Link> */}
      <div className="selling-car-section">
        <h2>Selling Your Car</h2>
        <div className="expand-on-hover"></div>
        {/* <hr class="divider" /> */}
        <p>
          If you have a luxury vehicle that you would like us to consider in
          part exchange against any of our stock, click the link below to
          contact us and see if we can get you paired with your dream car.
        </p>
        <a href="/sell-your-car" className="selling-car-button">
          Click here
        </a>
      </div>
      <Footer />
    </>
  );
};

export default CarDetail;