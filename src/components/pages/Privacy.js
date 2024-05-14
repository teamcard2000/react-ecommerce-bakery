// src/components/PrivacyPolicy.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Privacy = () => {
  return (
    <Container className="my-5" style={{color: "#333333"}}>
      <Row>
        <Col>
          <h2>Privacy Policy</h2>
          <p>Effective Date: May 9, 2024</p>

          <h3>1. Introduction</h3>
          <p>
            Welcome to Coral Reef Bakery. We are committed to protecting your
            personal information and your right to privacy. If you have any
            questions or concerns about our policy or our practices with regards
            to your personal information, please contact us at [Contact
            Information].
          </p>

          <h3>2. Information We Collect</h3>
          <p>
            We collect personal information that you provide to us when you
            register on the website, express an interest in obtaining
            information about us or our products and services, when you
            participate in activities on the website (such as posting messages
            in our online forums or entering competitions, contests, or
            giveaways) or otherwise contacting us.
          </p>

          <h4>Information collected from our website</h4>
          <ul>
            <li>
              Name and Contact Data: We collect your first and last name, email
              address, postal address, phone number, and other similar contact
              data.
            </li>
            <li>
              Credentials: We collect passwords, password hints, and similar
              security information used for authentication and account access.
            </li>
          </ul>

          <h3>3. How We Use Your Information</h3>
          <p>
            We use personal information collected via our website for a variety
            of business purposes described below. We process your personal
            information for these purposes in reliance on our legitimate
            business interests, in order to enter into or perform a contract
            with you, with your consent, and/or for compliance with our legal
            obligations.
          </p>

          <h3>4. Sharing Your Information</h3>
          <p>
            We only share and disclose your information in the following
            situations:
          </p>
          <ul>
            <li>
              Compliance with Laws: We may disclose your information where we
              are legally required to do so in order to comply with applicable
              law, governmental requests, a judicial proceeding, court order, or
              legal process.
            </li>
            <li>
              Vital Interests and Legal Rights: We may disclose your information
              where we believe it is necessary to investigate, prevent, or take
              action regarding potential violations of our policies, suspected
              fraud, situations involving potential threats to the safety of any
              person, and illegal activities, or as evidence in litigation in
              which we are involved.
            </li>
          </ul>

          <h3>5. Security of Your Information</h3>
          <p>
            We use administrative, technical, and physical security measures to
            help protect your personal information. While we have taken
            reasonable steps to secure the personal information you provide to
            us, please be aware that despite our efforts, no security measures
            are perfect or impenetrable, and no method of data transmission can
            be guaranteed against any interception or other type of misuse.
          </p>

          <h3>6. Contact Us</h3>
          <p>
            If you have questions or comments about this policy, you may contact
            us here
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Privacy;
