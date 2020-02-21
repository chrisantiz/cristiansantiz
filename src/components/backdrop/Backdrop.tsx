import React, { useContext } from 'react';
import './backdrop.scss';
import { RootContext } from '../../context/root/root.context';
import { toggleSideDrawer } from '../../context/root/root.actions';

export const Backdrop = () => {
  const { getState, dispatch } = useContext(RootContext);
  const show = getState(state => state.openSideDrawer);

  if (show) {
    return (
      <div
        role="button"
        tabIndex={0}
        className="backdrop"
        onClick={() => dispatch(toggleSideDrawer())}
      />
    );
  } else {
    return <></>;
  }
};
