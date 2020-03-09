import React from 'react';
import './drawer-toggle-button.scss';
import { toggleSideDrawer } from '@libs/context/global/actions';
import { useGlobalState } from '@/libs/hooks/use-global-state';

export const DrawerToggleButton = () => {
  const { dispatch } = useGlobalState();

  return (
    <button
      className="toggle-button"
      onClick={() => dispatch(toggleSideDrawer())}>
      <div className="toggle-button-line"></div>
      <div className="toggle-button-line"></div>
      <div className="toggle-button-line"></div>
    </button>
  );
};
