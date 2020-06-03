import React, { CSSProperties, ReactElement } from 'react';

interface Props {
  style?: CSSProperties;
  className?: string;
  children: ReactElement | ReactElement[];
  id?: string;
}

export const PageContainer: React.FC<Props> = ({
  children,
  style,
  id,
  className,
}) => {
  return (
    <section
      style={{ ...style }}
      className={`container ${className || ''}`}
      id={id}>
      {children}
    </section>
  );
};
