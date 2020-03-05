import React, { useState, useRef, useEffect, useMemo, useContext } from 'react';
import PropTypes from 'prop-types';
import { Toolbar } from '@components/toolbar/Toolbar';
import { SideDrawer } from '@components/side-drawer/SideDrawer';
import { Backdrop } from '@components/backdrop/Backdrop';
import { RootContext } from '../libs/context/root/root.context';
import { setActivePath, changeLocale } from '../libs/context/root/root.actions';
import { LocalKey } from '../libs/enum';
import { LocaleType } from '../libs/i18n/languages';

/* Layout per defect */
export const DefaultLayout = ({
  children,
  path,
  pageContext: { locale: pageLocale, notFoundPage },
}: any) => {
  const mainRef = useRef<any>(null);
  const { dispatch } = useContext(RootContext);
  const [toolbarColor, setToolbarColor] = useState(false);
  // if is a small screen device
  const [smallScreen, setSmallScren] = useState(false);

  console.log({notFoundPage})

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

    // redirect only in english and when the path is /
    if (!!localePersisted && localePersisted === 'en' && path === '/') {
      // update state and redirect
      dispatch(changeLocale(localePersisted, { navigate: true, path }));
    } else {
      dispatch(changeLocale(pageLocale));
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
    // don't display when 404 page is rendered
    return notFoundPage === true ? null : (
      <Toolbar isSmallScreen={smallScreen} changeColorOnScroll={toolbarColor} />
    );
  }, [notFoundPage, pageLocale, toolbarColor, smallScreen]);

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
