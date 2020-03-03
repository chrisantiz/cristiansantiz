import { useContext, useState } from 'react';
import { RootContext } from '@libs/context/root/root.context';
import { useEnglishData } from './use-english-data';
import { useSpanishData } from './use-spanish-data';
import { changeLocale } from '../context/root/root.actions';
import { LocaleType } from '../i18n/languages';
import { DataLocale } from '../../models/locale.model';

import esData from '@libs/i18n/locales/es.json';
import enData from '@libs/i18n/locales/en.json';

/** use the current language */
export const useLanguage = () => {
  const { getState, dispatch } = useContext(RootContext);
  const locale = getState(state => state.locale);
  // const [data, setData] = useState<DataLocale>();

  // setData(locale === 'en' ? useEnglishData() : useSpanishData());

  const data = locale === 'en' ? useEnglishData() : useSpanishData();

  function changeLanguage(locale: LocaleType) {
    dispatch(changeLocale(locale));
  }

  return { lang: data as DataLocale, changeLang: changeLanguage, locale };
};

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
