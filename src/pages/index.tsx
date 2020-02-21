import React from 'react';
import { graphql } from 'gatsby';
import { SEO } from '../components/Seo';
import { toolbarChangeStyle } from '../helpers/toolbar-change-style.helper';
import { PageContainer } from '../components/page-container';

const IndexPage = ({ data }: any) => {
  toolbarChangeStyle({ isTransparent: false });

  return (
    <>
      <SEO title="Inicio" />
      <PageContainer>
        <p className="text-4xl">Hello world!</p>
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
