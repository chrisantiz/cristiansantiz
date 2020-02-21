import React, { useContext } from 'react';
import './drawer-toggle-button.scss';
import { RootContext } from '../../context/root/root.context';
import { toggleSideDrawer } from '../../context/root/root.actions';

export const DrawerToggleButton = () => {
  const { dispatch } = useContext(RootContext);
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
