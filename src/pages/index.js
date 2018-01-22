import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Animated from "../components/Animated";
import ReadTime from "../components/ReadTime";

const StyledPost = styled.div `
  box-shadow: 0 1px 4px rgba(0,0,0,.04);
  border: 1px solid rgba(0,0,0,.09);
  border-radius: 3px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;

  a {
    border-bottom: none;
  }

  h2 {
    font-size: 26px;
    margin-left: -1.88px;
    line-height: 1.04;
    letter-spacing: -.015em;
    font-weight: 700;
  }
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

const PostContent = styled.div `
  display: flex;
  flex-direction: column;

  img {
    max-height: 200px;
    margin: 20px 0;
    object-fit: cover;
  }

  p {
    font-size: 16px;
  }
`;

const Post = ({
  post,
  index,
}) => {
  const {
    excerpt,
    timeToRead,
    frontmatter: {
      title,
      image,
      date,
    },
  } = post;
  const animate = window.index !== true && index !== 0 ? true : false;
  return (
    <Animated index={index} animate={animate}>
      <Link to={post.frontmatter.path}>
        <StyledPost>
          <Info>
            { date && (<div><time>{date}</time></div>)}
            <ReadTime time={timeToRead} />
          </Info>
          <PostContent>
            <h2>{title}</h2>
            {image && (
              <img src={image.childImageSharp.sizes.src} />
            )}
            <p>{excerpt}</p>
          </PostContent>
        </StyledPost>
      </Link>
    </Animated>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const Header = styled.div `
`;

const BlogPosts = styled.div `
  padding-top: 40px;
  box-sizing: border-box;
  max-width: 700px;
`;

const Title = styled.h1 `
  font-weight: normal;
  max-width: 700px;
`;

const Container = styled.div `
  a {
    border-bottom: none;
  }
`;

const isPublished = ({ frontmatter }) => frontmatter.date;
const hasTitle = ({ frontmatter }) => frontmatter.title.length > 0;

const getPosts = posts => posts
  .map(({ node }) => node)
  .filter(hasTitle)
  .filter(isPublished);

let timer;
export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  if (!timer) {
    timer = setTimeout(() => {
      window.index = true;
    }, 700 * posts.length);
  }
  return (
    <Container>
      <Header>
        <Title>
          <Link
            to="/"
            style={{
              textDecoration: 'none',
            }}
          >
            Kevin Scott
          </Link>
        </Title>
      </Header>
      <BlogPosts>
        {getPosts(posts).map((post, index) => (
          <Post
            key={post.id}
            post={post}
            index={index}
          />
        ))}
      </BlogPosts>
    </Container>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          timeToRead
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            image {
              childImageSharp {
                sizes(maxWidth: 2400) {
                  src
                  srcSet
                  sizes
                }
              }
            }
          }
        }
      }
    }
  }
`;
