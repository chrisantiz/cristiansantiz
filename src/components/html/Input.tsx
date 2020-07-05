import React, { useState } from 'react';

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
  ({ onType, rules, ...props }, ref) => {
    const [error, setError] = useState<Validator>({
      isError: false,
      message: '',
    });

    function onChange(v: string) {
      onType(v);

      if (!rules || !rules.length) return;

      for (const error of rules) {
        if (!error.handler(v)) {
          setError({
            isError: true,
            message: error.message,
          });

          break;
        } else {
          setError({
            isError: false,
            message: '',
          });
        }
      }
    }

    return (
      <div className="w-full">
        <input
          {...props}
          onChange={e => onChange(e.target.value)}
          ref={ref}></input>

        {error.isError && (
          <span className="label-error">{error.message}</span>
        )}
      </div>
    );
  },
);

export default Input;
