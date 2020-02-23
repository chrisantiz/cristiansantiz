/** root state action types */
export const TOOLBAR_TRANSPARENT = 'TOOLBAR_TRANSPARENT';
export const TOGGLE_SIDE_DRAWER = 'TOGGLE_SIDE_DRAWER';

export interface ChangeToolbarColorType {
  type: typeof TOOLBAR_TRANSPARENT;
  payload: boolean;
}

export interface ToggleSideDrawerType {
  type: typeof TOGGLE_SIDE_DRAWER;
}

export type RootActionTypes = ChangeToolbarColorType | ToggleSideDrawerType;
