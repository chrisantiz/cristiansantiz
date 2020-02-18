import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Toolbar } from '../components/toolbar/Toolbar';
import { SideDrawer } from '../components/side-drawer/SideDrawer';
import { Backdrop } from '../components/backdrop/Backdrop';

/* Layout per defect */
export const DefaultLayout = ({ children }) => {
  // show/hide SideDrawer
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  /** click event in DrawerToggleButton: toggle SideDrawer */
  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  /** click event in Backdrop: hides itself - hide SideDrawer */
  const backdropClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  // backfrop component container
  let backdrop;

  // show only if SideDrawer is open
  if (sideDrawerOpen) {
    backdrop = <Backdrop onClick={backdropClickHandler} />;
  }

  return (
    <>
      <Toolbar drawerHandleClick={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen} />
      {backdrop}
      <main className="fullscreen-image">{children}</main>
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
