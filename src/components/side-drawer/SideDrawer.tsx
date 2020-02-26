import React, { useContext } from 'react';
import { ToolbarItems } from '@components/toolbar/ToolbarItems';
import './side-drawer.scss';
import { RootContext } from '@libs/context/root/root.context';

export const SideDrawer = () => {
  const { getState } = useContext(RootContext);
  const show = getState(state => state.openSideDrawer);

  return (
    <ToolbarItems
      inDrawer
      className={show ? 'side-drawer open' : 'side-drawer'}
    />
  );
};
