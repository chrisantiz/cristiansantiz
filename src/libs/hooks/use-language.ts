import { useContext } from 'react';
import { RootContext } from '@libs/context/root/root.context';
import { LocaleType } from '../i18n/languages';
import { DataLocale } from '../../models/locale.model';

import esData from '@libs/i18n/locales/es.json';
import enData from '@libs/i18n/locales/en.json';

interface UseLangData {
  lang: DataLocale;
  locale: LocaleType;
  selector<Data = DataLocale, DSelected = unknown>(
    selector: (data: Data) => DSelected,
  ): DSelected;
}

/** use the current language */
export const useLang = (): UseLangData => {
  const { getState } = useContext(RootContext);
  const locale = getState(state => state.locale);

  const data: DataLocale = locale === 'en' ? enData : esData;

  function selector(cb: any) {
    return cb(data);
  }

  return { lang: data, locale, selector };
};
