import React from 'react';
import { IconProps } from './icons.model';

export const DesktopIcon = (props: IconProps) => {
  let defaultClasses = 'fill-current';
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="desktop"
      width={props.width || '20px'}
      height={props.height || '20px'}
      className={`${defaultClasses} ${props.className}`}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512">
      <path d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"></path>
    </svg>
  );
};
