const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Cristian Santiz <web developer>`,
    description: `Desarrollador web freelance. Amante del autoaprendizaje, el conocimiento libre y de Javascript`,
    author: `Cristian Santiz <crisantizan@gmail.com>`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@': path.resolve(__dirname, 'src'),
          '@components': path.resolve(__dirname, 'src', 'components'),
          '@layouts': path.resolve(__dirname, 'src', 'layouts'),
          '@pages': path.resolve(__dirname, 'src', 'pages'),
          '@helpers': path.resolve(__dirname, 'src', 'helpers'),
          '@models': path.resolve(__dirname, 'src', 'models'),
          '@libs': path.resolve(__dirname, 'src', 'libs'),
          '@styles': path.resolve(__dirname, 'src', 'styles'),
        },
        extensions: ['js, scss, ts, tsx'],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/libs/i18n/locales`,
        name: `locales`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: `blog`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require('tailwindcss'),
          require('autoprefixer'),
          require('postcss-color-mod-function')(),
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printReject: false,
        develop: false,
        tailwind: true,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-transformer-json`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
