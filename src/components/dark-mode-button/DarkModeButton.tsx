import React, { useState } from 'react';
import './dark-mode-button.scss';
import { SunIcon, MoonIcon } from '../icons';

interface Props {
  className?: string;
}

export const DarkModeButton = ({className}: Props) => {
  const [darkMode, toggleDarkMode] = useState(false);

  function toggleClasses() {
    toggleDarkMode(!darkMode);
    document.body.classList.toggle('dark');
  }

  return (
    <button
      className={`dmb-switch ${className} ${darkMode ? 'active' : ''}`}
      title="Modo nocturno"
      onClick={() => toggleClasses()}>
      <SunIcon />
      <MoonIcon />
    </button>
  );
};
