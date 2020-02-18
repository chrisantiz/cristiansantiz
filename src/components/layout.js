/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Toolbar } from './toolbar/Toolbar';
import { SideDrawer } from './side-drawer/SideDrawer';
import { Backdrop } from './Backdrop/Backdrop';

// import { useStaticQuery, graphql } from 'gatsby';
// import { motion, AnimatePresence } from 'framer-motion';

export const pageVariants = {
  initial: {
    opacity: 0,
    x: '-100vw',
    scale: 0.8,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: '100vw',
    scale: 1.2,
  },
};

export const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

export const pageStyle = {
  overflowX: 'hidden',
  position: 'absolute',
  height: '100vh',
  width: '100%',
  // padding: '50px',
};

// const Layout = ({ children, location }) => {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `);
//   return (
//     <>
//       <AnimatePresence>
//         <motion.main
//           style={pageStyle}
//           initial="initial"
//           key={location.pathname}
//           animate="in"
//           exit="out"
//           variants={pageVariants}
//           transition={pageTransition}>
//           {children}
//         </motion.main>
//       </AnimatePresence>
//     </>
//   );
// };

export const Layout = ({ children }) => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };
  let backdrop;

  if (sideDrawerOpen) {
    backdrop = <Backdrop onClick={backdropClickHandler} />;
  }

  return (
    <>
      <Toolbar drawerHandleClick={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen} />
      {backdrop}
      <main style={{ marginTop: '56px' }}>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
