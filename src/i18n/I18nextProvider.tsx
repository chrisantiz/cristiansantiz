import React, { ReactElement } from 'react';
import { I18nextProvider as Provider } from 'react-i18next';
import i18n from './i18next';

interface Props {
  children: ReactElement;
}

export const I18nextProvider = ({ children }: Props) => (
  <Provider i18n={i18n}>{children}</Provider>
);
