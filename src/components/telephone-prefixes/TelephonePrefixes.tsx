import React, { useState, useEffect } from 'react';
import countries from './data.json';
import './TelephonePrefixes.scss';
import { count } from 'console';
import { useLang } from '@/libs/hooks';
import { useTrackedState } from '@/libs/context/global/context';
import { LocalKey } from '@/libs/enum';
import { ApiLocationResponse } from './telephone-prefixes.type';

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
  const colombiaIndex = countries.findIndex(v => v.iso2 === 'CO');
  const [label, setLabel] = useState('CO (+57)');
  const { locale } = useTrackedState();

  const [selected, setSelected] = useState(colombiaIndex);

  useEffect(() => {
    const item: Prefix = countries[selected];

    setLabelAndEmit(item);
  }, [selected]);

  function setLabelAndEmit(item: Prefix) {
    setLabel(`${item.iso2} (+${item.prefix})`);
    onChange(item.prefix);
  }

  useEffect(() => {
    const autoloadPrefix = async () => {
      try {
        const result = await fetch('/api/location');

        if (!result.ok) {
          throw result;
        }

        const res: ApiLocationResponse = await result.json();

        const countryCode = res.country.code;

        // get object index
        const indexItem = countries.findIndex(v => v.iso2 === countryCode);

        if (indexItem === -1) {
          throw 'Not found';
        }

        const item = countries[indexItem];

        setLabelAndEmit(item);
        setSelected(indexItem);
        // save in localStorage
        localStorage.setItem(LocalKey.COUNTRY_PREFIX, item.iso2);
      } catch (error) {
        console.error(error);
        // default Colombia

        setLabelAndEmit(countries[colombiaIndex]);
      }
    };

    // verify if there's in localStorage
    const countryCode = localStorage.getItem(LocalKey.COUNTRY_PREFIX);

    if (!countryCode) {
      autoloadPrefix();
      console.log('LOAD FROM REMOTE');
      return;
    }

    const index = countries.findIndex(v => v.iso2 === countryCode);

    console.log('LOAD FROM LOCAL');
    index !== colombiaIndex && setSelected(index);
    setLabelAndEmit(countries[index]);
  }, []);

  return (
    <div className="TelephonePrefixes" style={{ width: '8rem' }}>
      <div className="TelephonePrefixes__label">
        <label>{label}</label>
      </div>

      <select
        className="TelephonePrefixes__select"
        style={{ color: 'transparent' }}
        value={selected}
        onChange={e => setSelected(Number(e.target.value))}>
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
