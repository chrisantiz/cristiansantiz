import React from 'react';
import { Link, graphql } from 'gatsby';

import SEO from '../components/seo';
import '../styles/index-page.css';
import Header from '../components/header/Header';

const IndexPage = ({ data }) => (
  <>
    <SEO title="Inicio" />
    <div className="fullscreen-image">
      <Header siteTitle={data.site.siteMetadata.title} />
      {/* <div className="brand-box">
        <span className="brand">Example Brand</span>
      </div> */}

      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Heading Primary Main</span>
          <span className="heading-primary-sub">The secondary heading</span>
        </h1>
        <Link to="/page-2" className="btn btn-white btn-animated">
          Discover our tours
        </Link>
      </div>
    </div>
  </>
);

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default IndexPage;
