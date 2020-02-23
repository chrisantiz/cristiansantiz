import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { lang } from './languages';

i18n.use(LanguageDetector).init({
  debug: false,
  fallbackLng: lang.spanish,
  initImmediate: false,
  keySeparator: false,
  whitelist: [lang.spanish, lang.english],
  interpolation: {
    escapeValue: false,
  },
  resources: {
    es: { translation: require('./locales/es.json') },
    en: { translation: require('./locales/en.json') },
  },
  react: {
    useSuspense: false,
  },
});

/** i18n instance */
export default i18n;
