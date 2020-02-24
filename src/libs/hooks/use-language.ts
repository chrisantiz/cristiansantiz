import { useContext } from 'react';
import { RootContext } from '@libs/context/root/root.context';
import { useEnglishData } from './use-english-data';
import { useSpanishData } from './use-spanish-data';
import { changeLocale } from '../context/root/root.actions';

/** use the current language */
export const useLanguage = () => {
  const { getState, dispatch } = useContext(RootContext);
  const locale = getState(state => state.locale);

  const data = locale === 'en' ? useEnglishData() : useSpanishData();

  function toggleLanguage() {
    const newLocal = locale === 'en' ? 'es' : 'en';
    dispatch(changeLocale(newLocal));
  }

  return { lang: data, toggleLang: toggleLanguage };
};
