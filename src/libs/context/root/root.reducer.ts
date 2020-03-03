import { RootStateModel } from './root.model';
import { RootActionTypes } from './root-action-types';

export const rootReducer = (
  state: RootStateModel,
  action: RootActionTypes,
): RootStateModel => {
  switch (action.type) {
    case 'TOGGLE_SIDE_DRAWER':
      return { ...state, openSideDrawer: !state.openSideDrawer };

    case 'CHANGE_LOCALE':
      return { ...state, locale: action.payload };

    case 'SET_INITIAL_DARK_MODE':
      return { ...state, initialDarkMode: action.payload };

    case 'ACTIVE_PATH':
      return { ...state, activePath: action.payload };

    default:
      return state;
  }
};
