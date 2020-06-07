import React from 'react';
import Toolbar from './toolbar/Toolbar';
import SideDrawer from './side-drawer/SideDrawer';
import { useWindowSize } from '@/libs/hooks';

interface Props {}

const Menu: React.FC<Props> = () => {
  const { width } = useWindowSize();
  const breakpoint = 768;

  const isMediumDevice = width! >= breakpoint;

  return (
    <>
      <Toolbar renderItems={isMediumDevice} />
      {!isMediumDevice && <SideDrawer />}
    </>
  );
};

export default Menu;
