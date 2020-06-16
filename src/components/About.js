import React from 'react';
import talita from '../assets/img/talita.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';


const About = (props) => {
  const { t } = useTranslation();

  return (
    <Container>
      <h3 className="page_header">{t('about.subtitle')}</h3>
      <Container>
        <Row>
          <Col lg={4} md={5} className="base_col">
            <img src={talita} alt="personal_photo" className="personal_photo" />
          </Col>
          <Col className="base_col">
            <p>{t('about.text')}</p>
          </Col>
        </Row>
      </Container>
    </Container >
  );
}

export default About;