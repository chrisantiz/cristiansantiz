import { GatsbyNode } from 'gatsby';
import path from 'path';
import locales from '../../libs/i18n/config';
import { findKey } from '../../helpers/gatsby-node.helper';

export const onCreateNode: GatsbyNode['onCreateNode'] = ({
  node,
  actions,
}) => {
  const { createNodeField } = actions;
   // Check for "Mdx" type so that other files (e.g. images) are exluded
   if (node.internal.type === `Mdx`) {
    // Use path.basename
    // https://nodejs.org/api/path.html#path_path_basename_path_ext
    const name = path.basename((node.fileAbsolutePath as string), `.mdx`);
    // Check if post.name is "index" -- because that's the file for default language
    // (In this case "en")
    const isDefault = name === `index`;

    // Find the key that has "default: true" set (in this case it returns "en")
    const defaultKey = findKey(locales, (o: any) => o.default === true);

    // Files are defined with "name-with-dashes.lang.mdx"
    // name returns "name-with-dashes.lang"
    // So grab the lang from that string
    // If it's the default language, pass the locale for that
    const lang = isDefault ? defaultKey : name.split(`.`)[1];

    createNodeField({ node, name: `locale`, value: lang });
    createNodeField({ node, name: `isDefault`, value: isDefault });
  }
};
