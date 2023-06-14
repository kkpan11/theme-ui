const remarkGfm = require('remark-gfm')
const remarkSlug = require('remark-slug')

module.exports = {
  siteMetadata: {
    siteUrl: 'https://theme-ui.com',
  },
  plugins: [
    'gatsby-plugin-pnpm',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['mdx', 'md'],
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkSlug],
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-theme-style-guide',
      options: {
        basePath: '/style-guide-demo',
      },
    },
  ],
  flags: {
    PARALLEL_SOURCING: true,
    FAST_DEV: true,
    DEV_SSR: true,
    DEV_WEBPACK_CACHE: true,
  },
  // https://www.gatsbyjs.com/docs/reference/release-notes/v4.7/#trailingslash-option
  trailingSlash: 'never', // We currently have duplicate Algolia results. This __may__ fix them.
}
