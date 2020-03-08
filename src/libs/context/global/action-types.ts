import { LocaleType } from '@libs/i18n/languages';

/** global state action types */
export const TOGGLE_SIDE_DRAWER = 'TOGGLE_SIDE_DRAWER';
export const CHANGE_LOCALE = 'CHANGE_LOCALE';
export const SET_INITIAL_DARK_MODE = 'SET_INITIAL_DARK_MODE';

export interface ToggleSideDrawerType {
  type: typeof TOGGLE_SIDE_DRAWER;
}

export interface ChangeLocaleType {
  type: typeof CHANGE_LOCALE;
  payload: LocaleType;
}

export interface SetInitialDarkModeType {
  type: typeof SET_INITIAL_DARK_MODE;
  payload: boolean;
}

export type GlobalActionTypes =
  | ToggleSideDrawerType
  | ChangeLocaleType
  | SetInitialDarkModeType;
