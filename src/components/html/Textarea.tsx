import React from 'react';

interface Props extends TextAreaHTMLComponent {
  onType: (value: string) => void;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
  ({ onType, ...props }, ref) => {
    return (
      <textarea
        {...props}
        onChange={e => onType(e.target.value)}
        ref={ref}></textarea>
    );
  },
);

export default Textarea;
