import React, { useEffect } from 'react';
import Toolbar from '@components/toolbar/Toolbar';
import SideDrawer from '@components/side-drawer/SideDrawer';
import Backdrop from '@components/backdrop/Backdrop';
import { changeLocale } from '@libs/context/global/actions';
import { LocalKey } from '@libs/enum';
import { LocaleType } from '@libs/i18n/languages';
import { useSelector, useDispatch } from '@/libs/context/global/context';

/* Layout per defect */
const DefaultLayout = ({ children }: any) => {
  const locale = useSelector(s => s.locale);
  const dispatch = useDispatch();

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

export default DefaultLayout;
