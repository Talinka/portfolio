import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Col, Row, Button } from 'react-bootstrap';
import projects from '../assets/projects';


const Projects = () => {
  const { t } = useTranslation();

  const createUseList = (use) => {
    if (!use) {
      return null;
    }
    return (
      <>
        <h5>{t('projects.frameworks')}</h5>
        <ul>
          {use.map((tech, i) => <li key={i}>{tech}</li>)}
        </ul>
      </>
    );
  }

  return (
    <>
      <h3 className="page-header">{t('projects.subtitle')}</h3>
      <p>{t('projects.description')}</p>
      <p>
        {t('projects.portfolio.info')}<br/>
        <a href="https://github.com/Talinka/portfolio" alt="portfolio sources">
          {t('projects.portfolio.link')}
        </a>
      </p>
      <p>{t('projects.portfolio.description')}</p>
      {<ul>
        {t(`projects.portfolio.use`, { returnObjects: true }).map(({ tech, goal }, i) =>
          <li key={i}><b>{tech}</b> {goal}</li>
        )}
      </ul>
      }
      <Row>
        {projects.map(({ id, name, githubLink, link }) => (
          <Col key={id} lg={6} className="base-col">
            <Card className="shadow overlayed">
              <Card.Body>
                <Card.Title>{t(`projects.${name}.title`)}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{t(`projects.${name}.subtitle`)}</Card.Subtitle>
                <Card.Text>
                  {t(`projects.${name}.description`)}
                </Card.Text>
                {createUseList(t(`projects.${name}.use`, { returnObjects: true }))}
              </Card.Body>
            </Card>
            <div className="addInfo">
              <Button href={githubLink} target="_blank">GitHub</Button>
              {link && <Button href={link} target="_blank">Demo</Button>}
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Projects;