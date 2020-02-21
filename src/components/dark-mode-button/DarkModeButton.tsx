import React from 'react';
import './dark-mode-button.scss';
import { SunIcon, MoonIcon } from '../icons';

export const DarkModeButton = () => {
  return (
    <button className="dmb-switch">
      <span>
        <SunIcon className="h-5 w-5" />
      </span>
      <span>
        <MoonIcon />
      </span>
    </button>
  );
};
