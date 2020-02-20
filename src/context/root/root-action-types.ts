/** root state action types */
export const TOOLBAR_TRANSPARENT = 'TOOLBAR_TRANSPARENT';

export interface ChangeToolbarColorType {
  type: typeof TOOLBAR_TRANSPARENT;
  payload: boolean;
}

export type RootActionTypes = ChangeToolbarColorType;
