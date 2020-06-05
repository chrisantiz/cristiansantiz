import React from 'react';
import './backdrop.scss';
import { toggleSideDrawer } from '@libs/context/global/actions';
import { useSelector, useDispatch } from '@/libs/context/global/context';

const Backdrop = () => {
  const show = useSelector(s => s.openSideDrawer);
  const dispatch = useDispatch();

  return show ? (
    <div
      role="button"
      tabIndex={0}
      className="backdrop"
      onClick={() => dispatch(toggleSideDrawer())}
    />
  ) : null;
};

export default Backdrop;
