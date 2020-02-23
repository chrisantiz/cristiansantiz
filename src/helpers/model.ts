import { LocaleType } from '../libs/i18n/languages';

export interface ParamsLocalizedSlug {
  /** if is the default route */
  isDefault: boolean;
  /** active locale */
  locale: LocaleType;
  /** pathname */
  slug: string;
}
