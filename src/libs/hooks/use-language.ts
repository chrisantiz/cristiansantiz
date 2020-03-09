import { LocaleType } from '../i18n/languages';
import { DataLocale } from '../../models/locale.model';

import esData from '@libs/i18n/locales/es.json';
import enData from '@libs/i18n/locales/en.json';
import { useGlobalState } from './use-global-state';

interface UseLangData {
  lang: DataLocale;
  locale: LocaleType;
  selector<Data = DataLocale, DSelected = unknown>(
    selector: (data: Data) => DSelected,
  ): DSelected;
}

/** use the current language */
export const useLang = (): UseLangData => {
  const { state: { locale } } = useGlobalState();

  const data: DataLocale = locale === 'en' ? enData : esData;

  function selector(cb: any) {
    return cb(data);
  }

  return { lang: data, locale, selector };
};
