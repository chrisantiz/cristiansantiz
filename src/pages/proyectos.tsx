import React from 'react';
import { SEO } from '@/components/Seo';
import { PageContainer } from '@/components/PageContainer';
import { useLang } from '@libs/hooks/use-language';

const Proyects = () => {
  const { lang: { pages: { projects } } } = useLang();
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
