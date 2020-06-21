import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import kvantLogo from '../assets/img/icons/kvant-logo.svg';
import maiLogo from '../assets/img/icons/mai-logo.svg';
import hexletLogo from '../assets/img/icons/hexlet-logo.png';

const Experience = () => {
  const { t } = useTranslation();
  const resp = t('experience.job.responsibilitiesList', { returnObjects: true });

  return (
    <>
      <h3 className="page-header">{t('experience.subtitle')}</h3>
      <h4>{t('experience.courses.title')}</h4>
      <Jumbotron className="shadow">
        <Container className="thumb-container">
          <img src={hexletLogo} className="thumbnail" alt="hexlet-logo" />
        </Container>
        <Container>
          <span className="h5">Full front-end delevoper course, </span>
          <span className="h5 mb-2 text-muted">2019-2020, </span>
          <a href="https://ru.hexlet.io/u/talita">Hexlet.io</a>
          <hr />
          <span className="h5">Front-end development and JavaSpript, </span>
          <span className="h5 mb-2 text-muted">2018, </span>
          <a href="https://www.coursera.org/specializations/razrabotka-interfeysov">Coursera.org</a>
        </Container>
      </Jumbotron>
      <h4>{t('experience.job.title')}</h4>
      <Jumbotron className="shadow">
        <Container className="thumb-container">
          <img src={kvantLogo} className="thumbnail" alt="kvant-logo" />
        </Container>
        <Container>
          <h5>{t('experience.job.name')}</h5>
          <h5 className="mb-2 text-muted">2004-2014</h5>
          <h6 className="font-weight-bold">C# developer</h6>
          <h6>{t('experience.job.responsibilities')}:</h6>
          <ul>
            {resp.map((resp, i) => <li key={i}>{resp}</li>)}
          </ul>
        </Container>
      </Jumbotron>
      <h4>{t('experience.institute.title')}</h4>
      <Jumbotron className="shadow">
        <Container className="thumb-container">
          <img src={maiLogo} className="thumbnail" alt="mai-logo" />
        </Container>
        <Container>
          <h5>{t('experience.institute.name')}</h5>
          <h5 className="mb-2 text-muted">1999-2005</h5>
          <h6 className="font-weight-bold">{t('experience.institute.degree')}</h6>
        </Container>
      </Jumbotron>
    </>
  );
}

export default Experience;