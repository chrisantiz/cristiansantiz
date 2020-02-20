import React, { CSSProperties, ReactElement } from 'react';

interface Props {
  style?: CSSProperties;
  /** add 56px of the padding top */
  paddingTop?: boolean;
  children: ReactElement | ReactElement[];
}

export const PageContainer = ({ children, style, paddingTop = true }: Props) => {
  const customPadding = paddingTop ? { paddingTop: '56px' } : {};
  return (
    <div
      style={{ ...style, ...customPadding }}
      className="container px-3 mx-auto sm:px-0">
      {children}
    </div>
  );
};
