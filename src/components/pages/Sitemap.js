// src/components/Sitemap.js
import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sitemap = () => {
  return (
    <Container className="my-5" style={{color: "#333333 "}}>
      <Row>
        <Col>
          <h2>Sitemap</h2>
          <p>
            Welcome to the Coral Reef Bakery Sitemap page. Here you can find
            links to all the pages on our website.
          </p>
          <ListGroup>
            <ListGroup.Item>
              <Link to="/">Home</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/about">About Us</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/menu">Menu</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/contact">Contact Us</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/cart">Shopping Cart</Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/myaccount">My Account</Link>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Sitemap;
