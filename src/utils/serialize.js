/* This needs to stay in Javascript, since it's consumed via gatsby-config */

const defaultAppend = '';

const serialize = (append = '') => ({ query: { site, allMarkdownRemark } }) => {
  const now = new Date();
  return allMarkdownRemark.edges.filter(edge => {
    return edge.node.frontmatter.date && (now - (new Date(edge.node.frontmatter.date)) > 0);
  }).map(edge => {
    return Object.assign({}, edge.node.frontmatter, {
      description: edge.node.excerpt,
      url: site.siteMetadata.url + edge.node.frontmatter.path,
      guid: site.siteMetadata.url + edge.node.frontmatter.path,
      custom_elements: [{ 'content:encoded': `${edge.node.html}${append}` }],
    });
  });
};

module.exports = serialize;
