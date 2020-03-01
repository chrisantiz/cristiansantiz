import React from 'react';
import { SEO } from '../components/Seo';
import { PageContainer } from '../components/PageContainer';
import { useLanguage } from '../libs/hooks/use-language';

const Proyects = () => {
  const { lang: { pages: { projects } } } = useLanguage();
  return (
    <>
      <SEO title={projects.linkLabel} />
      <PageContainer>
        <h2>Page Projects works!</h2>
      </PageContainer>
    </>
  );
};

export default Proyects;
