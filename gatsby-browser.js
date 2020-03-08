import React from 'react';
import '@styles/tailwind.scss';
import '@styles/index.scss';
import { DefaultLayout } from '@layouts/DefaultLayout';
import { RootProvider } from '@libs/context/root/root.context';
import { GlobalProvider } from '@libs/context/global/context';

export const wrapPageElement = ({ element, props }) => (
  <GlobalProvider>
    <RootProvider>
      <DefaultLayout {...props}>{element}</DefaultLayout>
    </RootProvider>
  </GlobalProvider>
);
