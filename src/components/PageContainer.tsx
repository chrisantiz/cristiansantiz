import React, { CSSProperties, ReactElement } from 'react';

interface Props {
  style?: CSSProperties;
  children: ReactElement | ReactElement[];
  id?: string;
}

export const PageContainer: React.FC<Props> = ({ children, style, id }) => {
  return (
    <>
      {/* <div style={{ height: '56px' }}></div> */}
      <div style={{ ...style }} className="container" id={id}>
        {children}
      </div>
    </>
  );
};
