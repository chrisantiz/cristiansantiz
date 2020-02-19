import React from 'react';
import './toolbar.scss';
import { DrawerToggleButton } from '../side-drawer/DrawerToggleButton';
import { ToolbarItems } from './ToolbarItems';

export const Toolbar = ({
  drawerHandleClick,
  changeColorOnScroll,
  transparent,
}: any) => {
  const staticClasses = `toolbar ${
    transparent ? 'bg-transparent' : 'bg-blue-900'
  }`;

  let classes = '';

  // change background color on scrolling
  if (changeColorOnScroll) {
    classes = 'toolbar bg-color';
  } else {
    classes = staticClasses;
  }

  return (
    <header className={classes}>
      <nav className="toolbar-navigation container px-3 mx-auto sm:px-0">
        <div className="toolbar-button">
          <DrawerToggleButton onClick={drawerHandleClick} />
        </div>
        <div className="toolbar-logo">
          <a href="#">LOGO</a>
        </div>
        <div className="spacer"></div>
        <ToolbarItems className="toolbar-navigation-items" />
      </nav>
    </header>
  );
};
