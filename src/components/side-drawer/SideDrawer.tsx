import React from 'react';
import { ToolbarItems } from '../toolbar/ToolbarItems';
import './side-drawer.scss';

export const SideDrawer = ({ show }: any) => {
  let drawerClasess = 'side-drawer';

  if (show) {
    drawerClasess = 'side-drawer open';
  }

  return <ToolbarItems className={drawerClasess} />;
};
