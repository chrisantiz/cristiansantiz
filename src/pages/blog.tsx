import React from 'react';
import { graphql } from 'gatsby';
import { SEO } from '@components/Seo';
import { PageContainer } from '@components/PageContainer';
import { useDate } from '../libs/hooks/use-date';

interface BlogItem {
  id: string;
  title: string;
  date: string;
}

const BlogPage = ({ data }: any) => {
  const { dateFromNow } = useDate();

  const blogs: BlogItem[] = data.allMdx.edges.map((edge: any) => {
    return { id: edge.node.id, ...edge.node.frontmatter };
  });

  return (
    <>
      <SEO title="Blog" />
      <PageContainer>
        <ul>
          {blogs.map(blog => (
            <li key={blog.id}>
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
    allMdx(filter: { fields: { locale: { eq: $locale } } }) {
      edges {
        node {
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`;

export default BlogPage;
