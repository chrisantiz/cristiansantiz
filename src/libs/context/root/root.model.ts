import { LocaleType } from '../../i18n/languages';

export interface RootStateModel {
  /** indicates if toolbar will be transparent */
  toolbarTransparent: boolean;
  openSideDrawer: boolean;
  /** active language */
  locale: LocaleType;
}
