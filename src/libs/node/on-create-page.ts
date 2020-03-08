import { GatsbyNode } from 'gatsby';
import locales from '../i18n/config';
import { removeTrailingSlash } from '../../helpers/gatsby-node.helper';

export const onCreatePage: GatsbyNode['onCreatePage'] = ({
  page,
  actions,
}: any) => {
  const { createPage, deletePage } = actions;

  // First delete the incoming page that was automatically created by Gatsby
  // So everything in src/pages/
  deletePage(page);

  const newPage = {
    // Pass on everything from the original page
    ...page,
    // Since page.path returns with a trailing slash (e.g. "/de/")
    // We want to remove that
    path: removeTrailingSlash(page.path),
    // Pass in the locale as context to every page
    // This context also gets passed to the src/components/layout file
    // This should ensure that the locale is available on every page
    context: {
      ...page.context,
      // localeResources: resources[lang] ? resources[lang] : {},
      // dateFormat: locales[lang].dateFormat,
    },
  };

  if (page.path !== '/blog') {
    return createPage(newPage);
  } else {
    // only /blog in double route
    Object.keys(locales).map(lang => {
      // Use the values defined in "locales" to construct the path
      const localizedPath = locales[lang].default
        ? page.path
        : `/${locales[lang].path}${page.path}`;
      // ignore not found page
      return createPage(newPage);
    });
  }
};
