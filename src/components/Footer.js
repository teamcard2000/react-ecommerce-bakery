import React from "react";
import { Container, Row, Col, Nav, Form, Button } from "react-bootstrap";
import { FaFacebook, FaXTwitter, FaInstagram, FaTiktok } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container fluid className="footer-container">
      <footer className="py-5 px-5">
        <Row>
          <Col md={5} className="mb-3">
            <h5 className="text-start">
              For general inquiries and customer service, please contact us{" "}
              <a href={"/contact"} style={{ color: "white" }}>
                here
              </a>
            </h5>
            <Nav className="d-flex justify-content-start my-3">
              <Nav.Item className="mb-2 me-3">
                <Nav.Link href="#" className="p-0 socialmedia-icons">
                  <FaFacebook size={32} />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mb-2 me-3">
                <Nav.Link href="#" className="p-0 socialmedia-icons">
                  <FaXTwitter size={32} />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mb-2 me-3">
                <Nav.Link href="#" className="p-0 socialmedia-icons">
                  <FaInstagram size={32} />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mb-2 me-3">
                <Nav.Link href="#" className="p-0 socialmedia-icons">
                  <FaTiktok size={32} />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md={2} className="mb-3">
            <h5>Quick Links:</h5>
            <Nav className="flex-column my-3">
              <Nav.Item className="mb-2">
                <Nav.Link
                  as={Link}
                  to="/about"
                  className="p-0 footer-text-color"
                >
                  About Us
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mb-2">
                <Nav.Link
                  as={Link}
                  to="/contact"
                  className="p-0 footer-text-color"
                >
                  Contact Us
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mb-2">
                <Nav.Link
                  as={Link}
                  to="/privacy"
                  className="p-0 footer-text-color"
                >
                  Privacy Policy
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mb-2">
                <Nav.Link
                  as={Link}
                  to="/sitemap"
                  className="p-0 footer-text-color"
                >
                  Site Map
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mb-2">
                <Nav.Link
                  href="#"
                  onClick={handleBackToTop}
                  className="p-0 footer-text-color"
                >
                  Back to Top
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md={4} className="offset-md-1 my-3">
            <Form>
              <h5 className="text-start newsletter-header">
                Sign up for our Newsletter
              </h5>
              <p className="text-start mt-3 newsletter-text">
                Stay in touch for limited time offers.
              </p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <Form.Control
                  type="text"
                  id="newsletter1"
                  placeholder="Email address"
                  className="me-sm-2"
                />
                <Button type="button" variant="outline-light">
                  Subscribe
                </Button>
              </div>
            </Form>
          </Col>
        </Row>

        <Row className="py-4 my-4 border-top d-flex flex-column flex-sm-row justify-content-between">
          <p>© 2024 Coral Reef Bakery, Inc. All rights reserved.</p>
        </Row>
      </footer>
    </Container>
  );
}

export default Footer;
