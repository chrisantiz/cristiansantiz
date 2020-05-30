import React from 'react';
import './backdrop.scss';
import { toggleSideDrawer } from '@libs/context/global/actions';
import { useGlobalState } from '@/libs/hooks/use-global-state';

export const Backdrop = () => {
  const {
    state: { openSideDrawer: show },
    dispatch,
  } = useGlobalState();

  return show ? (
    <div
      role="button"
      tabIndex={0}
      className="backdrop"
      onClick={() => dispatch(toggleSideDrawer())}
    />
  ) : null;
};
