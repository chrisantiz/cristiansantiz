import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import { SEO } from '../components/Seo';
import BackgroundImage from 'gatsby-background-image';

const IndexPage = ({ data }: any) => {
  // Set ImageData.
  console.log(data);
  const imageData = data.file.childImageSharp.fluid;
  return (
    <>
      <SEO title="Inicio" />

      <BackgroundImage
        style={{
          height: '100vh',
          position: 'inherit',
          overflowY: 'auto',
          zIndex: 80,
          width: '100%',
          paddingTop: '56px',
        }}
        Tag="div"
        color="red"
        fluid={imageData}>
        <div className="container px-3 mx-auto sm:px-0">
          <div className="bg-white">
            {/* <div className="bg-primary-50 w-30 h-30">CON RGBA</div> */}
            {/* <div className="bg-primary w-30 h-30">SIN RGBA</div> */}
            {/* <div className="bg-primary w-50 h-10"></div>
            <div className=" w-50 h-10 bg-secondary"></div>
            <div className=" w-50 h-10 bg-warning"></div>
            <div className=" w-50 h-10 bg-success"></div>
            <div className=" w-50 h-10 bg-danger"></div> */}
          </div>
          <h1>
            <span>Heading Primary Main</span>
            <span>The secondary heading</span>
          </h1>
          <Link to="/page-2" className="text-xl font-semibold underline">
            Page 2
          </Link>
        </div>
      </BackgroundImage>
    </>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default IndexPage;
