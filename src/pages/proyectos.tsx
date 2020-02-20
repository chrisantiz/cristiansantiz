import React from 'react';
import { SEO } from '../components/Seo';
import { toolbarChangeStyle } from '../helpers/toolbar-change-style.helper';
import { PageContainer } from '../components/page-container';

const Proyects = () => {
  toolbarChangeStyle({ isTransparent: false });

  return (
    <>
      <SEO title="Proyectos" />
      <PageContainer>
        <h2>Page Projects works!</h2>
      </PageContainer>
    </>
  );
};

export default Proyects;
