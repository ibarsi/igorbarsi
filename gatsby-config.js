module.exports = {
  siteMetadata: {
    title: 'Igor Barsi | Breaking the web, one coffee-less commit at a time!',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/`,
        name: 'pages',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              /*
               * It's important to specify the maxWidth (in pixels) of
               * the content container as this plugin uses this as the
               * base for generating different widths of each image.
               */
              maxWidth: 800,
              showCaptions: true,
              backgroundColor: '#EAEAEA',
            },
          },
        ],
      },
    },
  ],
};
