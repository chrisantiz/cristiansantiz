import { RootStateModel } from './root.model';
import { RootActionTypes } from './root-action-types';

export const rootReducer = (
  state: RootStateModel,
  action: RootActionTypes,
): RootStateModel => {
  switch (action.type) {
    case 'TOOLBAR_TRANSPARENT':
      return { ...state, toolbarTransparent: action.payload };

    case 'TOGGLE_SIDE_DRAWER':
      return { ...state, openSideDrawer: !state.openSideDrawer };

    default:
      return state;
  }
};
