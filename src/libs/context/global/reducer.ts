import { GlobalStateModel } from './model';
import { GlobalActionTypes } from './action-types';

export const globalReducer = (
  state: GlobalStateModel,
  action: GlobalActionTypes,
): GlobalStateModel => {
  switch (action.type) {
    case 'TOGGLE_SIDE_DRAWER':
      return { ...state, openSideDrawer: !state.openSideDrawer };

    case 'CHANGE_LOCALE':
      return { ...state, locale: action.payload };

    case 'SET_INITIAL_DARK_MODE':
      return { ...state, initialDarkMode: action.payload };

    default:
      return state;
  }
};
