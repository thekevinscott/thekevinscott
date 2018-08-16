const serialize = require('../serialize');

const getBasicQuery = (edges = []) => ({
  query: {
    site: {
      siteMetadata: {
        url: 'url',
      },
    },
    allMarkdownRemark: {
      edges,
    },
  },
});

const getBasicPost = ({
  excerpt,
  path,
  date,
  html,
} = {}) => ({
  node: {
    excerpt: excerpt !== undefined ? excerpt : 'excerpt',
    frontmatter: {
      path: path !== undefined ? path : 'path',
      date: date !== undefined ? date : '2015',
    },
    html: html !== undefined ? html : 'html',
  },
});

describe('serialize', () => {
  it('returns nothing for nothing', () => {
    expect(serialize()(getBasicQuery())).toEqual([]);
  });

  it('returns correctly formatted edges', () => {
    const post = getBasicPost();
    const query = getBasicQuery([post]);

    expect(serialize()(query)).toEqual([{
      path: post.node.frontmatter.path,
      date: post.node.frontmatter.date,
      description: post.node.excerpt,
      url: 'urlpath',
      guid: 'urlpath',
      custom_elements: [{ 'content:encoded': post.node.html }],
    }]);
  });

  it('omits entries in the future', () => {
    const post = getBasicPost({
      date: '2029',
    });

    const query = getBasicQuery([post]);

    expect(serialize()(query)).toEqual([]);
  });

  it('omits entries with no date', () => {
    const post = getBasicPost({
      date: null,
    });

    const query = getBasicQuery([post]);

    expect(serialize()(query)).toEqual([]);
  });

  it('appends to posts', () => {
    const post = getBasicPost();
    const query = getBasicQuery([post]);

    expect(serialize('foo')(query)).toEqual([{
      path: post.node.frontmatter.path,
      date: post.node.frontmatter.date,
      description: post.node.excerpt,
      url: 'urlpath',
      guid: 'urlpath',
      custom_elements: [{ 'content:encoded': `${post.node.html}foo` }],
    }]);
  });
});
