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
}

// interface ClassesByImageStatus {
//   /** print always */
//   always?: string;
//   /** before load */
//   from?: string;
//   /** after load */
//   to: string;
// }

export const Home: React.FC<Props> = ({ id }) => {
  // const [imageLoaded, setImageLoaded] = useState(false);
  // const [showLoader, setShowLoader] = useState(true);

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

  /** execute when image has been loaded */
  // function handleImageLoaded() {
  //   setImageLoaded(true);

  //   setTimeout(() => {
  //     setShowLoader(false);
  //   }, 1000);
  // }

  // function displaySpinner() {
  //   const element = (
  //     <div
  //       className={classesByImageStatus({
  //         from: 'opacity-1',
  //         to: 'opacity-0',
  //         always: 'custom-spinner',
  //       })}>
  //       <div className="sp sp-wave" />
  //     </div>
  //   );

  //   return showLoader && element;
  // }

  // /** return clasess according to image status */
  // function classesByImageStatus({
  //   always = '',
  //   from = '',
  //   to,
  // }: ClassesByImageStatus) {
  //   return (!imageLoaded ? from : to).concat(always && ` ${always}`);
  // }

  return (
    <section className="landing-item home-section" id={id}>
      <PageContainer>
        <div
          style={{ height: '85vh' }}
          className="w-full flex justify-center items-center flex-col">
          {/* {displaySpinner()} */}

        {/* image */}
        {/* <div
            className={classesByImageStatus({
              from: 'opacity-0',
              to: 'opacity-1 magictime spaceInRight',
            })}>
          </div> */}
          <Img
            // onLoad={handleImageLoaded}
            className="w-40 sm:w-48 rounded-full image-shadow"
            fluid={image.imageSharp.fluid}
          />

        <div className="flex justify-center items-center flex-col">
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

          {/* current location */}
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
