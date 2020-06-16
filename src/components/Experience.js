import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import kvant from '../assets/img/kvant-logo.svg';
import mai from '../assets/img/mai-logo.svg';

const Experience = () => {
  const { t } = useTranslation();
  const resp = t('experience.job.responsibilitiesList', { returnObjects: true });

  return (
    <Container className="timeline">
      <h3 className="page_header">{t('experience.subtitle')}</h3>
      <Jumbotron className="exp">
        <Container className="thumb-container">
          <img src={kvant} className="thumbnail" alt="kvant-logo" />
        </Container>
        <Container>
          <h4>{t('experience.job.name')}</h4>
          <h5 className="mb-2 text-muted">{t('experience.job.years')}</h5>
          <h6 className="font-weight-bold">C# developer</h6>
          <h6>{t('experience.job.responsibilities')}:</h6>
          <ul>
            {resp.map((resp, i) => <li key={i}>{resp}</li>)}
          </ul>
        </Container>
      </Jumbotron>
      <Jumbotron className="exp">
        <Container className="thumb-container">
          <img src={mai} className="thumbnail" alt="mai-logo" />
        </Container>
        <Container>
          <h4>{t('experience.institute.name')}</h4>
          <h5 className="mb-2 text-muted">{t('experience.institute.years')}</h5>
          <h6 className="font-weight-bold">{t('experience.institute.degree')}</h6>
        </Container>
      </Jumbotron>
    </Container>
  );
}

export default Experience;