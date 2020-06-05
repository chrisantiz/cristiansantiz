import { globalInitialState } from './initial-state';
import { globalReducer } from './reducer';
import { useReducer, useEffect } from 'react';
import { createContainer } from 'react-tracked';
import { LocalKey } from '../../enum';
import { setInitialDarkMode } from './actions';

const useValue = () => {
  const reducer = useReducer(globalReducer, globalInitialState);

  // set dark mode if it's active
  useEffect(() => {
    const darkMode = localStorage.getItem(LocalKey.DARK_MODE);

    // set UI theme
    if (darkMode && JSON.parse(darkMode)) {
      document.body.classList.add('dark');
      reducer[1](setInitialDarkMode());
    }
  }, []);
  return reducer;
};

export const {
  Provider: GlobalProvider,
  useTracked,
  useTrackedState: state,
  useUpdate: dispatch,
} = createContainer(useValue);
