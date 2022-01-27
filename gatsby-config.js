module.exports = {
  siteMetadata: {
    title: `Gunn Hwang Portfolio`,
    siteUrl: `https://www.gunnhwang.com`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
  ],
};
