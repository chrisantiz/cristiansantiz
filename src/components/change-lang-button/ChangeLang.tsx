import React, { useState } from 'react';
import './change-lang.scss';
import { GlobeIcon } from '../icons';

import usa from '@/images/usa-flag.svg';
import col from '@/images/colombia-flag.svg';
import { LocaleType } from '../../libs/i18n/languages';

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

export const ChangeLangButton = ({ className }: { className: string }) => {
  const [langElements, setLangElements] = useState<LangElement[]>(initialData);
  const [localeSelected, setLocaleSelected] = useState<LocaleType>('es');

  const handleClickSelect = (key: number, index: number) => {
    // if element is already active
    if (langElements[index].isActive) {
      return;
    }

    setLocaleSelected(langElements[index].locale);

    setLangElements(
      langElements.map(e => ({
        ...e,
        isActive: e.key === key,
      })),
    );
  };

  return (
    <div className={`box ${className}`}>
      <div className="icon" title="Cambiar de idioma">
        <GlobeIcon />
        <span>{localeSelected.toUpperCase()}</span>
      </div>
      <div className="list">
        {langElements.map((val, index) => (
          <div
            className={`lang ${val.isActive ? 'active' : ''}`}
            onClick={() => handleClickSelect(val.key, index)}
            key={val.key}>
            <img src={val.src} className="w-5" alt={val.alt} />
            <span>{val.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
