import React from 'react';
import { graphql } from 'gatsby';
import { SEO } from '../components/Seo';
import { toolbarChangeStyle } from '../helpers/toolbar-change-style.helper';
import { PageContainer } from '../components/PageContainer';
import { useTranslation } from 'react-i18next';

const IndexPage = () => {
  toolbarChangeStyle({ isTransparent: false });
  const { t, i18n } = useTranslation();
  return (
    <>
      <SEO title="Inicio" />
      <PageContainer>
        <p className="text-4xl">{t('greetings')}</p>
        <button onClick={() => i18n.changeLanguage('en')}>To english</button>
      </PageContainer>
    </>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    mobileImage: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 490, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    desktopImage: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default IndexPage;
