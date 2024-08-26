import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./SellYourCar.css";
import Footer from "../Footer/Footer";

const SellYourCar = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    carMake: "",
    carModel: "",
    carYear: "",
    registrationNumber: "",
    mileage: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
    //   .send(
    //     process.env.REACT_APP_EMAILJS_SERVICE_ID,
    //     process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    //     formData,
    //     process.env.REACT_APP_EMAILJS_USER_ID
    //   )
    .send(
        "service_rnua3sq",
        "template_b5uwa0q",
        {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            car_make: formData.carMake,
            car_model: formData.carModel,
            car_year: formData.carYear,
            registration_number: formData.registrationNumber,
            mileage: formData.mileage,
            message: formData.message,
          },       
        "wmvtVUQ3AcEJmdbGD"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            carMake: "",
            carModel: "",
            carYear: "",
            registrationNumber: "",
            mileage: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <>
      <section>
        <div className="first-section">
          <img
            src={`${process.env.PUBLIC_URL}/images/panner-pc-04.png`}
            alt="sell-your-car-banner"
            className="sell-your-car-banner-img"
          />
        </div>
        <div className="sell-your-car-section">
          <div className="sell-your-car">
            <div className="sell-your-car-container">
              <h2>Sell Your Car</h2>
              <p>
                Big Motors is committed to taking care as we are
                selling them. Our technician team has more than 20 years of
                combined experience in looking after prestige and luxury cars.
                We inspect the condition, age, and make of each car in detail
                before buying the car.
              </p>
              <form className="sell-your-car-form" onSubmit={handleSubmit}>
                <div className="form-section">
                  <h3>Your Details</h3>
                  <label>
                    Your Name *
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label>
                    Email Address *
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label>
                    Telephone Number *
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <div className="form-section">
                  <h3>Your Car Details</h3>
                  <label>
                    Make
                    <input
                      type="text"
                      name="carMake"
                      value={formData.carMake}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Model
                    <input
                      type="text"
                      name="carModel"
                      value={formData.carModel}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Year
                    <input
                      type="number"
                      name="carYear"
                      value={formData.carYear}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Registration Number
                    <input
                      type="text"
                      name="registrationNumber"
                      value={formData.registrationNumber}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Mileage
                    <input
                      type="number"
                      name="mileage"
                      value={formData.mileage}
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <div className="form-section">
                  <h3>Your Enquiry</h3>
                  <label>
                    Message
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <button type="submit">Send your enquiry</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SellYourCar;
