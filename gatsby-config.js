const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `TechLabs - We Build. Digital. Shapers.`,
    description: `TechLabs is a platform for young people from all disciplines. We provide state-of-the-art Tech-Skills to solve the problems of our time digitally and entrepreneurially.`,
    url: `https://www.techlabs.org`,
    image: `/assets/tl-favicon.svg`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/images`,
        name: "images",
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `zb5zx2adqx5t`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `@contentful/gatsby-transformer-contentful-richtext`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-T9RV4L2`,

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: `gatsby` },
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `de`, `pt`],
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/ko` when connecting `/`
        redirect: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TechLabs - We Build. Digital. Shapers.`,
        short_name: `TechLabs`,
        start_url: `/`,
        background_color: `#fb1d5c`,
        theme_color: `#fb1d5c`,
        display: `standalone`,
        icon: `src/assets/tl-favicon.svg`, // This path is relative to the root of the site
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-eslint`,
  ],
}
