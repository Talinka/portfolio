import React from 'react';
import { Container, Col, Row } from "react-bootstrap";
import linkedInIcon from '../assets/img/icons/LinkedIn.png';
import gitHubIcon from '../assets/img/icons/GitHub.png';

const socials = {
  linkedIn: 'https://www.linkedin.com/in/natalya-polikashina-a5a1781a3/',
  gitHub: 'https://github.com/Talinka/',
};

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="text-center">
          <Col sm={4}>
            <a href={socials.gitHub} target="_blank" rel="noopener noreferrer"><img src={gitHubIcon} alt="GitHub" /></a>{' '}
            <a href={socials.linkedIn} target="_blank" rel="noopener noreferrer"><img src={linkedInIcon} alt="LinkedIn" /></a>
          </Col>
          <Col sm={8}><small>Natalia Polikashina, 2020 | polikashina@gmail.com</small></Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;