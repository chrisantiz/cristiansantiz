const path = require('path');
const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://cristiansantiz.netlify.app',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;

const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    title: `Cristian Santiz <web developer>`,
    description: `Desarrollador web freelance. Amante del autoaprendizaje, el conocimiento libre y de Javascript`,
    author: `Cristian Santiz <crisantizan@gmail.com>`,
    siteUrl,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
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
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/libs/i18n/locales`,
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
        icon: `src/assets/images/logo.png`,
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
        develop: true,
        tailwind: true,
        whitelistPatterns: [
          /^Skill-item__progressbar--/,
          /^Skill-item__content--/,
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          // include: /\/svg\/.*\.svg$/,
          include: /\/svg\/(?!skills).*\.svg$/,
        },
      },
    },
    // `gatsby-plugin-mdx`,
    `gatsby-transformer-json`,
  ],
};
