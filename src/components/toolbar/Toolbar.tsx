import React, { useMemo } from 'react';
// import { Link } from 'gatsby';
import { Link } from 'react-scroll';
import './toolbar.scss';
import { DrawerToggleButton } from '@components/side-drawer/DrawerToggleButton';
import { ToolbarItems } from '@components/toolbar/ToolbarItems';
import { DarkModeButton } from '@components/dark-mode-button/DarkModeButton';
import { GithubIcon, DesktopIcon } from '@components/icons';
import { DropdownLanguages } from '../dropdown-languages/DropdownLanguages';
import { useLang } from '@libs/hooks/use-language';

interface Props {
  // changeColorOnScroll: boolean;
  isSmallScreen: boolean;
}

export const Toolbar = ({ isSmallScreen }: Props) => {
  const staticClasses = 'toolbar toolbar-invert';
  // let classes = '';

  const {
    lang: { labels },
  } = useLang();

  // change background color on scrolling
  // if (changeColorOnScroll) {
  //   classes = 'toolbar toolbar-scroll shadow-lg';
  // } else {
  //   classes = staticClasses;
  // }

  const items = useMemo(() => {
    return !isSmallScreen ? (
      <ToolbarItems className="toolbar-navigation-items invert" />
    ) : (
      <></>
    );
  }, [isSmallScreen]);

  return (
    <header className={staticClasses}>
      <nav className="toolbar-navigation container">
        <div className="toolbar-button">
          <DrawerToggleButton />
        </div>
        <div className="toolbar-logo">
          <Link to="inicio" smooth className="cursor-pointer" title="logo">
            <DesktopIcon width="25px" height="25px" />
          </Link>
        </div>
        <div className="spacer"></div>
        {items}
        {/* dark mode button */}
        <DarkModeButton className="ml-2" title={labels.darkModeBtn} />
        <DropdownLanguages className="ml-2" title={labels.i18nButton} />
        {/* go to Github account */}
        <a
          target="_blank"
          className="ml-2"
          title={labels.githubBtn}
          href="https://github.com/crisantizan">
          <GithubIcon width="20px" height="20px" />
        </a>
      </nav>
    </header>
  );
};
