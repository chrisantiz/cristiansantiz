import { Index } from '../../models/shared.model';

interface Props {
  default: boolean;
  path: string;
  locale: string;
  dateFormat: string;
  siteLanguage: string;
  ogLanguage: string;
  defaultTitle: string;
}

const config: Index<Props> = {
  es: {
    default: true,
    path: `es`,
    locale: `es-CO`,
    dateFormat: `DD/MM/YYYY`,
    siteLanguage: `es`,
    ogLanguage: `en_CO`,
    defaultTitle: `Usando i18n con Gatsby`,
  },
  en: {
    default: false,
    path: `en`,
    locale: `en-US`,
    dateFormat: `DD/MM/YYYY`,
    siteLanguage: `en`,
    ogLanguage: `en_CO`,
    defaultTitle: `Using i18n with Gatsby`,
  },
};

export default config;
