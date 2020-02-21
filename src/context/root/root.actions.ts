import {
  ChangeToolbarColorType,
  TOOLBAR_TRANSPARENT,
  ToggleSideDrawerType,
  TOGGLE_SIDE_DRAWER,
} from './root-action-types';

/** [root state] change toolbar color */
export function changeToolbarColor(
  isTransparent: boolean,
): ChangeToolbarColorType {
  return {
    type: TOOLBAR_TRANSPARENT,
    payload: isTransparent,
  };
}

/** [root state] toggle side drawer */
export function toggleSideDrawer(): ToggleSideDrawerType {
  return { type: TOGGLE_SIDE_DRAWER };
}
