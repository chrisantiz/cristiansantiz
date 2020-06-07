import React, { useState, useEffect } from 'react';
import './dark-mode-button.scss';
import { SunIcon, MoonIcon } from '../svg-icons';
import { LocalKey } from '@libs/enum';
import { useSelector } from '@/libs/context/global/context';

interface Props {
  className?: string;
  title: string;
}

const DarkModeButton = ({ className, title }: Props) => {
  const initialDarkMode = useSelector(s => s.initialDarkMode);

  const [darkMode, toggleDarkMode] = useState(false);

  function toggleClasses() {
    toggleDarkMode(!darkMode);
    document.body.classList.toggle('dark');
    // persist in localStorage
    localStorage.setItem(LocalKey.DARK_MODE, JSON.stringify(!darkMode));
  }

  /** get classes according to "active" prop */
  function getClasses() {
    return 'Dark-mode-button'.concat(darkMode ? ' active' : '');
  }

  useEffect(() => {
    if (initialDarkMode) {
      toggleDarkMode(initialDarkMode);
    }
  }, [initialDarkMode]);

  return (
    <button
      className={getClasses()}
      title={title}
      onClick={() => toggleClasses()}>
      <SunIcon className="Dark-mode-button__icon" />
      <MoonIcon className="Dark-mode-button__icon" />
    </button>
  );
};

export default React.memo(DarkModeButton);
