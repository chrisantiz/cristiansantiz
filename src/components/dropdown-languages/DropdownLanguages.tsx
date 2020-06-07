import React, { useState, useEffect, useRef } from 'react';
import './dropdown-languages.scss';

import usa from '@/assets/images/usa-flag.svg';
import col from '@/assets/images/colombia-flag.svg';

import { LocaleType } from '@libs/i18n/languages';
import { changeLocale } from '@libs/context/global/actions';
import { I18nIcon } from '../svg-icons';
import { useDispatch, useSelector } from '@/libs/context/global/context';

interface Props {
  className: string;
  title: string;
}

interface LangElement {
  src: any;
  label: 'Español' | 'English';
  locale: LocaleType;
  isActive: boolean;
  alt: string;
  key: number;
}

const initialData: LangElement[] = [
  {
    src: col,
    label: 'Español',
    locale: 'es',
    isActive: true,
    alt: 'Colombia flag',
    key: 1,
  },
  {
    src: usa,
    label: 'English',
    locale: 'en',
    isActive: false,
    alt: 'EE.UU flag',
    key: 2,
  },
];

const DropdownLanguages = ({ className, title }: Props) => {
  const dispatch = useDispatch();
  const locale = useSelector(s => s.locale);

  /** dropdown items data */
  const [langElements, setLangElements] = useState<LangElement[]>(initialData);

  /** lang selected, also serves as label to display next to the button */
  const [localeSelected, setLocaleSelected] = useState<LocaleType>('es');
  /** indicates if display or hide the dropdown element */
  const [showList, setShowList] = useState<boolean>(false);
  /** html element of dropdown */
  const refList = useRef<HTMLDivElement>(null);

  /** when select a language */
  const handleClickSelect = (key: number, index: number) => {
    // if element is already active
    if (langElements[index].isActive) {
      return;
    }

    const { locale } = langElements[index];

    setLocaleSelected(locale);

    setLangElements(
      langElements.map(e => ({
        ...e,
        isActive: e.key === key,
      })),
    );

    // hide dropdown
    setShowList(false);
    // update global state and navigate from him
    dispatch(changeLocale(locale));
  };

  useEffect(() => {
    // pre-load
    if (locale !== localeSelected) {
      setLocaleSelected(locale);

      setLangElements(
        langElements.map(e => ({
          ...e,
          isActive: e.locale === locale,
        })),
      );
    }
  }, [locale]);

  /** close dropdown clicking outside */
  useEffect(() => {
    function handleClickOutside(event: Event) {
      // clicked outside
      if (
        refList.current &&
        !refList.current.contains(event.target as HTMLElement)
      ) {
        setShowList(false);
      }

      return false;
    }

    // add event only when the dropdown is open
    if (showList) {
      document.addEventListener('click', handleClickOutside);
    }

    // remove event
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showList]);

  /** show/hide box */
  const handleClickButton = () => setShowList(!showList);

  return (
    <div className={`Dropdown-languages ${className}`}>
      <div
        className="Dropdown-languages__icon"
        title={title}
        onClick={handleClickButton}>
        <I18nIcon className="svg-icon toolbar-icon" />
        <span className="Dropdown-languages__label">
          {localeSelected.toUpperCase()}
        </span>
      </div>
      <div
        ref={refList}
        className={
          showList
            ? 'Dropdown-languages__content open'
            : 'Dropdown-languages__content'
        }>
        {langElements.map((val, index) => (
          <div
            className={`Dropdown-languages__item ${
              val.isActive ? 'active' : ''
            }`}
            onClick={() => handleClickSelect(val.key, index)}
            key={val.key}>
            <img src={val.src} className="w-5" alt={val.alt} />
            <span className="Dropdown-languages__item-label">{val.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(DropdownLanguages);
