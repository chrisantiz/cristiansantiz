import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Toolbar } from '../components/toolbar/Toolbar';
import { SideDrawer } from '../components/side-drawer/SideDrawer';
import { Backdrop } from '../components/backdrop/Backdrop';

/* Layout per defect */
export const DefaultLayout = ({ children }: any) => {
  // show/hide SideDrawer
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const [toolbarColor, setToolbarColor] = useState(false);

  const mainRef = useRef<any>(null);

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

  const scrollFunction = () => {
    if (mainRef!.current!.scrollTop > 55) {
      setToolbarColor(true);
    } else {
      setToolbarColor(false);
    }
  };

  return (
    <>
      <Toolbar
        changeColorOnScroll={toolbarColor}
        drawerHandleClick={drawerToggleClickHandler}
      />
      <SideDrawer show={sideDrawerOpen} />
      {backdrop}

      {/* main */}
      <main
        ref={mainRef}
        onScroll={scrollFunction}
        className="app-background"
        style={{
          height: '100vh',
          overflowY: 'auto'
        }}>
        {children}
      </main>
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
