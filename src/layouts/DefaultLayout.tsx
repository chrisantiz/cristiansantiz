import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Toolbar } from '../components/toolbar/Toolbar';
import { SideDrawer } from '../components/side-drawer/SideDrawer';
import { Backdrop } from '../components/backdrop/Backdrop';

/* Layout per defect */
export const DefaultLayout = ({ children }: any) => {
  const [toolbarColor, setToolbarColor] = useState(false);

  const mainRef = useRef<any>(null);

  const scrollFunction = () => {
    if (mainRef!.current!.scrollTop > 55) {
      setToolbarColor(true);
    } else {
      setToolbarColor(false);
    }
  };

  return (
    <>
      <Toolbar changeColorOnScroll={toolbarColor} />
      <SideDrawer />
      <Backdrop />

      {/* main */}
      <main
        ref={mainRef}
        onScroll={scrollFunction}
        className="app-background"
        style={{
          height: '100vh',
          overflowY: 'auto',
        }}>
        {children}
      </main>
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
