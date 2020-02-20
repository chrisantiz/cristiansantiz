import {
  ChangeToolbarColorType,
  TOOLBAR_TRANSPARENT,
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
