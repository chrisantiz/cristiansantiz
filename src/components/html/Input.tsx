import React, { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

interface Props
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  onType: (value: string) => void;
}

const Input = React.forwardRef<HTMLInputElement, Props>(({ onType, ...props }, ref) => {
  return <input {...props} onChange={e => onType(e.target.value)} ref={ref}></input>;
});

export default Input;
