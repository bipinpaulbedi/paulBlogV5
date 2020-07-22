module.exports = {
  siteMetadata: {
    title: `Notions by Bipin`,
    name: `Bipin`,
    siteUrl: `https://www.bipinpaulbedi.com`,
    description: `bipin paul bedi`,
    hero: {
      heading: `Welcome to epitome of thoughts by bipin paul bedi.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/bipinpaulbedi`,
      },
      {
        name: `github`,
        url: `https://github.com/bipinpaulbedi`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/bipinpaulbedi`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/bipinpaulbedi`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `notions by bipin`,
        short_name: `bipin`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-netlify-cms`,
    //   options: {
    //   },
    // },
  ],
};
