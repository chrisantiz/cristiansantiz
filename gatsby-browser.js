import React from 'react';
import './src/styles/tailwind.css';
import './src/styles/index.scss';
import { DefaultLayout } from './src/layouts/DefaultLayout';

let toolbarTransparent = true;

export const wrapPageElement = ({ element, props }) => {
  return (
    <DefaultLayout toolbarTransparent={toolbarTransparent} {...props}>
      {element}
    </DefaultLayout>
  );
};

export const onRouteUpdate = ({ location, prevLocation }) => {
  toolbarTransparent = location.pathname === '/';
  console.log('Desde browser: ', toolbarTransparent);
  // console.log('Gatsby started to change location to', location.pathname);
  // console.log(
  //   'Gatsby started to change location from',
  //   prevLocation ? prevLocation.pathname : null,
  // );
};
