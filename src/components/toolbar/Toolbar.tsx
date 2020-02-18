import React from 'react';
import './toolbar.scss';
import { DrawerToggleButton } from '../side-drawer/DrawerToggleButton';
import { ToolbarItems } from './ToolbarItems';

export const Toolbar = ({ drawerHandleClick, backgroundColor }: any) => {
  let classes = 'toolbar';

  if (!!backgroundColor) {
    classes = 'toolbar background-color';
  } else{
    classes = 'toolbar';
  }

  console.log(backgroundColor);

  return (
    <header className={classes}>
      <nav className="toolbar-navigation">
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
