import React from 'react';

interface Props {
  rows?: number;
  placeholder?: string;
  onChange: (value: string) => void;
}

const Textarea: React.FC<Props> = ({ rows, placeholder, onChange }) => {
  return (
    <textarea
      rows={rows || 3.5}
      placeholder={placeholder || 'Type a message'}
      className="textarea"
      onChange={e => onChange(e.target.value)}></textarea>
  );
};

export default Textarea;
