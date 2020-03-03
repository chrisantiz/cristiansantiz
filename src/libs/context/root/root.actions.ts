import {
  ToggleSideDrawerType,
  TOGGLE_SIDE_DRAWER,
  ChangeLocaleType,
  CHANGE_LOCALE,
  SetInitialDarkModeType,
  SET_INITIAL_DARK_MODE,
  ActivePathType,
  ACTIVE_PATH,
} from './root-action-types';
import { LocaleType } from '../../i18n/languages';
import { LocalKey } from '../../enum';
import { navigate } from 'gatsby';
import { generateRoute } from '../../../helpers/gatsby-node.helper';

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
  localStorage.setItem(LocalKey.LOCALE, locale);
  if (!!opt && opt.navigate) {
    navigate(generateRoute(opt.path, locale));
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

export function setActivePath(path: string): ActivePathType {
  return {
    type: ACTIVE_PATH,
    payload: path,
  };
}
