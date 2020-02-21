import React, { useState } from 'react';
import './dark-mode-button.scss';
import { SunIcon, MoonIcon } from '../icons';

export const DarkModeButton = () => {
  const [darkMode, toggleDarkMode] = useState(false);

  function toggleClasses() {
    toggleDarkMode(!darkMode);
    document.body.classList.toggle('dark');
  }

  return (
    <button
      className={`dmb-switch ${darkMode ? 'active' : ''}`}
      onClick={() => toggleClasses()}>
      <SunIcon />
      <MoonIcon />
    </button>
  );
};
