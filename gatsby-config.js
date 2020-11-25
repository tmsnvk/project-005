module.exports = {
  siteMetadata: {
    description: "project-005 || tamasnvk",
    title: "Portfolio Page",
    url: "https://www.tamasnovak.net"
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "roboto mono\:400,600"
        ],
        display: "swap"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./src/data",
      },
    },
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true,
        jsxPragma: "jsx",
        allExtensions: true,
      },
    },
    {
      resolve: "gatsby-alias-imports",
      options: {
        alias: {
          components: "src/components",
          pages: "src/pages",
          utilities: "src/utilities"
        }
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GA_KEY,
        head: false,
        anonymize: true,
        respectDNT: true
      },
    },
  ],
}