import React, { useState, useEffect } from 'react';
import './dark-mode-button.scss';
import { SunIcon, MoonIcon } from '../icons';
import { LocalKey } from '@libs/enum';
import { useGlobalState } from '@/libs/hooks/use-global-state';

interface Props {
  className?: string;
  title: string;
}

export const DarkModeButton = ({ className, title }: Props) => {
  const { state: { initialDarkMode } } = useGlobalState();

  const [darkMode, toggleDarkMode] = useState(false);

  function toggleClasses() {
    toggleDarkMode(!darkMode);
    document.body.classList.toggle('dark');
    // persist in localStorage
    localStorage.setItem(LocalKey.DARK_MODE, JSON.stringify(!darkMode));
  }

  useEffect(() => {
    if (initialDarkMode) {
      toggleDarkMode(initialDarkMode);
    }
  }, [initialDarkMode]);

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
