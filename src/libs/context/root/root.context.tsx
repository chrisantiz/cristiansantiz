import React, { useReducer, useEffect } from 'react';
import { RootStateModel } from './root.model';
import { ContextModel } from '../context.model';
import { rootReducer } from './root.reducer';
import { LocalKey } from '../../enum';
import { setInitialDarkMode } from './root.actions';

export const RootContext = React.createContext(
  {} as ContextModel<RootStateModel>,
);

export const rootInitialState: RootStateModel = {
  openSideDrawer: false,
  locale: 'es',
  initialDarkMode: false,
  activePath: '',
};

export function RootProvider({ children }: any) {
  const [state, dispatch] = useReducer(rootReducer, rootInitialState);

  /** proxy to select state */
  function getState(cb: any) {
    return cb(state);
  }

  useEffect(() => {
    const darkMode = localStorage.getItem(LocalKey.DARK_MODE);

    // set UI theme
    if (darkMode && JSON.parse(darkMode)) {
      document.body.classList.add('dark');
      dispatch(setInitialDarkMode());
    }
  }, []);

  return (
    <RootContext.Provider value={{ getState, dispatch }}>
      {children}
    </RootContext.Provider>
  );
}
