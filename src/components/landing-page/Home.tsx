import React from 'react';
import { PageContainer } from '../PageContainer';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import { Button } from '../button/Button';
import { SocialMediaIcons } from '../SocialMediaIcons';
import { useLang } from '../../libs/hooks/use-language';
import { useStore } from '../../libs/hooks/use-store';

interface Props {
  id: string;
}

export const Home: React.FC<Props> = ({ id }) => {
  const image = useStaticQuery(query);
  const {
    lang: {
      pages: { home },
      siteDescription,
    },
  } = useLang();

  const { name, currentLocation } = useStore().getState(s => s.myData);
  return (
    <section className="landing-item home-section" id={id}>
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
              fluid={image.imageSharp.fluid}
            />
          </div>
          {/* name */}
          <p className="text-warning font-bold text-2xl uppercase">{name.short}</p>
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
          <span className="sm:w-1/2 text-center mt-1">{siteDescription}</span>
          {/* button */}
          <Button to="/sobre-mi" outlined size="sm" className="my-3">
            {home.labels.buttonKnowMore}
          </Button>
          {/* social media icons */}
          <SocialMediaIcons className="mt-3" />
          <small>{currentLocation}</small>
        </div>
      </PageContainer>
    </section>
  );
};

const query = graphql`
  {
    imageSharp(fluid: { originalName: { eq: "me.jpg" } }) {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
