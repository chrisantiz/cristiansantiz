import React, { useContext } from 'react';
import { ToolbarItems } from '@components/toolbar/ToolbarItems';
import './side-drawer.scss';
import { RootContext } from '@libs/context/root/root.context';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { SocialMediaIcons } from '../SocialMediaIcons';
import moment from 'moment';

export const SideDrawer = () => {
  const { getState } = useContext(RootContext);
  const show = getState(state => state.openSideDrawer);

  const {
    imageSharp: { fluid: imageFluid },
  } = useStaticQuery(query);

  const currentYear = moment()
    .local()
    .year();

  return (
    <aside className={show ? 'side-drawer open' : 'open side-drawer'}>
      {/* photo */}
      <div className="photo-container">
        {/* image */}
        <Img className="rounded-full image-shadow w-1/2" fluid={imageFluid} />
        <div>
          <p className="text-warning font-semibold">CRISTIAN SANTIZ</p>

          {/* role */}
          <div className="flex items-center text-sm web-developer font-semibold -mt-1">
            <span className="text-warning text-sm font-semibold mr-1">
              &#60;
            </span>
            WebDeveloper
            <span className="text-warning text-sm font-semibold ml-1">
              /&#62;
            </span>
          </div>

          <a href="mailto:crisantizan@gmail.com" className="text-center">
            <small>crisantizan@gmail.com</small>
          </a>
        </div>
      </div>

      {/* links */}
      <ToolbarItems icons />

      {/* footer */}
      <div className="aside-footer">
        <SocialMediaIcons />
        <small>Sincé - Sucre (Colombia)</small>
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
