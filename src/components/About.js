import React from 'react';
import talita from '../assets/img/talita.jpg';
import { useTranslation } from 'react-i18next';
import HobbyList from './HobbyList';
import { Row, Col } from 'react-bootstrap';
import socials from '../assets/socials';

const About = (props) => {
  const { t } = useTranslation();
  const aboutList = t('about.aboutDescription', { returnObjects: true });
  const getSocial = ({ url, text, icon }, key) => (
    <div key={key}>
      <img src={icon} alt={text} className="social-icon" />
      <a href={url}>{text}</a>
    </div>
  );

  return (
    <>
      <h3 className="page-header">{t('about.aboutTitle')}</h3>
      <section>
        <img src={talita} alt="personal_photo" className="personal-photo" />
        {
          aboutList.map((text, i) => <p key={i}>{text}</p>)
        }
      </section>
      <section>
        <h3>{t('about.hobbyTitle')}</h3>
        <HobbyList />
      </section>
      <section>
        <h3>{t('about.contactTitle')}</h3>
        <p>{t('about.contactDescription')}</p>
        <Row className="formatted-list">
          <Col>
            {[socials.email, socials.gitHub, socials.linkedIn]
              .map((contact, i) => getSocial(contact, i))}
          </Col>
          <Col>
            {getSocial(socials.instagram)}
          </Col>
        </Row>
      </section>
    </ >
  );
}

export default About;