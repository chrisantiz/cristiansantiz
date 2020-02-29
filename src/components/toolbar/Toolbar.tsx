import React, { useMemo } from 'react';
import './toolbar.scss';
import { DrawerToggleButton } from '@components/side-drawer/DrawerToggleButton';
import { ToolbarItems } from '@components/toolbar/ToolbarItems';
import { Link } from 'gatsby';
import { DarkModeButton } from '@components/dark-mode-button/DarkModeButton';
import { GithubIcon, DesktopIcon } from '@components/icons';
import { DropdownLanguages } from '../dropdown-languages/DropdownLanguages';

interface Props {
  changeColorOnScroll: boolean;
  isSmallScreen: boolean;
}

export const Toolbar = React.memo(({ changeColorOnScroll, isSmallScreen }: Props) => {
  // const [renderItems, setRenderItems] = useState(false);
  const staticClasses = 'toolbar toolbar-invert';
  let classes = '';

  // change background color on scrolling
  if (changeColorOnScroll) {
    classes = 'toolbar toolbar-scroll shadow-lg';
  } else {
    classes = staticClasses;
  }

  const items = useMemo(() => {
    return !isSmallScreen ? (
      <ToolbarItems inDrawer={false} className="toolbar-navigation-items invert" />
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
          <Link to="/" title="logo">
            <DesktopIcon width="25px" height="25px" />
          </Link>
        </div>
        <div className="spacer"></div>
        {/* <ToolbarItems className="toolbar-navigation-items invert" /> */}
        {items}
        {/* dark mode button */}
        <DarkModeButton className="ml-2" />
        <DropdownLanguages className="ml-2" />
        {/* go to Github account */}
        <a
          target="_blank"
          className="ml-2"
          title="Cuenta en Github"
          href="https://github.com/crisantizan">
          <GithubIcon width="20px" height="20px" />
        </a>
      </nav>
    </header>
  );
});
