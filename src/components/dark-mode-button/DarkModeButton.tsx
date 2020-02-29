import React, { useState } from 'react';
import './dark-mode-button.scss';
import { SunIcon, MoonIcon } from '../icons';

interface Props {
  className?: string;
  title: string;
}

export const DarkModeButton = ({className, title}: Props) => {
  const [darkMode, toggleDarkMode] = useState(false);

  function toggleClasses() {
    toggleDarkMode(!darkMode);
    document.body.classList.toggle('dark');
  }

  return (
    <button
      className={`dmb-switch ${className} ${darkMode ? 'active' : ''}`}
      title={title}
      onClick={() => toggleClasses()}>
      <SunIcon />
      <MoonIcon />
    </button>
  );
};
