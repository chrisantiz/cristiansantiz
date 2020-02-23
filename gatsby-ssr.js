import React from 'react';
import '@styles/tailwind.scss';
import '@styles/index.scss';
import { DefaultLayout } from '@layouts/DefaultLayout';
import { RootProvider } from '@libs/context/root/root.context';
import { I18nextProvider } from '@libs/i18n/I18nextProvider';

export const wrapPageElement = ({ element, props }) => (
  <I18nextProvider>
    <RootProvider>
      <DefaultLayout {...props}>{element}</DefaultLayout>
    </RootProvider>
  </I18nextProvider>
);
