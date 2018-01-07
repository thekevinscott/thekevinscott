import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "gatsby-link";
// import Helmet from "react-helmet";

// import '../css/index.css'; // add some style if you want!

const StyledPost = styled.div `
  box-shadow: 0 1px 4px rgba(0,0,0,.04);
  border: 1px solid rgba(0,0,0,.09);
  border-radius: 3px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Info = styled.div `
  display: flex;
  color: rgba(0,0,0,0.54);
  font-size: 12px;
  flex: 1;

  * {
    flex: 1;
  }

  a {
    color: inherit;
  }
  a:hover {
    color: rgba(0,0,0,0.74);
  }
`;

const ReadTime = styled.span `
  font-size: 12px;
  text-align: right;
`;

const Post = ({
  post,
}) => (
  <StyledPost>
    <Info>
      <div>
        <Link to={post.frontmatter.path}>
          <time>{post.frontmatter.date}</time>
        </Link>
      </div>
      { /*
      <ReadTime>6 minute read</ReadTime>
      */ }
    </Info>
    <h1>
      <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
    </h1>
    <p>{post.excerpt}</p>
  </StyledPost>
);

Post.propTypes = {
  post: PropTypes.any.isRequired,
};

const Header = styled.div `
  margin-bottom: 40px;
  a:hover {
    border-bottom: none;
  }
`;

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div
      style={{
        margin: '0 auto',
        maxWidth: 640,
      }}
    >
      <Header>
        <h1
          style={{ margin: 0 }}
        >
          <Link
            to="/"
            style={{
              textDecoration: 'none',
            }}
          >
            Kevin Scott
          </Link>
        </h1>
      </Header>
      <div className="blog-posts">
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => (
            <Post post={post} />
          ))}
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
