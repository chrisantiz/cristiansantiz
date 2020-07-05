import React, { useState, useEffect, useRef } from 'react';
import { errorValidate } from '@/helpers/error-validate.helper';

interface Rule {
  handler: (v: string) => boolean;
  message: string;
}

interface Validator {
  isError: boolean;
  message: string;
}

interface Props extends InputHTMLComponent {
  onType: (value: string) => void;
  rules?: Rule[];
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ onType, rules = [], ...props }, refParent) => {
    const [error, setError] = useState<Validator>({
      isError: false,
      message: '',
    });

    const [value, setValue] = useState('');
    const [touched, setTouched] = useState(false);
    const ref = React.createRef<HTMLInputElement>();

    function validate(v: string) {
      if (!touched) return;

      errorValidate(v, rules, (isError, message) => {
        setError({ isError, message });
      });
    }

    // emit value and valide on type
    useEffect(() => {
      if (!!value && !touched) setTouched(true);

      onType(value);
      validate(value);
    }, [value, touched]);

    // update errors when change language
    useEffect(() => {
      validate(value);
    }, [rules]);

    // show error on first blur
    useEffect(() => {
      const input = !!refParent
        ? (refParent as React.RefObject<HTMLInputElement>).current!
        : ref.current!;

      function onBlur() {
        if (!touched) {
          setTouched(true)
        }
      }

      input.addEventListener('blur', onBlur);

      return () => input.removeEventListener('blur', onBlur);
    }, [touched]);

    return (
      <div className="w-full">
        <input
          {...props}
          onChange={e => setValue(e.target.value)}
          ref={refParent || ref}></input>

        {error.isError && <span className="label-error">{error.message}</span>}
      </div>
    );
  },
);

export default Input;
