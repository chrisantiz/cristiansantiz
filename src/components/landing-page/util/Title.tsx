import React from 'react';

interface Props {
  children: string;
  className?: string;
  /** magic animation type */
  animation: string;
  /** wow animation delay */
  animationDelay?: string;
}

export const Title: React.FC<Props> = ({
  children,
  animation,
  className,
  animationDelay,
}) => (
  <h2
    className={`wow magictime ${animation} text-2xl text-center text-warning font-semibold ${className}`}
    data-wow-delay={animationDelay}>
    {children}
  </h2>
);
