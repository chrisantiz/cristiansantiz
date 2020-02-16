import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';

const IndexPage = () => (
  <>
    <SEO title="Inicio" />
    <div>
      <h1 className="text-blue-400">Hi people from my first page in Gatsby</h1>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </>
);

export default IndexPage;
