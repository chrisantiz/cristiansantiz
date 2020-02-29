import React, { useState, useRef, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Toolbar } from '@components/toolbar/Toolbar';
import { SideDrawer } from '@components/side-drawer/SideDrawer';
import { Backdrop } from '@components/backdrop/Backdrop';
import { useLanguage } from '@libs/hooks/use-language';
import { navigate } from 'gatsby';

/* Layout per defect */
export const DefaultLayout = ({
  children,
  pageContext: { locale: oldLocale },
}: any) => {
  const mainRef = useRef<any>(null);
  const { changeLang, locale: currentLocale } = useLanguage();
  const [toolbarColor, setToolbarColor] = useState(false);
  // if is a small screen device
  const [smallScreen, setSmallScren] = useState(false);

  useEffect(() => {
    changeLang(currentLocale);
    const pathname = window.location.pathname.substr(
      oldLocale === 'en' ? 3 : 0,
    );

    const route = currentLocale === 'en' ? `/en${pathname}` : pathname;

    navigate(route);
  }, [currentLocale]);

  const scrollFunction = () => {
    setToolbarColor(mainRef!.current!.scrollTop > 10);
  };

  useEffect(() => {
    // set screen type on first render
    setSmallScren(window.innerWidth <= 768);

    function handleResize() {
      setSmallScren(window.innerWidth <= 768);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toolbar = useMemo(() => {
    return (
      <Toolbar isSmallScreen={smallScreen} changeColorOnScroll={toolbarColor} />
    );
  }, [oldLocale, toolbarColor, smallScreen]);

  // render only in small screen devices
  const sidedrawer = useMemo(() => {
    return smallScreen ? <SideDrawer /> : <></>;
  }, [smallScreen]);

  const backdrop = useMemo(() => {
    return smallScreen ? <Backdrop /> : <></>;
  }, [smallScreen]);

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
