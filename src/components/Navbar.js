import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { BsPersonFill, BsList } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const [logoSrc, setLogoSrc] = useState(
    process.env.PUBLIC_URL + "/assets/desktop-logo.svg"
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setLogoSrc(process.env.PUBLIC_URL + "/assets/mobile-logo.svg");
      } else {
        setLogoSrc(process.env.PUBLIC_URL + "/assets/desktop-logo.svg");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // call on mount to set initial state

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // calculate the total number of items in the cart
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Navbar className="navbarStyle bg-body-tertiary" expand="lg">
      <Container fluid className="flex-container">
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={toggleNav}
          className="d-lg-none"
        >
          <BsList size={28} color="#4ECDC4" />
        </Navbar.Toggle>
        <Navbar.Brand as={Link} to="/" className="logo">
          <img
            fluid
            src={logoSrc}
            alt="logo"
            style={
              logoSrc.includes("mobile")
                ? { width: "100px" }
                : { width: "300px" }
            }
          />
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav" className="d-lg-none">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/about"
              className="navbar-link"
              style={{ marginRight: "10px" }}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/menu"
              className="navbar-link"
              style={{ marginRight: "10px" }}
            >
              Menu
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className="navbar-link"
              style={{ marginRight: "10px" }}
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="nav-right">
          <Link to="/myaccount" className="icon-link" aria-label="User profile">
            <BsPersonFill />
          </Link>
          <Link to="/cart" className="icon-link" aria-label="Shopping cart">
            <HiMiniShoppingBag />
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>} {/* Display badge if items are in the cart */}
          </Link>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
