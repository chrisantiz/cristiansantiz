import React from 'react';
import { ToolbarItems } from '@components/toolbar/ToolbarItems';
import './side-drawer.scss';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { SocialMediaIcons } from '../SocialMediaIcons';
import moment from 'moment';
import { useGlobalState } from '@/libs/hooks/use-global-state';

export const SideDrawer = () => {
  const {
    state: { openSideDrawer: show, myData },
  } = useGlobalState();

  const {
    imageSharp: { fluid: imageFluid },
  } = useStaticQuery(query);

  const currentYear = moment()
    .local()
    .year();

  return (
    <aside className={show ? 'Side-drawer open' : 'Side-drawer'}>
      {/* photo */}
      <div className="Side-drawer__photo-container">
        {/* image */}
        <Img className="rounded-full image-shadow w-1/2" fluid={imageFluid} />
        <p className="text-warning font-semibold uppercase">
          {myData.name.short}
        </p>

        {/* role */}
        <div className="flex items-center text-sm web-developer font-semibold -mt-1 text-center">
          <span className="text-warning text-sm font-semibold mr-1">&#60;</span>
          WebDeveloper
          <span className="text-warning text-sm font-semibold ml-1">
            /&#62;
          </span>
        </div>

        <a
          href={`mailto:${myData.socialMediaLinks.email}`}
          className="text-center">
          <small>{myData.socialMediaLinks.email}</small>
        </a>
      </div>

      {/* links */}
      <ToolbarItems icons />

      {/* footer */}
      <div className="Side-drawer__footer">
        <SocialMediaIcons />
        <small>{myData.currentLocation}</small>
        <small>{currentYear}</small>
      </div>
    </aside>
  );
};

const query = graphql`
  {
    imageSharp(fluid: { originalName: { eq: "me.jpg" } }) {
      fluid(maxWidth: 120) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
