import React, { useState } from "react";
import "./AboutUs.css";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const AboutUs = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <NavBar />
      <section className="about-us">
        <div className="first-section">
          <img
            src={`${process.env.PUBLIC_URL}/images/panner-pc-04.png`}
            alt="about-us-banner"
            className="about-us-banner-img"
          />
       
        </div>
        <section className="who-are-we">
          <div className="about-us-container">
            <p
              className={`about-us-text ${isHovered ? "hovered" : ""}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Who WE ARE
            </p>
          </div>
          <div className="container founder">
            <div className="content">
              <p>
                Big Motors has a wide range of classics to modern-day super cars
                exceeding 200 various models including Aston Martin, Bentley,
                BMW, Bugatti, Ferrari, Lamborghini, Mercedes, Rolls Royce, and
                Porsche. for sale.
              </p>
              <p style={{ color: "red", textAlign:"left" }}>“We love Porsche, it’s our love story!”</p>
            </div>
            <div className="content ">
              <p>
                Founded in 2020, our appreciation and passion for classic and
                luxury cars has led us to Big Motors.
              </p>
               <p>
                The team at Big Motors is not just experienced in buying and
                selling, furthermore are experts in managing and maintaining
                private car collections.
              </p>
              <p>
                The majority of the cars that we have on offer are owned by us
                and the collectors for whom we manage the private collections.
              </p>
              <p>
                “We’re So Obsessed With Cars That It Feels Like Our Hearts Are
                Not Muscles, They’re Engines!”
              </p>
              <p style={{ color: "red" }}> – Founders Of Big Motors</p>
            </div>
          </div>
          <div className="container">
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/about-us-img1.jpg`}
                alt="about-us-img1"
               
              />
            </div>
            <div className="content">
              <p>
                Big Motors is not just a classic car and exotic cars dealer, but
                also a platform offering Connoisseurs and Collectors the
                opportunity to acquire and sell Classic and European Exotic cars
                from all around the world.
              </p>
              <p>
                As we are based in the UAE, the Middle East is our focal point.
                Countries such as the UAE, Saudi Arabia, Kuwait, Qatar, Bahrain,
                and Oman are loaded with rare classic cars and exotic supercars,
                the garages are hiding exclusive and rare well-known brands
              </p>
              <p>
                For buying and selling, however, there are no platforms that are
                specialized for such high-value automobiles in the region, Rare
                classic and Exotic supercars in the Middle East are mostly owned
                Royals, VIP’s, and High-net-worth individuals, who are very
                private people.
              </p>
              
            </div>
          </div>
          <div className="container">
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/about-us-img2.jpg`}
                alt="about-us-img1"
              
              />
            </div>
            <div className="content">
              <p>
                The sale of your classic Or or supercar can be offered through
                our online auction, the buy now division or through our
                off-market team. Custom-tailored solutions to your specific
                needs can be offered, just let us know what is required and we
                will make it happen!
              </p>
              <p>
                Whether you are looking for a specific car or to sell your
                collection, our team is on hand to offer our assistance and
                experience.
              </p>
              <p>
                Although our platform is completely digital, there is a large
                team of car fanatics working behind the scenes showcasing your
                automobiles around the clock to the world.
              </p>
            </div>
          </div>
        </section>
       
        <div className="about-us-content">
          <h2>Our Expertise</h2>
          <p>
            At Big Motors, we not only have a strong track record in buying and
            selling cars, but we are also experts in managing and maintaining
            private car collections. Many of the cars we offer are part of our
            own collection or from collectors for whom we manage their private
            collections, ensuring that every car meets our high standards of
            quality and authenticity.
          </p>

          <h2>Our Inventory</h2>
          <p>
            Our inventory includes over 200 various models, ranging from classic
            to modern-day supercars, showcasing iconic brands such as Aston
            Martin, Bentley, BMW, Bugatti, Ferrari, Lamborghini, Mercedes, Rolls
            Royce, and Porsche. We are particularly passionate about Porsche and
            consider it our love story with the automotive world.
          </p>

          <h2>Our Reach</h2>
          <p>
            Based in the UAE with offices in Abu Dhabi and Dubai, our focus is
            primarily on the Middle East market. With countries like the UAE,
            Saudi Arabia, Kuwait, Qatar, Bahrain, and Oman being home to hidden
            garages filled with exclusive and rare classics and exotics, we have
            access to a treasure trove of exceptional vehicles for our
            discerning clientele.
          </p>

          <h2>Selling Your Car</h2>
          <p>
            When it comes to selling your classic or supercar, Big Motors offers
            various options tailored to your specific needs. You can choose to
            participate in our online auction, take advantage of our buy-now
            division, or let our experienced off-market team handle the sale
            discreetly. Whatever your preference, we are dedicated to achieving
            the highest selling price and providing custom-tailored solutions
            for a seamless selling experience.
          </p>

          <h2>Our Team</h2>
          <p>
            While our platform operates entirely online, we have a passionate
            team of car fanatics working behind the scenes, showcasing your
            automobile to the world around the clock. Rest assured that your
            prized possession will receive the attention it deserves, reaching a
            global audience of enthusiasts and collectors who share our passion
            for exceptional automobiles.
          </p>

          <h2>Our Commitment</h2>
          <p>
            Whether you are looking to buy, sell, or have us sell your car on
            your behalf, our dedicated team is always ready to assist you with
            their in-depth knowledge, expertise, and utmost professionalism.
            Trust Big Motors to deliver a remarkable experience and ensure that
            your automotive dreams become a reality.
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
