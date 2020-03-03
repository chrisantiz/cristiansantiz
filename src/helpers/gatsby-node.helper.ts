import { ParamsLocalizedSlug } from './model';
import { LocaleType } from '../libs/i18n/languages';

/** use a little helper function to remove trailing slashes from paths */
export const removeTrailingSlash = (path: string) =>
  path === `/` ? path : path.replace(/\/$/, ``);

export const localizedSlug = ({
  isDefault,
  locale,
  slug,
}: ParamsLocalizedSlug) => (isDefault ? `/${slug}` : `/${locale}/${slug}`);

export const findKey = (object: any, predicate: any) => {
  let result;
  if (object == null) {
    return result;
  }
  Object.keys(object).some(key => {
    const value = object[key];
    if (predicate(value, key, object)) {
      result = key;
      return true;
    }
    return false;
  });
  return result;
};

/** generate route */
export function generateRoute(path: string, locale: LocaleType): string {
  const oldLocale: LocaleType = locale === 'es' ? 'en' : 'es';
  const prefix = locale === 'en' ? `/${locale}` : '';
  const sanitizedPath = path.substr(
    oldLocale === 'en' ? 4 : path === '/' ? 1 : 0,
  );

  return `${prefix}${sanitizedPath}`;
}
