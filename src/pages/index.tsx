import React from 'react';
import { SEO } from '@components/Seo';
import { PageContainer } from '@components/PageContainer';
import { useLanguage } from '../libs/hooks/use-language';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import {
  WhatsappIcon,
  InstagramIcon,
  FacebookIcon,
  LinkedinIcon,
  EmailIcon,
} from '../components/icons';

import '@styles/indexPage.scss';

const IndexPage = ({ data }: any) => {
  const {
    lang: {
      pages: { home },
    },
  } = useLanguage();

  return (
    <>
      <SEO title={home.linkLabel} />
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
              className="rounded-full shadow-lg"
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
            Desarrollador web freelance. Amante del autoaprendizaje, el
            conocimiento libre y de Javascript.
          </span>
          {/* social media icons */}
          <div className="flex mt-3">
            <a href="" className="mr-1" title="Email">
              <EmailIcon />
            </a>
            <a href="" className="mr-1" title="Linkedin">
              <LinkedinIcon />
            </a>
            <a href="" className="mr-1" title="Whatsapp">
              <WhatsappIcon />
            </a>
            <a href="" className="mr-1" title="Facebook">
              <FacebookIcon />
            </a>
            <a href="" title="Instagram">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </PageContainer>
    </>
  );
};

export const query = graphql`
  {
    imageSharp(fluid: { originalName: { eq: "me.jpg" } }) {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export default IndexPage;
