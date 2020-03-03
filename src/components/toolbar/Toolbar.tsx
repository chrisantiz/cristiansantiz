import React, { useMemo } from 'react';
import { Link } from 'gatsby';
import './toolbar.scss';
import { DrawerToggleButton } from '@components/side-drawer/DrawerToggleButton';
import { ToolbarItems } from '@components/toolbar/ToolbarItems';
import { DarkModeButton } from '@components/dark-mode-button/DarkModeButton';
import { GithubIcon, DesktopIcon } from '@components/icons';
import { DropdownLanguages } from '../dropdown-languages/DropdownLanguages';
import { useLanguage } from '@libs/hooks/use-language';

interface Props {
  changeColorOnScroll: boolean;
  isSmallScreen: boolean;
}

export const Toolbar = React.memo(
  ({ changeColorOnScroll, isSmallScreen }: Props) => {
    const staticClasses = 'toolbar toolbar-invert';
    let classes = '';

    const {
      lang: { labels },
      locale
    } = useLanguage();

    // change background color on scrolling
    if (changeColorOnScroll) {
      classes = 'toolbar toolbar-scroll shadow-lg';
    } else {
      classes = staticClasses;
    }

    const items = useMemo(() => {
      return !isSmallScreen ? (
        <ToolbarItems
          inDrawer={false}
          className="toolbar-navigation-items invert"
        />
      ) : (
        <></>
      );
    }, [isSmallScreen]);

    return (
      <header className={classes}>
        <nav className="toolbar-navigation container">
          <div className="toolbar-button">
            <DrawerToggleButton />
          </div>
          <div className="toolbar-logo">
            <Link to={locale === 'es' ? '/' : `/${locale}`} title="logo">
              <DesktopIcon width="25px" height="25px" />
            </Link>
          </div>
          <div className="spacer"></div>
          {/* <ToolbarItems className="toolbar-navigation-items invert" /> */}
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
  },
);
