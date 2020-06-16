import React from 'react';
import {
  ToggleButtonGroup,
  ToggleButton,
} from 'react-bootstrap';

import { useTranslation } from 'react-i18next'

const LangToogler = () => {
  const { i18n } = useTranslation();
  const handleChange = (lang) => {
    i18n.changeLanguage(lang);
  }
  return (
    <ToggleButtonGroup type="radio" name="lang" className="toggler" defaultValue={'en'} onChange={handleChange}>
      <ToggleButton value={'en'} variant="link">en</ToggleButton>
      <span className="vl" />
      <ToggleButton value={'cz'} variant="link">cz</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default LangToogler;