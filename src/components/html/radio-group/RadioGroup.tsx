import React, { useCallback } from 'react';
import './Radio.scss';

interface Item {
  label: string;
  value: string;
  checked?: boolean;
}

interface Props {
  name: string;
  items: Item[];
  onChange: (value: string) => void;
}

const RadioGroup: React.FC<Props> = ({ name, items, onChange }) => {
  const radios = React.useMemo(() => {
    return items.map((item, index) => {
      const id = `radio${String(Date.now()).slice(-4)}${index}`;
      return (
        <div
          className="Radio flex items-center mr-4 mb-4"
          key={`${name}${index}`}>
          <input
            id={id}
            type="radio"
            name={name}
            value={item.value}
            className="Radio__input hidden"
            defaultChecked={item.checked}
            onChange={e => onChange(e.target.value)}
          />
          <label
            htmlFor={id}
            className="Radio__label flex items-center cursor-pointer text-base">
            <span className="Radio__circle w-5 h-5 inline-block mr-2 rounded-full border border-gray-500 flex-no-shrink"></span>
            {item.label}
          </label>
        </div>
      );
    });
  }, [items]);

  return <div>{radios}</div>;
};

export default RadioGroup;
