import React from 'react';
import '@styles/tailwind.scss';
import '@styles/index.scss';
import { DefaultLayout } from '@layouts/DefaultLayout';
import { RootProvider } from '@libs/context/root/root.context';

export const wrapPageElement = ({ element, props }) => (
    <RootProvider>
      <DefaultLayout {...props}>{element}</DefaultLayout>
    </RootProvider>
);
