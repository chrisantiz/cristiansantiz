import { LocaleType } from '../../i18n/languages';

export interface RootStateModel {
  openSideDrawer: boolean;
  /** active language */
  locale: LocaleType;
  initialDarkMode: boolean;
  activePath: string;
}
