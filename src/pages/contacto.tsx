import React from 'react';
import { SEO } from '../components/Seo';
import { toolbarChangeStyle } from '../helpers/toolbar-change-style.helper';
import { PageContainer } from '../components/PageContainer';

const Contact = () => {
  toolbarChangeStyle({ isTransparent: false });

  return (
    <>
      <SEO title="Contacto" />
      <PageContainer>
        <h2>Page Contact works!</h2>
      </PageContainer>
    </>
  );
};

export default Contact;
