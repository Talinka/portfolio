import React, { useState } from 'react';
import { Container, Row, Col, Modal, Carousel } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

// hobby's indexes for photos
const galleryTags = [1, 6, 3, 8, 2, 6, 0, 2, 6, 3, 0, 6];

const HobbyList = () => {
  const { t } = useTranslation();
  const hobbies = t('about.hobbies', { returnObjects: true });
  const [currentIndex, setCurrentIndex] = useState(-1);
  const handleHover = (index) => () => setCurrentIndex(index);

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setActive(currentIndex);
    setShow(true);
  }
  const handleClose = () => setShow(false);

  const [active, setActive] = useState(0);
  const handleSelect = (selectedIndex) => {
    setActive(selectedIndex);
  };

  const getModal = () => {
    return (
      <Modal
        show={show}
        onHide={handleClose}
        centered
        size="xl"
      >
        <Carousel activeIndex={active} onSelect={handleSelect} indicators={false}>
          {galleryTags.map((tag, index) => (
            <Carousel.Item key={index}>
              <div className={`img-fluid photo-big photo-${index + 1}`} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal>
    );
  };

  return (
    <>
      <p>{t('about.hobbyDescription')}</p>
      <Row className="formatted-list">
        {hobbies.map((hobby, index) => (
          <Col lg={4} sm={6}
            className={`hobby${(galleryTags[currentIndex] === index) ? ' active' : ''}`}
            key={index}
          >
            <span className="circle" />
            {hobby}
          </Col>
        ))}
      </Row>
      <Container className="gallery">
        {galleryTags.map((tag, index) => (
          <div key={index}
            className={`shadow photo-thumb photo-${index + 1}`}
            onMouseOver={handleHover(index)}
            onClick={handleShow}
          />
        ))}
      </Container>
      {getModal()}
    </>
  );
};

export default HobbyList;