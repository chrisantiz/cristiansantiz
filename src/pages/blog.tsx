import React from 'react';
import { Link } from 'gatsby';
import { SEO } from '@components/Seo';
import { PageContainer } from '@components/PageContainer';
import { useLanguage } from '@libs/hooks/use-language';

const BlogPage = (props: any) => {
  const { lang } = useLanguage();
  return (
    <>
      <SEO title="Blog" />
      <PageContainer>
        <p>Esta es la página de blog</p>
        <Link to="/en">English</Link>
        <pre>{lang.labels.githubBtn}</pre>
        <pre>{lang.pages.home.text}</pre>
      </PageContainer>
    </>
  );
};

export default BlogPage;
