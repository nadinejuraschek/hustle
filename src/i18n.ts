import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationDE from "./locales/de/translation.json";
import translationEN from "./locales/en/translation.json";

const resources = {
 en: {
   translation: translationEN,
 },
 de: {
   translation: translationDE,
 },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'de',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    react: {
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
    },
    resources,
  });

export default i18n;
