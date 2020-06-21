import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Col, Row, Button } from 'react-bootstrap';
import projects from '../assets/projects';


const Projects = () => {
  const { t } = useTranslation();

  return (
    <>
      <h3 className="page-header">{t('projects.subtitle')}</h3>
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
              </Card.Body>
            </Card>
            <div className="addInfo">
                <Button href={githubLink} target="_blank">GitHub</Button>
                {link && <Button href={link} target="_blank">Demo</Button>}
            </div>
          </Col>
        ))}
      </Row>
      <a className="d-block text-center" href="https://github.com/Talinka/portfolio" alt="portfolio sources">{t('projects.portfolio')}</a>
    </>
  );
}

export default Projects;