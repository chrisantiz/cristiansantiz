import React, { useState, useRef, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Toolbar } from '@components/toolbar/Toolbar';
import { SideDrawer } from '@components/side-drawer/SideDrawer';
import { Backdrop } from '@components/backdrop/Backdrop';
import { setActivePath, changeLocale } from '../libs/context/root/root.actions';
import { LocalKey } from '../libs/enum';
import { LocaleType } from '../libs/i18n/languages';
import { useStore } from '../libs/hooks/use-store';

/* Layout per defect */
export const DefaultLayout = ({ children, path }: any) => {
  const mainRef = useRef<any>(null);
  const { dispatch, getState } = useStore();
  const localeState = getState(s => s.locale);
  const [toolbarColor, setToolbarColor] = useState(false);
  // if is a small screen device
  const [smallScreen, setSmallScren] = useState(false);

  useEffect(() => {
    dispatch(setActivePath(path));
  }, [path]);

  const scrollFunction = () => {
    setToolbarColor(mainRef!.current!.scrollTop > 10);
  };

  useEffect(() => {
    const localePersisted = localStorage.getItem(LocalKey.LOCALE) as
      | LocaleType
      | undefined;

    // change only if they are different
    if (!!localePersisted && localePersisted !== localeState) {
      dispatch(changeLocale(localePersisted));
    }

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
  }, [localeState, toolbarColor, smallScreen]);

  // render only in small screen devices
  const sidedrawer = useMemo(() => {
    return smallScreen ? <SideDrawer /> : <></>;
  }, [smallScreen]);

  const backdrop = useMemo(() => {
    return smallScreen ? <Backdrop /> : <></>;
  }, [smallScreen]);

  return (
    <>
      {toolbar}
      {sidedrawer}
      {backdrop}

      {/* main */}
      <main ref={mainRef} onScroll={scrollFunction}>
        {children}
      </main>
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
