import React from 'react';
import './src/styles/tailwind.scss';
import './src/styles/index.scss';
import { DefaultLayout } from './src/layouts/DefaultLayout';
import { RootProvider } from './src/context/root/root.context';

export const wrapPageElement = ({ element, props }) => (
  <RootProvider>
    <DefaultLayout {...props}>{element}</DefaultLayout>
  </RootProvider>
);

