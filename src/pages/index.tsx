import React from 'react';
import { SEO } from '@components/Seo';
import { PageContainer } from '@components/PageContainer';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Button } from '@/components/button/Button';

import '@styles/indexPage.scss';
import { SocialMediaIcons } from '../components/SocialMediaIcons';

interface SiteData {
  page: {
    linkLabel: string;
    labels: {
      buttonKnowMore: string;
    };
  };
  siteDescription: string;
}

const IndexPage = ({ data }: any) => {
  const pageData: SiteData = data.file.nodes.map((node: any) => {
    return {
      page: node.childLocalesJson.pages.home,
      siteDescription: node.childLocalesJson.siteDescription,
    };
  })[0];

  return (
    <>
      <SEO title={pageData.page.linkLabel} />
      <PageContainer>
        <div
          style={{
            width: '100%',
            height: '75vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
          <div className="w-40 sm:w-48">
            <Img
              className="rounded-full image-shadow"
              fluid={data.imageSharp.fluid}
            />
          </div>
          {/* name */}
          <p className="text-warning font-bold text-2xl">CRISTIAN SANTIZ</p>
          {/* role */}
          <div className="flex items-center text-xl web-developer font-semibold -mt-2">
            <span className="text-warning text-2xl font-semibold mr-1">
              &#60;
            </span>
            WebDeveloper
            <span className="text-warning text-2xl font-semibold ml-1">
              /&#62;
            </span>
          </div>
          {/* message */}
          <span className="sm:w-1/2 text-center mt-1">
            {pageData.siteDescription}
          </span>
          {/* button */}
          <Button to="/sobre-mi" outlined size="sm" className="my-3">
            {pageData.page.labels.buttonKnowMore}
          </Button>
          {/* social media icons */}
          <SocialMediaIcons className="mt-3" />
          <small>Sincé - Sucre (Colombia)</small>
        </div>
      </PageContainer>
    </>
  );
};

export const query = graphql`
  query HomeQuery($locale: String!) {
    imageSharp(fluid: { originalName: { eq: "me.jpg" } }) {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }

    file: allFile(filter: { name: { eq: $locale } }) {
      nodes {
        name
        childLocalesJson {
          pages {
            home {
              linkLabel
              labels {
                buttonKnowMore
              }
            }
          }
          siteDescription
        }
      }
    }
  }
`;

export default IndexPage;
