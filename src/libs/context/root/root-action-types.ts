import { LocaleType } from '@libs/i18n/languages';

/** root state action types */
export const TOGGLE_SIDE_DRAWER = 'TOGGLE_SIDE_DRAWER';
export const CHANGE_LOCALE = 'CHANGE_LOCALE';
export const SET_INITIAL_DARK_MODE = 'SET_INITIAL_DARK_MODE';
export const ACTIVE_PATH = 'ACTIVE_PATH';

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

export interface ActivePathType {
  type: typeof ACTIVE_PATH;
  payload: string;
}

export type RootActionTypes =
  | ToggleSideDrawerType
  | ChangeLocaleType
  | SetInitialDarkModeType
  | ActivePathType;
