import React from 'react';
import talita from '../assets/img/talita.jpg';
import { useTranslation } from 'react-i18next';
import HobbyList from './HobbyList';

const About = (props) => {
  const { t } = useTranslation();
  const aboutList = t('about.aboutMe', { returnObjects: true });

  return (
    <>
      <h3 className="page-header">{t('about.subtitle')}</h3>
      <div>
        <img src={talita} alt="personal_photo" className="personal-photo" />
        {
          aboutList.map((text, i) => <p key={i}>{text}</p>)
        }
      </div>
      <hr />
      <HobbyList />
    </ >
  );
}

export default About;