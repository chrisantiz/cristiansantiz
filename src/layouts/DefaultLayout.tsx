import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Toolbar } from '../components/toolbar/Toolbar';
import { SideDrawer } from '../components/side-drawer/SideDrawer';
import { Backdrop } from '../components/backdrop/Backdrop';
import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import './default-layout.scss';

/* Layout per defect */
export const DefaultLayout = ({ children }: any) => {
  // show/hide SideDrawer
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const [toolbarColor, setToolbarColor] = useState(false);

  const mainRef = useRef<any>(null);

  /** click event in DrawerToggleButton: toggle SideDrawer */
  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  /** click event in Backdrop: hides itself - hide SideDrawer */
  const backdropClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  // backfrop component container
  let backdrop;

  // show only if SideDrawer is open
  if (sideDrawerOpen) {
    backdrop = <Backdrop onClick={backdropClickHandler} />;
  }

  const scrollFunction = () => {
    if (mainRef!.current!.selfRef.scrollTop > 55) {
      setToolbarColor(true);
    } else {
      setToolbarColor(false);
    }
  };

  return (
    <>
      <Toolbar
        backgroundColor={toolbarColor}
        drawerHandleClick={drawerToggleClickHandler}
      />
      <SideDrawer show={sideDrawerOpen} />
      {backdrop}

      {/* main */}
      <StaticQuery
        query={graphql`
          query {
            image: file(relativePath: { eq: "background.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        `}
        render={data => {
          // Set ImageData.
          const imageData = data.image.childImageSharp.fluid;

          return (
            <BackgroundImage
              ref={mainRef}
              onScroll={scrollFunction}
              style={{
                height: '100vh',
                position: 'inherit',
                overflowY: 'auto',
                zIndex: 80,
                width: '100%',
                paddingTop: '56px',
              }}
              Tag="main"
              color="red"
              fluid={imageData}>
              {children}
            </BackgroundImage>
          );
        }}
      />
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
