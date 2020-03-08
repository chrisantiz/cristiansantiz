import { globalInitialState } from './initial-state';
import { globalReducer } from './reducer';
import { useReducer } from 'react';
import { createContainer } from 'react-tracked';

const useValue = () => useReducer(globalReducer, globalInitialState);

export const {
  Provider: GlobalProvider,
  useTrackedState: state,
  useUpdate: dispatch,
} = createContainer(useValue);
