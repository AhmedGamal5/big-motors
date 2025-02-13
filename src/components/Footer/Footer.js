import React from "react";
import "./Footer.css";
import Button from "react-bootstrap/Button";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram, FaYoutube, FaFacebook, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <a href="/">
            <img
              // src="images/Final logo _colored.png"
              src={`${process.env.PUBLIC_URL}/images/Final logo _colored.png`}
              alt="Company Logo"
              className="footer-logo"
            />
          </a>
          <p className="footer-text">
            {/* Add your company description here */}
            Founded in 2020, our appreciation and passion for classic and luxury
            cars has led us to Big Motors.{" "}
          </p>
        </div>
        <div className="footer-btns">
          <Button href="#" variant="outline-light" className="footer-btn">
            <CiLocationOn /> Find US
          </Button>
          <Button href="#" variant="outline-light" className="footer-btn">
            <IoCallOutline /> Call Us
          </Button>
        </div>
        <div className="footer-links">
          <ul className="footer-list">
            <li className="footer-list-item">
              <a href="#Sitemap" className="footer-link">
                Site Map
              </a>
            </li>
            <li className="footer-list-item">
              <a href="#Privacy-Policy" className="footer-link">
                Privacy Policy
              </a>
            </li>
            <li className="footer-list-item">
              <a href="#contact-us" className="footer-link">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
                <p>Follow us on</p>
                <a href="https://www.instagram.com/bigmotorsco/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="icon"/>
                </a>
                <a href="https://www.facebook.com/bigmotorsco/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="icon"/>
                </a>
                <a href="https://www.youtube.com/@bigmotors" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="icon"/>
                </a>
                <a href="https://www.linkedin.com/company/bigmotors/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="icon"/>
                </a>                
        </div>
        <div className="footer-about-us">
          <p >
            Address: Hamdan Street – Khalidiya- Abu Dabi – United Arab Emirates. | Tel: +971 50 668 6691 | Email: i@bigmotors.co 

          </p>
        </div>
        <div className="footer-copyright">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} BIG MOTORS | BIG MOTORS IS PART OF
            BIG GROUP | WEBSITE DESIGNED BY BIG DIGITAL MARKETING
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
