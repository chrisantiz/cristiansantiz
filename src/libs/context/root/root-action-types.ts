import { LocaleType } from '@libs/i18n/languages';

/** root state action types */
export const TOGGLE_SIDE_DRAWER = 'TOGGLE_SIDE_DRAWER';
export const CHANGE_LOCALE = 'CHANGE_LOCALE';

export interface ToggleSideDrawerType {
  type: typeof TOGGLE_SIDE_DRAWER;
}

export interface ChangeLocaleType {
  type: typeof CHANGE_LOCALE;
  payload: LocaleType;
}

export type RootActionTypes = ToggleSideDrawerType | ChangeLocaleType;
