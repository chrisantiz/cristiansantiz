import React, { ReactText } from 'react';

interface Props {
  children: string | number | ReactText | ReactText[];
  className?: string;
  /** magic animation type */
  animation: string;
  /** wow animation delay */
  animationDelay?: string;
}

/** paragraph to use on landing page, allow animations */
export const Paragraph: React.FC<Props> = ({
  children,
  animation,
  className,
  animationDelay,
}) => (
  <p
    className={`wow magictime ${animation} text-justify ${className}`}
    data-wow-delay={animationDelay}>
    {children}
  </p>
);
