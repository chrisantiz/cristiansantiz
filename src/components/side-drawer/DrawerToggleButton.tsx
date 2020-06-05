import React from 'react';
import './drawer-toggle-button.scss';
import { toggleSideDrawer } from '@libs/context/global/actions';
import { useDispatch } from '@/libs/context/global/context';

const DrawerToggleButton = () => {
  const dispatch = useDispatch();

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

export default DrawerToggleButton;
