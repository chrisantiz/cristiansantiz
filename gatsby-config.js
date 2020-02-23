module.exports = {
  siteMetadata: {
    title: `Cristian Santiz <web developer>`,
    description: `Desarrollador web freelance. Amante del autoaprendizaje, el conocimiento libre y de Javascript`,
    author: `Cristian Santiz <crisantizan@gmail.com>`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        path: `${__dirname}/src/i18n/locales`,
        name: `locales`,
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
    `gatsby-transformer-json`,
    `gatsby-plugin-typescript`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
