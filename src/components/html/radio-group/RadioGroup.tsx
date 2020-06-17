import React, { useRef } from 'react';
import './Radio.scss';

interface Item {
  label: string;
  value: string;
}

interface Props {
  name: string;
  checked: string;
  items: Item[];
  vertical?: boolean;
  onChange: (value: string) => void;
}

const RadioGroup: React.FC<Props> = ({
  name,
  checked,
  items,
  vertical = false,
  onChange,
}) => {
  const radios = React.useMemo(() => {
    return items.map((item, index) => {
      const id = `radio${String(Date.now()).slice(-4)}${index}`;
      return (
        <div
          className="Radio"
          key={`${name}${index}`}
          role="radio"
          aria-checked={checked === item.value}
          tabIndex={0}>
          <input
            id={id}
            type="radio"
            name={name}
            value={item.value}
            className="Radio__input"
            defaultChecked={checked === item.value}
            onChange={e => onChange(e.target.value)}
          />
          <label htmlFor={id} className="Radio__label" aria-checked="true">
            <span className="Radio__circle"></span>
            {item.label}
          </label>
        </div>
      );
    });
  }, [items]);

  return (
    <div
      className={`flex flex-${vertical ? 'col' : 'row'}`}
      role="radiogroup"
      aria-labelledby="[IDREF]">
      {radios}
    </div>
  );
};

export default RadioGroup;
