import React from 'react';

interface Props {
  children: string;
  className?: string;
}

const Title: React.FC<Props> = ({ children, className }) => (
  <h2
    className={`text-2xl text-center text-warning font-semibold ${className}`}>
    {children}
  </h2>
);

export default Title;
