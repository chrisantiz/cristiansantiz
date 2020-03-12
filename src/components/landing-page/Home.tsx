import React, { useState } from 'react';
import { PageContainer } from '../PageContainer';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import { Button } from '../button/Button';
import { SocialMediaIcons } from '../SocialMediaIcons';
import { useLang } from '@libs/hooks/use-language';
import { useGlobalState } from '@/libs/hooks/use-global-state';

interface Props {
  id: string;
  // imageLoaded(): void;
}

export const Home: React.FC<Props> = ({ id }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  const image = useStaticQuery(query);
  const {
    lang: {
      pages: { home },
      siteDescription,
    },
  } = useLang();

  const {
    state: { myData },
  } = useGlobalState();

  function handleImageLoaded() {
    setImageLoaded(true);

    setTimeout(() => {
      setShowLoader(false);
    }, 1000);
  }

  function displaySpinner() {
    const element = (
      <div
        className={`custom-spinner ${
          !imageLoaded ? 'opacity-1' : 'opacity-0'
        }`}>
        <div className="sp sp-wave" />
      </div>
    );

    return showLoader ? element : null;
  }

  return (
    <section className="landing-item home-section" id={id}>
      <PageContainer>
        <div
          style={{
            width: '100%',
            height: '85vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
          {displaySpinner()}
          <div
            className={
              imageLoaded ? 'opacity-1 magictime spaceInRight' : 'opacity-0'
            }>
            <Img
              onLoad={handleImageLoaded}
              className={`w-40 sm:w-48 rounded-full image-shadow ${
                imageLoaded ? 'magictime spaceInRight' : ''
              }`}
              fluid={image.imageSharp.fluid}
            />
          </div>

          <div
            className={`flex justify-center items-center flex-col ${
              imageLoaded ? 'opacity-1' : 'opacity-0'
            }`}>
            {/* name */}
            <p
              className="wow magictime swap text-warning font-bold text-2xl uppercase"
              data-wow-delay="400ms">
              {myData.name.short}
            </p>
            {/* role */}
            <div
              className="wow magictime spaceInRight flex items-center text-xl web-developer font-semibold -mt-2"
              data-wow-delay="500ms">
              <span className="text-warning text-2xl font-semibold mr-1">
                &#60;
              </span>
              WebDeveloper
              <span className="text-warning text-2xl font-semibold ml-1">
                /&#62;
              </span>
            </div>
            {/* message */}
            <span
              className="wow magictime swap sm:w-1/2 text-center mt-1"
              data-wow-delay="600ms">
              {siteDescription}
            </span>
            {/* button */}
            <Button
              to="sobre-mi"
              outlined
              size="sm"
              className="wow magictime spaceInRight my-3"
              data-wow-delay="700ms"
              data-wow-offset="-56">
              {home.labels.buttonKnowMore}
            </Button>
            {/* social media icons */}
            <SocialMediaIcons
              className="wow magictime swap mt-3"
              data-wow-delay="750ms"
              data-wow-offset="-56"
            />
            <small
              className="wow magictime swap"
              data-wow-delay="800ms"
              data-wow-offset="-56">
              {myData.currentLocation}
            </small>
          </div>
        </div>
      </PageContainer>
    </section>
  );
};

const query = graphql`
  {
    imageSharp(fluid: { originalName: { eq: "me.jpg" } }) {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
