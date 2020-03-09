import React from 'react';
import '@styles/tailwind.scss';
import '@styles/index.scss';
import { DefaultLayout } from '@layouts/DefaultLayout';
import { GlobalProvider } from '@libs/context/global/context';

export const wrapPageElement = ({ element, props }) => (
  <GlobalProvider>
    <DefaultLayout {...props}>{element}</DefaultLayout>>
  </GlobalProvider>
);
