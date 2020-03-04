import React from 'react';
import { SEO } from '../components/Seo';
import { PageContainer } from '../components/PageContainer';
import { useLang } from '../libs/hooks/use-language';

const Contact = () => {
  const {
    lang: {
      pages: { contact },
    },
  } = useLang();
  return (
    <>
      <SEO title={contact.linkLabel} />
      <PageContainer>
        <h2>Page Contact works!</h2>
      </PageContainer>
    </>
  );
};

export default Contact;
