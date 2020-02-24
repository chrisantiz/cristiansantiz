import { useContext } from 'react';
import { RootContext } from '@libs/context/root/root.context';
import { useEnglishData } from './use-english-data';
import { useSpanishData } from './use-spanish-data';
import { changeLocale } from '../context/root/root.actions';
import { LocaleType } from '../i18n/languages';

/** use the current language */
export const useLanguage = () => {
  const { getState, dispatch } = useContext(RootContext);
  const locale = getState(state => state.locale);

  const data = locale === 'en' ? useEnglishData() : useSpanishData();

  function changeLanguage(locale: LocaleType) {
    dispatch(changeLocale(locale));
  }

  return { lang: data, changeLang: changeLanguage };
};
