import React from 'react';
import { SEO } from '../components/Seo';
import { PageContainer } from '../components/PageContainer';
import { NotFoundIcon } from '@components/icons';
import '@/styles/components/_not-found.scss';
import { Button } from '@/components/button/Button';
import { useLang } from '../libs/hooks/use-language';

const NotFoundPage = () => {
  const {
    lang: {
      pages: { notFound },
    },
  } = useLang();

  return (
    <PageContainer>
      <SEO title={notFound.title} />
      <div className="not-found">
        <h1 className="uppercase">{notFound.h1}</h1>
        <NotFoundIcon width="200px" height="200px" />
        <p>{notFound.p}</p>

        <Button outlined className="mt-4" to="/">
          {notFound.buttonText}
        </Button>
      </div>
    </PageContainer>
  );
};

export default NotFoundPage;
