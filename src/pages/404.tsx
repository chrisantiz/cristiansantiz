import React from 'react';
import { SEO } from '../components/Seo';
import { PageContainer } from '../components/PageContainer';
import '@/styles/pages/not-found.scss';
import { useLang } from '../libs/hooks/use-language';
import { NotFoundIcon } from '@/components/svg-icons';
import Link from 'gatsby-link';

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
        <NotFoundIcon width="10rem" height="10rem" />
        <p>{notFound.p}</p>

        <Link
          className="uppercase font-semibold py-1 px-4 rounded text-warning hover:bg-orange-800 border border-warning bg-transparent hover:border-transparent hover:text-white mt-4"
          to="/">
          {notFound.buttonText}
        </Link>
      </div>
    </PageContainer>
  );
};

export default NotFoundPage;
