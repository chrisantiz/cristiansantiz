import React from 'react';
import { Link, graphql } from 'gatsby';
import { SEO } from '../components/Seo';

const IndexPage = ({ data }: any) => (
  <>
    <SEO title="Inicio" />
    <h1>
      <span>Heading Primary Main</span>
      <span>The secondary heading</span>
    </h1>
    <Link to="/page-2" className="text-xl font-semibold underline">
      Page 2
    </Link>
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
