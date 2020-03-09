import React, { CSSProperties, ReactElement } from 'react';

interface Props {
  style?: CSSProperties;
  children: ReactElement | ReactElement[];
}

export const PageContainer = ({ children, style }: Props) => {
  return (
    <>
      {/* <div style={{ height: '56px' }}></div> */}
      <div style={{ ...style }} className="container">
        {children}
      </div>
    </>
  );
};
