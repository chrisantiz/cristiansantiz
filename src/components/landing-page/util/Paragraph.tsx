import React, { ReactText } from 'react';

interface Props {
  children: string | number | ReactText | ReactText[];
  className?: string;
}

/** paragraph to use on landing page, allow animations */
const Paragraph: React.FC<Props> = ({ children, className }) => (
  <p className={`text-justify ${className}`}>{children}</p>
);

export default Paragraph;
