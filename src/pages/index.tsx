import React from 'react';
import { graphql } from 'gatsby';
import { SEO } from '@components/Seo';
import { toolbarChangeStyle } from '@helpers/toolbar-change-style.helper';
import { PageContainer } from '@components/PageContainer';
import { useLanguage } from '@libs/hooks/use-language';

const IndexPage = (props: any) => {
  toolbarChangeStyle({ isTransparent: false });
  const { lang, toggleLang } = useLanguage();
  return (
    <>
      <SEO title="Inicio" />
      <PageContainer>
        <button className="bg-red-300" onClick={() => toggleLang()}>
          Toggle language
        </button>
        <pre>{lang.labels.githubBtn}</pre>
        <pre>{lang.pages.aboutMe.text}</pre>
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
