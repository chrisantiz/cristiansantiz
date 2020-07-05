import React from 'react';

interface Props extends HTMLComponent<HTMLInputElement> {
  onType: (value: string) => void;
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ onType, ...props }, ref) => {
    return (
      <input
        {...props}
        onChange={e => onType(e.target.value)}
        ref={ref}></input>
    );
  },
);

export default Input;
