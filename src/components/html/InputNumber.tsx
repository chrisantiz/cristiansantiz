import React from 'react';

interface Props extends InputHTMLComponent {
  onType: (value: string) => void;
}

const InputNumber = React.forwardRef<HTMLInputElement, Props>(
  ({ onType, ...props }, ref) => {
    function onlyNumbers(e: React.KeyboardEvent<HTMLInputElement>) {
      if (!/^[0-9]+$/.test(e.key)) {
        e.preventDefault();
      }
    }

    return (
      <input
        {...props}
        onKeyPress={onlyNumbers}
        onChange={e => onType(e.target.value)}
        ref={ref}
      />
    );
  },
);

export default InputNumber;
