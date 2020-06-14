import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useSelector } from '@/libs/context/global/context';

function SEO({ description, lang, meta, title }: any) {
  const locale = useSelector(s => s.locale);

  const { site, imageSharp } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
        imageSharp(fluid: { originalName: { eq: "me.jpg" } }) {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    `,
  );
  console.log(imageSharp);
  const englishDescription =
    'Web developer freelance, lover of self-learning, free knowledge and Javascript.';
  const metaDescription = description || site.siteMetadata.description;

  // meta description according to locale
  const localeDescription =
    locale === 'es' ? metaDescription : englishDescription;

  return (
    <Helmet
      htmlAttributes={{
        lang: locale,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: localeDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: localeDescription,
        },
        {
          property: `thumbnail`,
          content: imageSharp.fixed.base64,
        },
        {
          property: 'keywords',
          content:
            ' cristian santiz, santz, cristian, santiz, crisantizan, desarrollo web, programador web, programación web, desarrollo web colombia, desarrollo web latinoamerica, programador frontend, programador backend, freelance, javascript, css, html, vue, angular, react, gatsby, nodejs, nestjs, github',
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: localeDescription,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `es`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export { SEO };
