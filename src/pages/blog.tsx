import React from 'react';
import { graphql, Link } from 'gatsby';
import { SEO } from '@components/Seo';
import { PageContainer } from '@components/PageContainer';
import { useDate } from '../libs/hooks/use-date';

interface BlogItem {
  id: string;
  title: string;
  date: string;
  path: string;
}

const BlogPage = ({ data, path }: any) => {
  const { dateFromNow } = useDate();

  const blogs: BlogItem[] = data.allMdx.edges.map((edge: any) => {
    return {
      id: edge.node.id,
      ...edge.node.frontmatter,
      path: `${path}/${edge.node.parent.relativeDirectory}`,
    };
  });

  return (
    <>
      <SEO title="Blog" />
      <PageContainer>
        <ul>
          {blogs.map(blog => (
            <li key={blog.id}>
              <Link rel="" className="text-red-500" to={blog.path}>
                {blog.title}
              </Link>
              <h3>{blog.title}</h3>
              <p>{dateFromNow(blog.date)}</p>
            </li>
          ))}
        </ul>
      </PageContainer>
    </>
  );
};

export const query = graphql`
  query MyQuery($locale: String!) {
    allMdx(
      filter: { fields: { locale: { eq: $locale } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
          }
          parent {
            ... on File {
              relativeDirectory
            }
          }
        }
      }
    }
  }
`;

export default BlogPage;
