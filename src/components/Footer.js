import React from 'react';
import { Container, Col, Row } from "react-bootstrap";

import socials from '../assets/socials';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="text-center">
          <Col sm={4}>
            <a href={socials.gitHub.url} target="_blank" rel="noopener noreferrer">
              <img src={socials.gitHub.icon} className="social-icon" alt={socials.gitHub.text} />
            </a>
            <a href={socials.linkedIn.url} target="_blank" rel="noopener noreferrer">
              <img src={socials.linkedIn.icon} className="social-icon" alt={socials.gitHub.text} />
            </a>
          </Col>
          <Col sm={8}><small>Natalia Polikashina, 2020 | polikashina@gmail.com</small></Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;