import React from 'react';
import { graphql } from 'gatsby';
import { SEO } from '../components/Seo';
import { PageContainer } from '../components/PageContainer';
import { NotFoundIcon } from '@components/icons';
import '@/styles/components/_not-found.scss';
import { PagesLocale } from '../models/locale.model';
import { Button } from '@/components/button/Button';

const NotFoundPage = ({ data }: any) => {
  const pageData: PagesLocale['notFound'] =
    data.allFile.edges[0].node.childLocalesJson.pages.notFound;

  return (
    <PageContainer>
      <SEO title={pageData.title} />
      <div className="not-found">
        <h1 className="uppercase">{pageData.h1}</h1>
        <NotFoundIcon width="200px" height="200px" />
        <p>{pageData.p}</p>

        <Button outlined className="mt-4" to="/">
          {pageData.buttonText}
        </Button>
      </div>
    </PageContainer>
  );
};

export const data = graphql`
  query MyQuery($locale: String!) {
    allFile(filter: { name: { eq: $locale } }) {
      edges {
        node {
          childLocalesJson {
            pages {
              notFound {
                buttonText
                h1
                p
                title
              }
            }
          }
          name
        }
      }
    }
  }
`;

export default NotFoundPage;
