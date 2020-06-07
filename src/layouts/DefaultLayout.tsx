import React, { useEffect } from 'react';
import Backdrop from '@components/backdrop/Backdrop';
import { changeLocale } from '@libs/context/global/actions';
import { LocalKey } from '@libs/enum';
import { LocaleType } from '@libs/i18n/languages';
import { useDispatch } from '@/libs/context/global/context';
import Menu from '@/components/Menu';

/* Layout per defect */
const DefaultLayout = ({ children }: any) => {
  const dispatch = useDispatch();

  // preload last language selected
  useEffect(() => {
    const localePersisted = localStorage.getItem(LocalKey.LOCALE) as
      | LocaleType
      | undefined;

    // change only if they are different
    if (!!localePersisted && localePersisted !== 'es') {
      dispatch(changeLocale(localePersisted));
    }
  }, []);

  return (
    <>
      <Menu />
      <Backdrop />

      {/* main */}
      <main>{children}</main>
    </>
  );
};

export default DefaultLayout;
