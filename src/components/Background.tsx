import React from 'react';
import BackgroundImage from 'gatsby-background-image';

const Background = ({ image, children }: any) => {
  const backgroundFluidImageStack = [
    ...image,
    `linear-gradient(rgba(30, 108, 217, 0.8), rgba(76, 216, 255, 0.8))`,
    // `linear-gradient(rgba(220, 15, 15, 0.73), rgba(4, 243, 67, 0.73))`,
  ].reverse();

  const MOBILE_QUERY = `(max-width: 491px)`;
  const DESKTOP_QUERY = `(min-width: 491px)`;

  const sources = [
    {
      ...image.mobileImage.childImageSharp.fluid,
      media: MOBILE_QUERY,
    },
    {
      ...image.desktopImage.childImageSharp.fluid,
      media: DESKTOP_QUERY,
    },
  ];

  return (
    <BackgroundImage
      className="gbi-custom-background-image"
      Tag="div"
      fluid={image}>
      {children}
    </BackgroundImage>
  );
};

export default Background;
