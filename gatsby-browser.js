import React from 'react';
import './src/styles/tailwind.scss';
import './src/styles/index.scss';
import { DefaultLayout } from './src/layouts/DefaultLayout';
import { RootProvider } from './src/context/root/root.context';
import { I18nextProvider } from './src/i18n/I18nextProvider';

export const wrapPageElement = ({ element, props }) => (
  <I18nextProvider>
    <RootProvider>
      <DefaultLayout {...props}>{element}</DefaultLayout>
    </RootProvider>
  </I18nextProvider>
);
