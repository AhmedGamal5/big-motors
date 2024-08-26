import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactUs.css";
import Footer from "../Footer/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
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
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || '',
          message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
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
            alt="about-us-banner"
            className="about-us-banner-img"
          />
        </div>
        <div className="contact-us">
          <div className="contact-us-container">
            <Container>
              <Row>
                <Col sm={12} md={6} lg={4} className="contact-info">
                  <h2>Big Motors</h2>
                  <p>Email: i@biggroup.me</p>
                  <p>Tel:+971506686691</p>
                  <div className="opening-hours">
                    <h3>Opening Hours</h3>
                    <ul>
                      <li>Monday: 12:00 PM - 08:00 PM</li>
                      <li>Tuesday: 12:00 PM - 08:00 PM</li>
                      <li>Wednesday: 12:00 PM - 08:00 PM</li>
                      <li>Thursday: 12:00 PM - 08:00 PM</li>
                      <li>Friday: Closed</li>
                      <li>Saturday: Closed</li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </div>
                </Col>
                <Col sm={12} md={6} lg={8} className="contact-form">
                  <h3>Your Details</h3>
                  <form className="contact-us-form" onSubmit={handleSubmit}>
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
                    <label>
                      Company
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </label>
                    <label>
                      Your Enquiry
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </label>
                    <button type="submit">Send your enquiry</button>
                  </form>
                </Col>
              </Row>
              {/* <Row>
                <Col>
                <iframe
              title="Google Maps"
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Big%20Motors%20Co%20-%20Meydan%20Avenue%20-%20Nad%20Al%20Sheba%201%20-%20Dubai%20-%20United%20Arab%20Emirates+(Big%20Motors%20Co)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps vehicle tracker</a>
            </iframe>
                </Col>
              </Row> */}
            </Container>          
          </div>
          <div>
            <iframe
              title="Google Maps"
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Big%20Motors%20Co%20-%20Meydan%20Avenue%20-%20Nad%20Al%20Sheba%201%20-%20Dubai%20-%20United%20Arab%20Emirates+(Big%20Motors%20Co)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps vehicle tracker</a>
            </iframe>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
