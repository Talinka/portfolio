import i18n from 'i18next';
import { initReactI18next } from "react-i18next";

import enTranslation from '../locales/en';
import czTranslation from '../locales/cz';

const resources = {
  en: enTranslation,
  cz: czTranslation,
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    debug: process.env.NODE_ENV !== 'production',
    react: {
      wait: true,
    },
  });

export default i18n;

