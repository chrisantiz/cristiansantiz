import React, { useEffect } from 'react';
import { Toolbar } from '@components/toolbar/Toolbar';
import { SideDrawer } from '@components/side-drawer/SideDrawer';
import { Backdrop } from '@components/backdrop/Backdrop';
import { changeLocale } from '@libs/context/global/actions';
import { LocalKey } from '@libs/enum';
import { LocaleType } from '@libs/i18n/languages';
import { useGlobalState } from '@/libs/hooks/use-global-state';

/* Layout per defect */
export const DefaultLayout = ({ children }: any) => {
  const {
    state: { locale },
    dispatch,
  } = useGlobalState();

  useEffect(() => {
    const localePersisted = localStorage.getItem(LocalKey.LOCALE) as
      | LocaleType
      | undefined;

    // change only if they are different
    if (!!localePersisted && localePersisted !== locale) {
      dispatch(changeLocale(localePersisted));
    }
  }, []);

  return (
    <>
      <Toolbar />
      <SideDrawer />
      <Backdrop />

      {/* main */}
      <main>{children}</main>
    </>
  );
};
