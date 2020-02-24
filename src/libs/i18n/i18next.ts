import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { lang as languages } from './languages';

/** i18n instance */
i18next.use(LanguageDetector).init({
  debug: false,
  fallbackLng: languages.spanish,
  initImmediate: false,
  keySeparator: false,
  whitelist: [languages.spanish, languages.english],
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

export default i18next;
