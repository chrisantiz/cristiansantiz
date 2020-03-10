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
    <>
      {/* <div style={{ height: '56px' }}></div> */}
      <div style={{ ...style }} className={`container ${className}`} id={id}>
        {children}
      </div>
    </>
  );
};
