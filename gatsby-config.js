const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  siteMetadata: {
    title: "Artificial Intelligence, Design, and the Web",
    description: "Design. Artificial Intelligence. Javascript. Master Machine Learning in your Browser with Tensorflow.js",
    keywords: "Tensorflow.js, Machine Learning, Artificial Intelligence, Design, Pytorch, TensorFlow, Deep Learning, Kaggle",
    author: "Kevin Scott",
    url: "https://thekevinscott.com",
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-next`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              url
              site_url: url
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              const now = new Date();
              return allMarkdownRemark.edges.filter(edge => {
                return edge.node.frontmatter.date && (now - (new Date(edge.node.frontmatter.date)) > 0);
              }).map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  url: site.siteMetadata.url + edge.node.frontmatter.path,
                  guid: site.siteMetadata.url + edge.node.frontmatter.path,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                });
              });
            },
            query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
                    excerpt
                    html
                    frontmatter {
                      path
                      title
                      date
                    }
                  }
                }
              }
            }
          `,
            output: "/rss.xml",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        respectDNT: true,
        head: true,
        trackingId: "UA-112845439-1",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    'gatsby-plugin-catch-links',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-external-links`,
          'gatsby-remark-copy-linked-files',
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              showCaptions: true,
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 640,
              // Remove the default behavior of adding a link to each
              // image.
              linkImagesToOriginal: true,
              // Analyze images' pixel density to make decisions about
              // target image size. This is what GitHub is doing when
              // embedding images in tickets. This is a useful setting
              // for documentation pages with a lot of screenshots.
              // It can have unintended side effects on high pixel
              // density artworks.
              //
              // Example: A screenshot made on a retina screen with a
              // resolution of 144 (e.g. Macbook) and a width of 100px,
              // will be rendered at 50px.
              //
              // Defaults to false.
              sizeByPixelDensity: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-module-local-ident-name`,
      options: {
        localIdentName: isProduction ? '[hash:base64:5]' : 'tks-[folder]-[local]-[hash:base64:5]',
        includeSASS: true,
      }
    },
  ],
}
