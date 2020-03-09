import React, { useState, useRef, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Toolbar } from '@components/toolbar/Toolbar';
import { SideDrawer } from '@components/side-drawer/SideDrawer';
import { Backdrop } from '@components/backdrop/Backdrop';
import { changeLocale } from '@libs/context/global/actions';
import { LocalKey } from '@libs/enum';
import { LocaleType } from '@libs/i18n/languages';
import { useGlobalState } from '@/libs/hooks/use-global-state';

/* Layout per defect */
export const DefaultLayout = ({ children }: any) => {
  const { state: { locale }, dispatch } = useGlobalState();

  // const mainRef = useRef<any>(null);
  // const [toolbarColor, setToolbarColor] = useState(false);
  // if is a small screen device
  const [smallScreen, setSmallScren] = useState(false);

  // const scrollFunction = () => {
  //   setToolbarColor(mainRef!.current!.scrollTop > 10);
  // };

  useEffect(() => {
    const localePersisted = localStorage.getItem(LocalKey.LOCALE) as
      | LocaleType
      | undefined;

    // change only if they are different
    if (!!localePersisted && localePersisted !== locale) {
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

  useEffect(() => {
    const WOW = require('wowjs');

    new WOW.WOW({ live: false, animateClass: 'magictime' }).init();
  }, []);

  const toolbar = useMemo(() => {
    return (
      <Toolbar isSmallScreen={smallScreen} />
    );
  }, [locale, smallScreen]);

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
      <main /* ref={mainRef} onScroll={scrollFunction} */>
        {children}
      </main>
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
