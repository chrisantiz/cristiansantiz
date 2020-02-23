import React, { useContext } from 'react';
import './toolbar.scss';
import { DrawerToggleButton } from '../side-drawer/DrawerToggleButton';
import { ToolbarItems } from './ToolbarItems';
import { RootContext } from '../../libs/context/root/root.context';
import { Link } from 'gatsby';
import { DarkModeButton } from '../dark-mode-button/DarkModeButton';
import { GithubIcon, DesktopIcon } from '../icons';

export const Toolbar = ({ changeColorOnScroll }: any) => {
  const { getState } = useContext(RootContext);
  const transparent = getState(state => state.toolbarTransparent);

  const staticClasses = `toolbar ${!transparent ? 'toolbar-invert' : ''}`;

  let classes = '';
  let itemsClasess = transparent ? '' : 'invert';

  // change background color on scrolling
  if (changeColorOnScroll) {
    classes = `toolbar toolbar-scroll ${!transparent ? 'shadow-lg' : ''}`;
  } else {
    classes = staticClasses;
  }

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
        <ToolbarItems className={`toolbar-navigation-items ${itemsClasess}`} />
        {/* dark mode button */}
        <DarkModeButton className="ml-2" />
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
};
