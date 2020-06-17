import React, { useState, useEffect } from 'react';
import countries from './data.json';
import './TelephonePrefixes.scss';
import { count } from 'console';
import { useLang } from '@/libs/hooks';
import { useTrackedState } from '@/libs/context/global/context';
import { LocalKey } from '@/libs/enum';

interface Props {
  onChange: (prefix: string) => void;
}

interface Prefix {
  nombre: string;
  name: string;
  iso2: string;
  prefix: string;
}

// http://api.wipmania.com/jsonp?callback=?

const TelephonePrefixes: React.FC<Props> = ({ onChange }) => {
  const { locale } = useTrackedState();
  const [label, setLabel] = useState('');

  function selectChange(e: any) {
    const item: Prefix = countries[e.target.value];

    setLabel(`${item.iso2} (+${item.prefix})`);
    onChange(item.prefix);
  }

  function setLabelAndEmit(item: Prefix) {
    setLabel(`${item.iso2} (+${item.prefix})`);
    onChange(item.prefix);
  }

  useEffect(() => {
    const autoloadPrefix = async () => {
      try {
        const result = await fetch('http://www.geoplugin.net/json.gp');

        if (!result.ok) {
          throw result;
        }

        const res = await result.json();

        const countryCode = res.geoplugin_countryCode;

        // get object
        const item = countries.find(v => v.iso2 === countryCode);

        if (typeof item === 'undefined') {
          throw 'Not found';
        }

        setLabelAndEmit(item);

        // save in localStorage
        localStorage.setItem(LocalKey.COUNTRY_PREFIX, item.iso2);
      } catch (error) {
        console.error(error);
        // default Colombia
        const item = countries.find(v => v.iso2 === 'CO')!;

        setLabelAndEmit(item);
      }
    };

    // verify if there's in localStorage
    const countryCode = localStorage.getItem(LocalKey.COUNTRY_PREFIX);

    if (!countryCode) {
      autoloadPrefix();
      console.log('LOAD FROM REMOTE');
      return;
    }

    console.log('LOAD FROM LOCAL');
    // get object
    const item = countries.find(v => v.iso2 === countryCode)!;
    setLabelAndEmit(item);
  }, []);

  return (
    <div className="TelephonePrefixes" style={{ width: '8rem' }}>
      <div className="TelephonePrefixes__label">
        <label>{label}</label>
      </div>

      <select
        className="TelephonePrefixes__select"
        style={{ color: 'transparent' }}
        onChange={selectChange}>
        {countries.map((country, index) => {
          return (
            <option key={country.iso2} value={index}>
              {locale === 'es' ? country.nombre : country.name}
            </option>
          );
        })}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};

export default TelephonePrefixes;
