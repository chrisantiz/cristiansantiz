import { RootStateModel } from './root.model';
import { RootActionTypes } from './root-action-types';

export const rootReducer = (
  state: RootStateModel,
  action: RootActionTypes,
): RootStateModel => {
  switch (action.type) {
    case 'TOOLBAR_TRANSPARENT':
      return { ...state, toolbarTransparent: action.payload };

    default:
      return state;
  }
};
