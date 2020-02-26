import {
  ToggleSideDrawerType,
  TOGGLE_SIDE_DRAWER,
  ChangeLocaleType,
  CHANGE_LOCALE,
} from './root-action-types';
import { LocaleType } from '../../i18n/languages';

/** [root state] toggle side drawer */
export function toggleSideDrawer(): ToggleSideDrawerType {
  return { type: TOGGLE_SIDE_DRAWER };
}

/** change language */
export function changeLocale(locale: LocaleType): ChangeLocaleType {
  return {
    type: CHANGE_LOCALE,
    payload: locale,
  };
}
