import React, { useReducer } from 'react';
import { RootStateModel } from './root.model';
import { ContextModel } from '../context.model';
import { rootReducer } from './root.reducer';
import { LocaleType } from '../../i18n/languages';
import { LocalKey } from '../../enum';

export const RootContext = React.createContext(
  {} as ContextModel<RootStateModel>,
);

console.log('LOCALE IN LOCALSTORAGE: ', localStorage.getItem(LocalKey.LOCALE));

export const rootInitialState: RootStateModel = {
  openSideDrawer: false,
  locale: (localStorage.getItem(LocalKey.LOCALE) as LocaleType) || 'es',
};

// TODO:: preload (localStorage.getItem('i18nextLng')

export function RootProvider({ children }: any) {
  const [state, dispatch] = useReducer(rootReducer, rootInitialState);

  /** proxy to select state */
  function getState(cb: any) {
    return cb(state);
  }

  return (
    <RootContext.Provider value={{ getState, dispatch }}>
      {children}
    </RootContext.Provider>
  );
}
