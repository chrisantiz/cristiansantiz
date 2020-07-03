import React from 'react';

interface Props {
  placeholder: string;
  onChange: (value: string) => void;
}

const InputNumber: React.FC<Props> = ({ placeholder, onChange }) => {
  function onlyNumbers(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!/^[0-9]+$/.test(e.key)) {
      e.preventDefault();
    }
  }

  return (
    <input
      type="text"
      placeholder={placeholder}
      onKeyPress={onlyNumbers}
      onChange={e => onChange(e.target.value)}
    />
  );
};

export default InputNumber;
