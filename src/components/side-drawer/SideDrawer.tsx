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

  const currentYear = moment().local().year();

  return (
    <aside className={show ? 'side-drawer open' : 'open side-drawer'}>
      <div className="photo-container">
        <Img className="rounded-full image-shadow w-1/2" fluid={imageFluid} />
        <div>
          <p className="text-warning -mb-2 font-semibold">CRISTIAN SANTIZ</p>
          <a href="mailto:crisantizan@gmail.com">
            <span className="text-xs">crisantizan@gmail.com</span>
          </a>
        </div>
      </div>
      <ToolbarItems />
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
