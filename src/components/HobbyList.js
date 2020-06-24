import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

// hobby's num for photos
const galleryTags = [ 1, 6, 3, 8, 2, 6, 0, 2, 6, 3, 0, 6 ];

const HobbyList = () => {
  const { t } = useTranslation();
  const hobbies = t('about.hobbies', { returnObjects: true });
  const [active, setActive] = useState(-1);
  const handleHover = (id) => () => { setActive(galleryTags[id]); };

  return (
    <>
      <p>{t('about.hobbyDescription')}</p>
      <Row className="formatted-list">
        {hobbies.map((hobby, i) => (
          <Col lg={4} sm={6}
            className={`hobby${(active === i) ? ' active' : ''}`}
            key={i}
          >
            <span className="circle" />
            {hobby}
          </Col>
        ))}
      </Row>
      <Container className="gallery">
        {galleryTags.map((tag, i) => (
          <div key={i} className={`shadow photo photo-${i + 1}`} onMouseOver={handleHover(i)}/>
        ))}
      </Container>
    </>
  );
};

export default HobbyList;