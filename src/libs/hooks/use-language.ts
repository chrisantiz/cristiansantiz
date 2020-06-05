import { LocaleType } from '@libs/i18n/languages';
import { DataLocale } from '@models/locale.model';

import esData from '@libs/i18n/locales/es.json';
import enData from '@libs/i18n/locales/en.json';
import { useSelector } from '@libs/context/global/context';

interface UseLangData {
  lang: DataLocale;
  locale: LocaleType;
  selector<Data = DataLocale, DSelected = unknown>(
    selector: (data: Data) => DSelected,
  ): DSelected;
}

/** use the current language */
export const useLang = (): UseLangData => {
  const locale = useSelector(s => s.locale);

  const data: DataLocale = locale === 'en' ? enData : esData;

  function selector(cb: any) {
    return cb(data);
  }

  return { lang: data, locale, selector };
};
