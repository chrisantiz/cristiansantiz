import React, { useContext, useState, useEffect } from 'react';
import { ToolbarItems } from '@components/toolbar/ToolbarItems';
import './side-drawer.scss';
import { RootContext } from '@libs/context/root/root.context';

export const SideDrawer = () => {
  const { getState } = useContext(RootContext);
  const show = getState(state => state.openSideDrawer);
  const [drawerClasess, setDrawerClasses] = useState('side-drawer');

  useEffect(() => {
    setDrawerClasses(show ? 'side-drawer open' : 'side-drawer');
  }, [show]);

  return <ToolbarItems className={drawerClasess} />;
};
