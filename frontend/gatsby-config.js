module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "frontend",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "@raygesualdo/gatsby-plugin-babel-styled-components",
      options: {
        ssr: true, // override default
        displayName: false,
        preprocess: true,
        minify: false,
        transpileTemplateLiterals: false,
      },
    },
  ],
};
