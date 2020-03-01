import React from 'react';
import { Link, graphql } from 'gatsby';
import { SEO } from '@components/Seo';
import { PageContainer } from '@components/PageContainer';
import { useLanguage } from '@libs/hooks/use-language';

interface BlogItem {
  id: string;
  title: string;
  date: string;
}

const BlogPage = (props: any) => {
  // const { lang } = useLanguage();

  const blogs: BlogItem[] = props.data.allMdx.edges.map((edge: any) => {
    return { id: edge.node.id, ...edge.node.frontmatter };
  });

  // console.log(blogs);
  return (
    <>
      <SEO title="Blog" />
      <PageContainer>
        <ul>
          {blogs.map(blog => (
            <li key={blog.id}>
              <h3>{blog.title}</h3>
              <p>{blog.date}</p>
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
            date(fromNow: true, locale: $locale)
          }
        }
      }
    }
  }
`;

export default BlogPage;
