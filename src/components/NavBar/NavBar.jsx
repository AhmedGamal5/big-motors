import React, { useEffect, useState } from "react";
import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
// import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasSecondSection, setHasSecondSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const firstSection = document.querySelector(".first-section");
      const secondSection = document.querySelector(".second-section");

      if (firstSection) {
        const firstSectionHeight = firstSection.offsetHeight;
        const scrollPosition = window.scrollY;

        setIsScrolled(scrollPosition >= firstSectionHeight - 40); // Add buffer of 40px
      }

      if (secondSection) {
        setHasSecondSection(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={`navbar ${isScrolled ? "scroll-past-first" : ""} ${
        hasSecondSection ? "has-second-section" : ""
      }`}
    >
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src={`${process.env.PUBLIC_URL}/images/Final logo _colored.png`}
            alt="big-motors-logo"
            className="big-motors-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="nav-toggle"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Link to="/current-stock" className="nav-link">
              Current Stock
            </Link>
            <Link to="/previous-sold-cars" className="nav-link">
              Previously Sold
            </Link>
            <Link to="/sell-your-car" className="nav-link">
              Sell Your Car
            </Link>
            <Link to="/about-us" className="nav-link">
              About Us
            </Link>
            <Link to="#" className="nav-link">
              Meet the Team
            </Link>
            <Link to="/contact-us" className="nav-link">
              Contact Us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

/* <NavDropdown title="Sell Your Car" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Sell Your Car
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */

/* <Nav.Link href="/current-stock">Current Stock</Nav.Link>
            <Nav.Link href="/previous-sold-cars">Previously Sold</Nav.Link>
            <Nav.Link href="/sell-your-car">Sell Your Car</Nav.Link>           
            <Nav.Link href="/about-us">About Us</Nav.Link>
            <Nav.Link href="#meet-the-team">Meet the Team</Nav.Link>
            <Nav.Link href="/contact-us">Contact Us</Nav.Link> */
