import {
  ToggleSideDrawerType,
  TOGGLE_SIDE_DRAWER,
  ChangeLocaleType,
  CHANGE_LOCALE,
  SetInitialDarkModeType,
  SET_INITIAL_DARK_MODE,
} from './action-types';
import { LocaleType } from '@libs/i18n/languages';
import { LocalKey } from '@libs/enum';
import { generateRoute } from '@helpers/gatsby-node.helper';

/** [root state] toggle side drawer */
export function toggleSideDrawer(): ToggleSideDrawerType {
  return { type: TOGGLE_SIDE_DRAWER };
}

interface ChangeLocaleOptions {
  navigate: boolean;
  path: string;
}

/** change language and redirect if prefer */
export function changeLocale(
  locale: LocaleType,
  opt?: ChangeLocaleOptions,
): ChangeLocaleType {
  // persist
  localStorage.setItem(LocalKey.LOCALE, locale);

  if (!!opt && opt.navigate) {
    generateRoute(opt.path, locale);
  }
  return {
    type: CHANGE_LOCALE,
    payload: locale,
  };
}

/** set theme dark mode at starting */
export function setInitialDarkMode(): SetInitialDarkModeType {
  return {
    type: SET_INITIAL_DARK_MODE,
    payload: true,
  };
}
