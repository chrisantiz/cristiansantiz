import React, { useContext } from 'react';
import { ToolbarItems } from '../toolbar/ToolbarItems';
import './side-drawer.scss';
import { RootContext } from '../../context/root/root.context';

export const SideDrawer = () => {
  const { getState } = useContext(RootContext);
  const show = getState(state => state.openSideDrawer);

  let drawerClasess = 'side-drawer';

  if (show) {
    drawerClasess = 'side-drawer open';
  }

  return <ToolbarItems className={drawerClasess} />;
};
