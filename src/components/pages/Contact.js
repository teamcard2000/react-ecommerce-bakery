// src/components/ContactUs.js
import React, { useState } from "react";
import { Card, Row, Col, Form, Button } from "react-bootstrap";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center py-5 px-3 px-md-5"
        style={{ backgroundColor: "#D7BB9C", color: "#333333" }}
      >
        <Card className="w-100 bg-transparent my-5" style={{ border: "none" }}>
          <Card.Body>
            <Row className="justify-content-md-center">
              <Col md={6}>
                <h1 className="text-center mb-5 pb-3 fw-bold">Contact Us</h1>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formName" className="mb-4">
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formEmail" className="mb-4">
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formMessage" className="mb-5">
                    <Form.Control
                      as="textarea"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={10}
                      placeholder="Your message"
                      required
                    />
                  </Form.Group>
                  <Button
                    className="primary-button2 w-100"
                    size="lg"
                    type="submit"
                  >
                    SUBMIT NOW
                  </Button>
                </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ContactUs;
