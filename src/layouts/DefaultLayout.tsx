import React, { useState, useRef, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Toolbar } from '@components/toolbar/Toolbar';
import { SideDrawer } from '@components/side-drawer/SideDrawer';
import { Backdrop } from '@components/backdrop/Backdrop';
import { useLanguage } from '@libs/hooks/use-language';

/* Layout per defect */
export const DefaultLayout = ({ children, pageContext: { locale } }: any) => {
  const mainRef = useRef<any>(null);
  const { changeLang } = useLanguage();
  const [toolbarColor, setToolbarColor] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);

  useEffect(() => {
    changeLang(locale);
  }, [locale]);

  const scrollFunction = () => {
    setToolbarColor(mainRef!.current!.scrollTop > 10);
  };

  useEffect(() => {
    function handleResize() {
      setShowBackdrop(window.innerWidth <= 768);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toolbar = useMemo(() => {
    return <Toolbar changeColorOnScroll={toolbarColor} />;
  }, [locale, toolbarColor]);

  const sidedrawer = useMemo(() => {
    return <SideDrawer />;
  }, [locale]);

  const backdrop = useMemo(() => {
    return showBackdrop ? <Backdrop /> : <></>;
  }, [showBackdrop]);

  return (
    <>
      {/* <Toolbar changeColorOnScroll={toolbarColor} /> */}
      {/* <SideDrawer /> */}
      {/* <Backdrop /> */}
      {toolbar}
      {sidedrawer}
      {backdrop}

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
