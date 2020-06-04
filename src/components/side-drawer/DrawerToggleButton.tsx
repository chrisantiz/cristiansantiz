import React from 'react';
import './drawer-toggle-button.scss';
import { toggleSideDrawer } from '@libs/context/global/actions';
import { useGlobalState } from '@/libs/hooks/use-global-state';

export const DrawerToggleButton = () => {
  const { dispatch } = useGlobalState();

  return (
    <button
      className="Toggle-button"
      onClick={() => dispatch(toggleSideDrawer())}>
      <div className="Toggle-button__line"></div>
      <div className="Toggle-button__line"></div>
      <div className="Toggle-button__line"></div>
    </button>
  );
};
