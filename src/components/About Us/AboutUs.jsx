import React, { useState } from "react";
import "./AboutUs.css";
import Footer from "../Footer/Footer";

const AboutUs = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <section className="about-us">
        <div className="first-section">
          <img
            src={`${process.env.PUBLIC_URL}/images/panner-pc-04.png`}
            alt="about-us-banner"
            className="about-us-banner-img"
          />
          {/* <div className="about-us-container">
            <p
              className={`about-us-text ${isHovered ? "hovered" : ""}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              About Us
            </p>
          </div> */}
        </div>
        <div className="about-us-container">
          <p
            className={`about-us-text ${isHovered ? "hovered" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            About Us
          </p>
        </div>      
        <div className="about-us-content">
          <h2>Welcome to Big Motors</h2>
          <p>
            Welcome to Big Motors, the premier online car dealership and platform for acquiring and selling classic, super, and hyper cars in the Middle East and across Europe. Founded in 2020, our deep appreciation and passion for classic and luxury cars have driven us to create a trusted destination for car enthusiasts and collectors alike.
          </p>

          <h2>Our Expertise</h2>
          <p>
            At Big Motors, we not only have a strong track record in buying and selling cars, but we are also experts in managing and maintaining private car collections. Many of the cars we offer are part of our own collection or from collectors for whom we manage their private collections, ensuring that every car meets our high standards of quality and authenticity.
          </p>

          <h2>Our Inventory</h2>
          <p>
            Our inventory includes over 200 various models, ranging from classic to modern-day supercars, showcasing iconic brands such as Aston Martin, Bentley, BMW, Bugatti, Ferrari, Lamborghini, Mercedes, Rolls Royce, and Porsche. We are particularly passionate about Porsche and consider it our love story with the automotive world.
          </p>

          <h2>Our Reach</h2>
          <p>
            Based in the UAE with offices in Abu Dhabi and Dubai, our focus is primarily on the Middle East market. With countries like the UAE, Saudi Arabia, Kuwait, Qatar, Bahrain, and Oman being home to hidden garages filled with exclusive and rare classics and exotics, we have access to a treasure trove of exceptional vehicles for our discerning clientele.
          </p>

          <h2>Selling Your Car</h2>
          <p>
            When it comes to selling your classic or supercar, Big Motors offers various options tailored to your specific needs. You can choose to participate in our online auction, take advantage of our buy-now division, or let our experienced off-market team handle the sale discreetly. Whatever your preference, we are dedicated to achieving the highest selling price and providing custom-tailored solutions for a seamless selling experience.
          </p>

          <h2>Our Team</h2>
          <p>
            While our platform operates entirely online, we have a passionate team of car fanatics working behind the scenes, showcasing your automobile to the world around the clock. Rest assured that your prized possession will receive the attention it deserves, reaching a global audience of enthusiasts and collectors who share our passion for exceptional automobiles.
          </p>

          <h2>Our Commitment</h2>
          <p>
            Whether you are looking to buy, sell, or have us sell your car on your behalf, our dedicated team is always ready to assist you with their in-depth knowledge, expertise, and utmost professionalism. Trust Big Motors to deliver a remarkable experience and ensure that your automotive dreams become a reality.
          </p>

          <h2>Join Us</h2>
          <p>
            Welcome to the world of Big Motors; we look forward to serving you.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
