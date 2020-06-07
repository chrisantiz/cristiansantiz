import {
  ToggleSideDrawerType,
  TOGGLE_SIDE_DRAWER,
  ChangeLocaleType,
  CHANGE_LOCALE,
  SetInitialDarkModeType,
  SET_INITIAL_DARK_MODE,
  SkillSectionVisitedType,
  SKILL_SECTION_VISITED,
} from './action-types';
import { LocaleType } from '@libs/i18n/languages';
import { LocalKey } from '@libs/enum';
import { generateRoute } from '@helpers/gatsby-node.helper';

/** [root state] toggle side drawer */
export function toggleSideDrawer(): ToggleSideDrawerType {
  return { type: TOGGLE_SIDE_DRAWER };
}

/** change language and redirect if prefer */
export function changeLocale(locale: LocaleType): ChangeLocaleType {
  // persist
  localStorage.setItem(LocalKey.LOCALE, locale);

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

/** [global context] */
export function setSkillSectionAsVisited(): SkillSectionVisitedType {
  return {
    type: SKILL_SECTION_VISITED,
    payload: true,
  };
}
