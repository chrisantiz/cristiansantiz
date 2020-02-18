import React from 'react';
import './drawer-toggle-button.scss';

export const DrawerToggleButton = ({ onClick }: any) => (
  <button className="toggle-button" onClick={onClick}>
    <div className="toggle-button-line"></div>
    <div className="toggle-button-line"></div>
    <div className="toggle-button-line"></div>
  </button>
);
