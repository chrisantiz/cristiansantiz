import { GatsbyNode } from 'gatsby';

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;

  const postTemplate = require.resolve('../../templates/Post.tsx');

  const result = await graphql(`
    {
      blog: allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
        edges {
          node {
            relativeDirectory
            childMdx {
              fields {
                locale
                isDefault
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
    return;
  }

  const postList = (result.data as any).blog.edges;

  postList.forEach(({ node: post }: any) => {
    // All files for a blogpost are stored in a folder
    // relativeDirectory is the name of the folder
    const slug = post.relativeDirectory;

    const title = post.childMdx.frontmatter.title;

    // Use the fields created in exports.onCreateNode
    const locale = post.childMdx.fields.locale;
    const isDefault = post.childMdx.fields.isDefault;

    // routes with the prefix "blog" for better semantic
    const route = isDefault ? `/blog/${slug}` : `/${locale}/blog/${slug}`;

    createPage({
      path: route,
      component: postTemplate,
      context: {
        // Pass both the "title" and "locale" to find a unique file
        // Only the title would not have been sufficient as articles could have the same title
        // in different languages, e.g. because an english phrase is also common in german
        locale,
        title,
      },
    });
  });
};
